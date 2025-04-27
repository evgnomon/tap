import { Router } from "express";
import { render } from "../utils/render";

const router = Router();

router.get("*", (req, res) => {
  const context = {};
  const html = render({ url: req.url, context, initialCookies: req.cookies });
  res.send(html);
});

export default router;
