import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    const accessToken = authHeader.substring("Bearer ".length);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token manquant" });
    }

    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalide ou expiré" });
  }
};
