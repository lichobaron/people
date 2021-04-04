import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import PersonController from './controllers/PersonController';

const app = express();
app.use( bodyParser.json() );
app.use(cors())

app.get('/', ( req, res ) => {
  res.status(200).send( { message: 'People root', status: true } );
});

const personController = new PersonController( app );

(async () => {
  await personController.listen();
})();

export default app;