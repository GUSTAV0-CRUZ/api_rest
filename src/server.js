import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log(`ctrl + click para acessa http://localhost:${port}`);
});
