import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";

export class Team extends Model {}

Team.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "team",
    timestamps: true,
  }
);
