import express from "express";
import { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam, addPokemonToTeam, removePokemonFromTeam } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getAllTeams);
router.get("/:id", getTeamById);
router.post("/", createTeam);
router.patch("/:id", updateTeam);
router.delete("/:id", deleteTeam);
router.post("/:id/pokemons", addPokemonToTeam);
router.delete("/:id/pokemons/:pokemonId", removePokemonFromTeam);

export default router;
