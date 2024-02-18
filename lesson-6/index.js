import express from "express";
import { recordRouter } from "./routes/records-router.js";
import { carRouter } from "./routes/car-router.js";
import { ErrorHandler } from "./middleware/errorHandler.js";



const app = express(); 

app.all("/test", (req, res, next) => {
  console.log("completed for all");
  next();
});

app.use("/cars", carRouter); 
app.use("/records", recordRouter);

app.get("/users", (req, res, next) => {
  console.log("users route");
      throw new Error('some engry error')
  next()
  res.json({
    user: "Ivan",
    password: "1234",
  });
  next();
});

app.use(ErrorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
