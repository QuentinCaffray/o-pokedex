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

export const getPokemonById = async (req, res) => {
  console.log("🔍 Route /:id appelée avec ID :", req.params.id);
  const { id } = req.params;
  try {
    const pokemon = await Pokemon.findByPk(id);
    if (pokemon) {
      res.status(200).json(pokemon);
    } else {
      res.status(404).json({ message: "Pokémon non trouvé !" });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Erreur ! Le pokémon s'est échappé lors de sa récupération par ID!",
      error: error.message,
    });
  }
};
