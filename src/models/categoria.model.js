const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Categoria = db.define("Categoria", {
  categoria_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado_categoria: {
    type: DataTypes.ENUM("Activo", "Inactivo"),
    defaultValue: "Activo",
  },
});

module.exports = Categoria;
