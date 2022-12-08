import express from 'express';
import simsimiRoutes from './simsimi/simsimi';

const router = express.Router();

router.use('/simsimi', simsimiRoutes);

export default router;