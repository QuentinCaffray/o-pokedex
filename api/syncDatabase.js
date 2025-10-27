import { sequelize, Pokemon, Type, Team } from "./models/index.js";

async function syncDatabase() {
  try {
    // Synchronise tous les models avec la DB
    await sequelize.sync({ force: true }); // ⚠️ force: true = DROP et recrée tout

    console.log("✅ Toutes les tables ont été créées avec succès !");
    console.log("📋 Tables créées :");
    console.log("   - pokemon");
    console.log("   - type");
    console.log("   - team");
    console.log("   - pokemon_type (table de liaison)");
    console.log("   - team_pokemon (table de liaison)");
  } catch (error) {
    console.error("❌ Erreur lors de la synchronisation :", error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();
