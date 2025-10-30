import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

// POST /auth/signup - Inscription
export const signup = async (req, res) => {
  try {
    const { email, password, verifyPassword } = req.body;

    if (!email || email.trim() === "") {
      return res.status(400).json({ error: "Un email est requis" });
    }

    if (!password) {
      return res.status(400).json({ error: "Un mot de passe est requis" });
    }

    if (!verifyPassword) {
      return res
        .status(400)
        .json({ error: "La vérification de mot de passe est requise" });
    }

    if (verifyPassword !== password) {
      return res
        .status(400)
        .json({ error: "Les mots de passe ne correspondent pas" });
    }
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ error: "Cet email est déjà utilisé" });
    }

    const hashedPassword = await argon2.hash(password);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Utilisateur créé avec succès",
      user: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({
      message: "Erreur lors de l'inscription",
      error: error.message,
    });
  }
};

// POST /auth/login - Connexion
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || email.trim() === "" || !password) {
      return res.status(400).json({ error: "Email et mot de passe requis" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Connexion réussie",
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({
      message: "Erreur lors de la connexion",
      error: error.message,
    });
  }
};
