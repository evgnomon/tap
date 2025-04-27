import { build } from "esbuild";
import postcss from "esbuild-postcss";

// Shared esbuild options
const sharedOptions = {
  bundle: true, // Bundle dependencies
  minify: process.env.NODE_ENV === "production", // Minify in production
  sourcemap: true, // Generate source maps
  sourcemap: "external",
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
  },
  resolveExtensions: [".tsx", ".ts", ".js", ".json"],
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development",
    ),
  },
  target: "esnext",
};

build({
  ...sharedOptions,
  entryPoints: ["src/client/index.tsx", "src/client/styles/global.css"],
  outdir: "public",
  format: "iife",
  platform: "browser",
  tsconfig: "./src/client/tsconfig.json", // Path to your tsconfig.json
  plugins: [postcss()],
  assetNames: "assets/[name]-[hash]",
}).catch(() => process.exit(1));

// Server build configuration
build({
  ...sharedOptions,
  bundle: true,
  entryPoints: ["src/server/index.ts"], // Server entry point
  outdir: "dist/server", // Server output directory
  platform: "node", // Target Node.js
  format: "cjs", // CommonJS for Node.js (or 'esm' for ES Modules)
  tsconfig: "./src/server/tsconfig.json", // Path to your tsconfig.json
}).catch(() => process.exit(1));
