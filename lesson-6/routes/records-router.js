import { Router } from "express";
const recordRouter = new Router();

recordRouter.get("/", (req, res) => {
  res.json({
    id: "1",
    data: "some data here"
  })
});

export { recordRouter }
