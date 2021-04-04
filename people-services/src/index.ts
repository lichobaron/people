import express from "express";
import bodyParser from "body-parser";
import { PORT } from './config/express';
import PersonController from './controllers/PersonController';

const app = express();
app.use( bodyParser.json() );

const personController = new PersonController( app );

(async () => {
  await personController.listen();

  app.listen(PORT, () => {
    console.log("Started at http://localhost:%d", PORT);
  });
})();
