import express from "express";
import {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
  addPokemonToTeam,
  removePokemonFromTeam,
} from "../controllers/teamController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllTeams);
router.get("/:id", getTeamById);

router.post("/", authMiddleware, createTeam);
router.patch("/:id", authMiddleware, updateTeam);
router.delete("/:id", authMiddleware, deleteTeam);
router.post("/:id/pokemons", authMiddleware, addPokemonToTeam);
router.delete(
  "/:id/pokemons/:pokemonId",
  authMiddleware,
  removePokemonFromTeam
);

export default router;
