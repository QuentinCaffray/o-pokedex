import { Team, Pokemon } from "../models/index.js";

// 1. GET /teams - Lister toutes les équipes
export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: { model: Pokemon, as: "pokemons" },
    });
    res.status(200).json(teams);
  } catch (error) {
    console.error("Erreur lors de la récupération des équipes :", error);
    res.status(500).json({
      message:
        "Erreur ! Les équipes se sont perdues lors de leur récupération !",
      error: error.message,
    });
  }
};

// 2. GET /teams/:id - Afficher une équipe avec ses Pokémons
export const getTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findByPk(id, {
      include: { model: Pokemon, as: "pokemons" },
    });

    if (!team) {
      return res.status(404).json({ message: "Équipe non trouvée !" });
    }

    res.status(200).json(team);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'équipe par ID :", error);
    res.status(500).json({
      message:
        "Erreur ! L'équipe s'est perdue lors de sa récupération par ID !",
      error: error.message,
    });
  }
};

// 3. POST /teams - Créer une nouvelle équipe
export const createTeam = async (req, res) => {
  const { name, description } = req.body;

  try {
    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Le nom de l'équipe est requis" });
    }

    const newTeam = await Team.create({ name, description });
    res.status(201).json(newTeam);
  } catch (error) {
    console.error("Erreur lors de la création de l'équipe :", error);
    res.status(500).json({
      message: "Erreur ! Impossible de créer l'équipe !",
      error: error.message,
    });
  }
};

// 4. PATCH /teams/:id - Modifier une équipe
export const updateTeam = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const team = await Team.findByPk(id);
    if (!team) {
      return res.status(404).json({ message: "Équipe non trouvée !" });
    }

    team.name = name || team.name;
    team.description = description || team.description;
    await team.save();

    res.status(200).json(team);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'équipe :", error);
    res.status(500).json({
      message: "Erreur ! Impossible de mettre à jour l'équipe !",
      error: error.message,
    });
  }
};

// 5. DELETE /teams/:id - Supprimer une équipe
export const deleteTeam = async (req, res) => {
  const { id } = req.params;

  try {
    const team = await Team.findByPk(id);
    if (!team) {
      return res.status(404).json({ message: "Équipe non trouvée !" });
    }

    await team.destroy();
    res.status(200).json({ message: "Équipe supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'équipe :", error);
    res.status(500).json({
      message: "Erreur ! Impossible de supprimer l'équipe !",
      error: error.message,
    });
  }
};

// 6. POST /teams/:id/pokemons - Ajouter un Pokémon à une équipe
export const addPokemonToTeam = async (req, res) => {
  const { id } = req.params;
  const { pokemon_id } = req.body;

  try {
    const team = await Team.findByPk(id);
    if (!team) {
      return res.status(404).json({ message: "Équipe non trouvée !" });
    }

    const pokemon = await Pokemon.findByPk(pokemon_id);
    if (!pokemon) {
      return res.status(404).json({ message: "Pokémon non trouvé !" });
    }

    await team.addPokemon(pokemon);

    await team.reload({
      include: { model: Pokemon, as: "pokemons" },
    });

    res.status(200).json(team);
  } catch (error) {
    console.error("Erreur lors de l'ajout du Pokémon à l'équipe :", error);
    res.status(500).json({
      message: "Erreur ! Impossible d'ajouter le Pokémon à l'équipe !",
      error: error.message,
    });
  }
};

// 7. DELETE /teams/:id/pokemons/:pokemonId - Retirer un Pokémon d'une équipe
export const removePokemonFromTeam = async (req, res) => {
  const { id, pokemonId } = req.params;

  try {
    const team = await Team.findByPk(id);
    if (!team) {
      return res.status(404).json({ message: "Équipe non trouvée !" });
    }

    await team.removePokemon(pokemonId);

    await team.reload({
      include: { model: Pokemon, as: "pokemons" },
    });

    res.status(200).json(team);
  } catch (error) {
    console.error("Erreur lors du retrait du Pokémon de l'équipe :", error);
    res.status(500).json({
      message: "Erreur ! Impossible de retirer le Pokémon de l'équipe !",
      error: error.message,
    });
  }
};
