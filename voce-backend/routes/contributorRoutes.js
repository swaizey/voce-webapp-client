import express from 'express';
import { createContributor } from '../controllers/contributorController.js';

const router = express.Router();

router.post('/', createContributor);

export default router;
