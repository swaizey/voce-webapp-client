import { persistData } from '../config/db.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const result = await persistData('contacts', { name, email, message });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
