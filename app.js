import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/nasa', async (req, res) => {
  try {
    const webResponse = await fetch('https://images-api.nasa.gov/search?q=air%20show&media_type=image&year_start=2020&year_end=2026');
    const data = await webResponse.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from NASA API' });
  }
});
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = Number(process.env.PORT || 3000);
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
  console.log(`Local server running on http://localhost:${PORT}`);
});