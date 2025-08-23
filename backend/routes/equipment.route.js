import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Equipment from "../models/Equipment.js";

const router = express.Router();

// Create uploads folder if not exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// ✅ Upload equipment (image + certificate)
router.post("/upload", upload.fields([
  { name: "image", maxCount: 1 },
  { name: "certificate", maxCount: 1 },
]), async (req, res) => {
  try {
    const { name, description, location, pricePerDay } = req.body;

    if (!req.files.image || !req.files.certificate) {
      return res.status(400).json({ success: false, message: "Both image and certificate are required" });
    }

  const imageUrl = req.files.image ? `/uploads/${req.files.image[0].filename}` : "";
const certificateUrl = req.files.certificate ? `/uploads/${req.files.certificate[0].filename}` : "";

const newEquipment = new Equipment({
  name,
  description,
  location,
  pricePerDay,
  imageUrl,
  certificateUrl
});
await newEquipment.save();


    res.json({ success: true, equipment: newEquipment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ✅ Get all equipment
router.get("/", async (req, res) => {
  try {
    const equipments = await Equipment.find().sort({ createdAt: -1 });
    res.json(equipments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;
