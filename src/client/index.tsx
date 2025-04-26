import { hydrateRoot } from "react-dom/client";
import App from "@shared/App";
import { BrowserRouter } from "react-router-dom";
import "@shared/i18n";

if (document != undefined) {
  const root = document.getElementById("root");
  if (root) {
    hydrateRoot(
      root,
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  }
}
