import express from 'express';
import * as simsimiControllers from "../../controllers/simsimi";

const router = express.Router();

router.post('/', simsimiControllers.makeSimSimi);
router.get('/', simsimiControllers.getTalkSets);

export default router;