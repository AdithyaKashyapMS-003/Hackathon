import express from 'express';
import { addNote, getNotes, calculateEMI, addFarmerLog } from '../controllers/healthdashboard.controller.js';
import { verifyUser } from '../utils/varifyUser.js';

const router = express.Router();

router.post('/note', verifyUser, addNote);
router.get('/notes', verifyUser, getNotes);
router.post('/emi', calculateEMI);
router.post('/farmer-log', verifyUser, addFarmerLog);

const cropTypes = [
  "Wheat", "Rice", "Maize", "Paddy", "Jowar", "Bajra", "Ragi", "Tur", "Moong", "Urad", "Groundnut", "Soybean", "Cotton", "Sugarcane", "Barley", "Gram", "Mustard"
];

router.get('/crop-types', (req, res) => {
  res.json(cropTypes);
});

export default router;