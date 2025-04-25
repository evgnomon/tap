import { Router } from "express";
import { render } from "../utils/render.js";

const router = Router();

router.get("*", (req, res) => {
  const context = {};
  const html = render({ url: req.url, context });
  res.send(html);
});

export default router;
