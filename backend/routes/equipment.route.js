import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Simple storage for uploaded images (local filesystem)
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// In-memory equipment store (replace with DB in production)
let equipments = [];

// Upload equipment
router.post("/upload", upload.single("image"), (req, res) => {
  const { name, description, location, pricePerDay } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";
  const equipment = {
    _id: Date.now().toString(),
    name,
    description,
    location,
    pricePerDay,
    imageUrl,
  };
  equipments.push(equipment);
  res.json({ success: true, equipment });
});

// Get all equipment
router.get("/", (req, res) => {
  res.json(equipments);
});

export default router;