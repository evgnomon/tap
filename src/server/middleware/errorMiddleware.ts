import { Response } from "express";

const errorMiddleware = (err: Error, res: Response) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};

export default errorMiddleware;
