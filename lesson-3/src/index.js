import 'dotenv/config'
import { app } from "./server.js";

const PORT = process.env.PORT || 3000;
process.env.PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);


});
