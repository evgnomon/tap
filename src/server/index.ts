import express from "express";
import pageRoutes from "./routes/pageRoutes";
import apiRoutes from "./routes/apiRoutes";
import { parseCookies } from "@shared/utils/cookies";
import i18n from "@shared/i18n";

const app = express();

app.use((req, _, next) => {
  const cookies = req.headers.cookie || "";
  const parsedCookies = parseCookies(cookies);
  req.cookies = parsedCookies;
  i18n.changeLanguage(parsedCookies.language || "en");
  next();
});

app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", pageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
