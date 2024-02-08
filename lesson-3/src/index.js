import 'dotenv/config'
import { app } from "./server.js";
// const express = require('express');
// const app = express();
const PORT = process.env.PORT || 3000;
// const HOSTNAME = 'localhost'; // specify your hostname here

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  console.log("test restart se");
  
});
