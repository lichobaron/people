import app from './App';
import { PORT } from './config/express';

app.listen(PORT, () => {
  console.log("Started at http://localhost:%d", PORT);
});