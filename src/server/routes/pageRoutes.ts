import { Router } from "express";
import { render } from "../utils/render";

const router = Router();

router.get("*", (req, res) => {
  const html = render({ url: req.url, initialCookies: req.cookies });
  res.send(html);
});

export default router;
