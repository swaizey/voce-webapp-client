import express from 'express';
import { persistData } from '../config/db.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, name } = req.body;
    const result = await persistData('subscribers', { email, name });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
