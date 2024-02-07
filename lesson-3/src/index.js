import { app } from "./server.js";
import 'dotenv/config';


const PORT = process.env.PORT || 3000;


app.listen(PORT, hostname: () => {
console.log('server started on port $ {PORT} ');
})
