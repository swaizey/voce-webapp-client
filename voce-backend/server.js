import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import contributorRoutes from './routes/contributorRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import donorRoutes from './routes/donorRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Voce backend is running' });
});

app.use('/api/contact', contactRoutes);
app.use('/api/contributors', contributorRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/donors', donorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
