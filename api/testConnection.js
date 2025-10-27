import { sequelize } from "./models/sequelize.js";

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion à la base de données réussie !");
  } catch (error) {
    console.error("❌ Erreur de connexion :", error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
