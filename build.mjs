/* eslint-disable no-undef */
import {build} from "esbuild";
import postcss from "esbuild-postcss";
import {promises as fs} from "fs";
import {resolve, extname, join, relative, dirname} from "path";

// Custom plugin to copy Markdown and image files
const copyContentPlugin = {
  name: "copy-content",
  setup(build) {
    // Handle Markdown and image files
    build.onResolve({ filter: /\.(md|png|jpg|jpeg|gif)$/ }, (args) => {
      if (args.path.includes("content/posts")) {
        return { path: resolve(args.path), namespace: "copy-content" };
      }
      return null;
    });

    build.onLoad({ filter: /.*/, namespace: "copy-content" }, async (args) => {
      const filePath = args.path;
      const fileExt = extname(filePath).slice(1);
      const outputPath = join(
        "public",
        "content",
        "posts",
        relative(resolve("src/shared/content/posts"), filePath),
      );

      // Ensure output directory exists
      await fs.mkdir(dirname(outputPath), { recursive: true });

      // Copy file to public directory
      await fs.copyFile(filePath, outputPath);

      // Return a dummy module to satisfy esbuild
      return {
        contents: "",
        loader: "empty",
      };
    });
  },
};

// Shared esbuild options
const sharedOptions = {
  bundle: true,
  minify: process.env.NODE_ENV === "production",
  sourcemap: true,
  alias: {
    "@client": "./src/client",
    "@shared": "./src/shared",
    "@server": "./src/server",
  },
  loader: {
    ".ts": "ts",
    ".tsx": "tsx",
    ".css": "css",
    ".ttf": "file",
    ".woff": "file",
    ".woff2": "file",
    ".ico": "file",
    ".svg": "file",
    ".md": "file",
    ".png": "file",
    ".jpg": "file",
    ".jpeg": "file",
    ".gif": "file",
  },
  resolveExtensions: [".tsx", ".ts", ".js", ".json", ".md"],
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development",
    ),
  },
  target: "esnext",
};

// Client build
build({
  ...sharedOptions,
  entryPoints: ["src/client/index.tsx", "src/client/styles/global.css"],
  outdir: "public",
  format: "iife",
  platform: "browser",
  tsconfig: "./src/client/tsconfig.json",
  plugins: [postcss(), copyContentPlugin],
  assetNames: "assets/[name]-[hash]",
}).catch(() => process.exit(1));

// Server build
build({
  ...sharedOptions,
  bundle: true,
  entryPoints: ["src/server/index.ts"],
  outdir: "dist/server",
  platform: "node",
  format: "cjs",
  tsconfig: "./src/server/tsconfig.json",
  plugins: [copyContentPlugin], // Include plugin for server if needed
}).catch(() => process.exit(1));
