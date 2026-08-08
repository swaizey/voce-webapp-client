import { persistData } from '../config/db.js';

export const createContributor = async (req, res) => {
  try {
    const { name, email, role, message } = req.body;
    const result = await persistData('contributors', { name, email, role, message });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
