import express from "express";
import {
  getAllPokemons,
  getPokemonById,
} from "../controllers/pokemonController.js";

const router = express.Router();

router.get("/", getAllPokemons);

// Route de test statique (dans une fonction !)
router.get("/test", (req, res) => {
  res.json({ message: "Route /test fonctionne !" });
});

router.get("/:id", getPokemonById);

export default router;
