import express from "express";
import { getAllTypes, getTypeById } from "../controllers/typeController.js";

const router = express.Router();

router.get("/", getAllTypes);

router.get("/:id", getTypeById);

export default router;
