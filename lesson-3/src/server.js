import express from "express";
import fs from 'fs/promises';
const fileName = './lesson-3/src/db.json';
async function init() {
      try {
            await fs.access(fileName, fs.constants.F_OK);
      }
      catch (error) {
            await fs.writeFile(fileName, JSON.stringify({ users: [] }));

      }

};

await init();
const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {

      try {
            await fs.writeFile(fileName, JSON.stringify(req.body));

            res.send(`${req.body.users.length} users added successfully.`);
      } catch (error) {
            console.error('Error adding user:', error);
            res.status(500).send('Internal Server Error');
      }
});

app.get("/users", async (req, res) => {
      try {
            const readingContent = await fs.readFile(fileName, 'utf-8');

            res.json(JSON.parse(readingContent));
      } catch (error) {
            console.error('Error getting users:', error);
            res.status(500).send('Internal Server Error');
      }
});

export { app };
