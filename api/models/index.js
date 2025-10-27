import { Pokemon } from "./Pokemon.js";
import { Type } from "./Type.js";
import { Team } from "./Team.js";
import { sequelize } from "./sequelize.js";

Pokemon.belongsToMany(Type, {
  through: "pokemon_type",
  foreignKey: "pokemon_id",
  otherKey: "type_id",
  as: "types",
});

Type.belongsToMany(Pokemon, {
  through: "pokemon_type",
  foreignKey: "type_id",
  otherKey: "pokemon_id",
  as: "pokemons",
});

Team.belongsToMany(Pokemon, {
  through: "team_pokemon",
  foreignKey: "team_id",
  otherKey: "pokemon_id",
  as: "pokemons",
});

Pokemon.belongsToMany(Team, {
  through: "team_pokemon",
  foreignKey: "pokemon_id",
  otherKey: "team_id",
  as: "teams",
});

export { Pokemon, Type, Team, sequelize };
