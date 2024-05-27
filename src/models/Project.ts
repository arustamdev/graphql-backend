import { DataTypes } from "sequelize";
import sequelize from "../db/db";

const Project = sequelize.define("Project", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Project;
