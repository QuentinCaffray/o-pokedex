import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB_URL, {
  logging: false,
  define: {
    underscored: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

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
