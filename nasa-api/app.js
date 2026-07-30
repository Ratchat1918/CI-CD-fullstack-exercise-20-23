import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/api/nasa`);
});

app.get('/api/nasa', async (req, res) => {
    const apiKey = process.env.NASA_API_KEY;
    try {
        const webResponse = await fetch('https://images-api.nasa.gov/search?q=air%20show&media_type=image&year_start=2020&year_end=2026');
        const data = await webResponse.json();
        res.json(data);
    }catch (error) {
        console.error('Error fetching data from NASA API:', error);
        res.status(500).json({ error: 'Failed to fetch data from NASA API' });
    }});