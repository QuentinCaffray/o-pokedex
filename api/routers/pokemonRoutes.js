import express from "express";
import { getAllPokemons } from "../controllers/pokemonController.js";

const router = express.Router();

router.get("/", getAllPokemons);
// router.get("/:id", getPokemonById);  // ← Commente ou enlève cette ligne pour le moment

export default router;
