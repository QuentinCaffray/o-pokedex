import { Pokemon } from "../models/index.js";

export const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({
      message:
        "Erreur ! Les pokemons se sont échappés lors de leurs récupération!",
      error: error.message,
    });
  }
};
