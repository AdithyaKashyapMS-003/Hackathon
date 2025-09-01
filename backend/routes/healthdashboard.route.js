import express from 'express';
import { addNote, getNotes, calculateEMI, addFarmerLog } from '../controllers/healthdashboard.controller.js';

const router = express.Router();

// ❌ Removed verifyUser, now all users can access without login
router.post('/note', addNote);
router.get('/notes', getNotes);
router.post('/emi', calculateEMI);
router.post('/farmer-log', addFarmerLog);

const cropTypes = [
  "Wheat", "Rice", "Maize", "Paddy", "Jowar", "Bajra", "Ragi", "Tur", "Moong",
  "Urad", "Groundnut", "Soybean", "Cotton", "Sugarcane", "Barley", "Gram", "Mustard"
];

router.get('/crop-types', (req, res) => {
  res.json(cropTypes);
});

export default router;
