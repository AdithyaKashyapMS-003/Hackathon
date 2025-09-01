import healthdashboard from '../models/healthdashboard.model.js';

// Add Note (no user required)
export const addNote = async (req, res, next) => {
  try {
    const { note } = req.body;
    const newNote = new healthdashboard({ note });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

// Get Notes (all notes, not user-specific)
export const getNotes = async (req, res, next) => {
  try {
    const notes = await healthdashboard.find();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

// Calculate EMI (works for everyone)
export const calculateEMI = (req, res, next) => {
  try {
    const { principal, annualRate, tenureMonths } = req.body;
    if (!principal || !annualRate || !tenureMonths) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const P = Number(principal);
    const R = Number(annualRate) / 12 / 100;
    const N = Number(tenureMonths);

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    res.status(200).json({ emi: emi.toFixed(2) });
  } catch (error) {
    next(error);
  }
};

// Farmer Log calculation (no login needed)
export const addFarmerLog = async (req, res, next) => {
  try {
    const { loanAmount, interest, tenure, cropType, landSize, location, expenses } = req.body;

    const cropPricesPerQt = {
      paddy: 2369,
      wheat: 2856,
      jowar: 3371,
      bajra: 2625,
      ragi: 4290,
      maize: 2225,
      tur: 7550,
      moong: 8682,
      urad: 7400,
      groundnut: 6783,
      sunflower_seed: 7280,
      soybean: 5328,
      sesamum: 9267,
      nigerseed: 8717,
      cotton_medium: 7710,
      cotton_long: 8110,
      sugarcane: 400,
      barley: 2500,
      gram: 5000,
      mustard: 6000,
      rapeseed: 6000,
      jute: 4500,
      mesta: 4500,
      onion: 1600,
      basmati: 3000,
      soybean_fall: 4305,
      rice_common_min: 2300,
      maize_market: 2541,
    };

    function estimateIncome(cropType, landSizeInAcres, yieldQtPerAcre = 10) {
      const key = cropType.toLowerCase().replace(/\s+/g, '_');
      const price = cropPricesPerQt[key] ?? 5000;
      return price * landSizeInAcres * yieldQtPerAcre;
    }

    const estimatedIncome = estimateIncome(cropType, landSize);

    // Store log (without userId)
    const newLog = new healthdashboard({
      loanAmount,
      interest,
      tenure,
      cropType,
      landSize,
      location,
      expenses: expenses || [],
      estimatedIncome,
    });

    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    next(error);
  }
};
