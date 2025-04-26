import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "@shared/App";

interface RenderProps {
  url: string;
  context: Record<string, any>;
}

export const render = ({ url }: RenderProps): string => {
  const content = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Zygote .Run</title>
        <link rel="stylesheet" href="/styles/global.css">
        <link rel="icon" type="image/x-icon" href="@client/assets/icons/favicon.ico">
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
