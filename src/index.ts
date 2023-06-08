import app from './app';
import { PORT } from './config';
const port = PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}  on port ${port}`);
});
