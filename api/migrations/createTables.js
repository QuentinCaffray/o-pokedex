import { sequelize } from "./models/index.js";

async function createDatabase() {
  try {
    console.log("🗑️ Suppression des tables existantes...");
    await sequelize.drop();

    console.log("🚧 Définition des tables...");
    await sequelize.sync();

    console.log("🗃️ Structure de la base de données :");
    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log(tables);

    console.log("✅ Migration OK !");
  } catch (error) {
    console.error("❌ Erreur lors de la migration :", error);
  } finally {
    console.log("🔒 Fermeture de la connexion...");
    await sequelize.close();
  }
}

createDatabase();
