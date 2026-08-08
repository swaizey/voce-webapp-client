import express from 'express';
import { createDonor } from '../controllers/donorController.js';

const router = express.Router();

router.post('/', createDonor);

export default router;
