import express from "express";
import { sequelize } from "./api/models/sequelize.js";
import pokemonRoutes from "./api/routers/pokemonRoutes.js";
import teamRoutes from "./api/routers/teamRoutes.js";
import typeRoutes from "./api/routers/typeRoutes.js";
import authRoutes from "./api/routers/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route de test
app.get("/", (req, res) => {
  res.json({ message: "Hello World! Bienvenue sur l'API Pokédex 🔥" });
});

app.use("/pokemons", pokemonRoutes);
app.use("/teams", teamRoutes);
app.use("/types", typeRoutes);
app.use("/auth", authRoutes);

// Démarrage du serveur
async function startServer() {
  try {
    // Test de connexion à la DB
    await sequelize.authenticate();
    console.log("✅ Connexion à la base de données réussie");

    // Démarrage du serveur
    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erreur lors du démarrage du serveur :", error);
    process.exit(1);
  }
}

startServer();
