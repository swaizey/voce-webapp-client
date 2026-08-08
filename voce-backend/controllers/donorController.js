import { persistData } from '../config/db.js';

export const createDonor = async (req, res) => {
  try {
    const { name, email, amount, message } = req.body;
    const result = await persistData('donors', { name, email, amount, message });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
