import express from "express";
import pageRoutes from "./routes/pageRoutes";
import apiRoutes from "./routes/apiRoutes";
import "@shared/i18n";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", pageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
