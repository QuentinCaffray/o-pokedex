import { Type, Pokemon } from "../models/index.js";

export const getAllTypes = async (req, res) => {
  try {
    const types = await Type.findAll();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des types de pokémons!",
      error: error.message,
    });
  }
};

export const getTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const type = await Type.findByPk(id, {
      include: { model: Pokemon, as: "pokemons" },
    });
    if (type) {
      res.status(200).json(type);
    } else {
      res.status(404).json({ message: "Type non trouvé !" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération du type par ID!",
      error: error.message,
    });
  }
};
