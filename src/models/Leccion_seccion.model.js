const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const LeccionSeccion = db.define("LeccionSeccion", {
  leccion_seccion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_leccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seccion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado_leccion: {
    type: DataTypes.ENUM("Activo", "Inactivo"),
    defaultValue: "Activo",
  },
});

module.exports = LeccionSeccion;
