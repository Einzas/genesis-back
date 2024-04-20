const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const SeccionCurso = db.define("SeccionCurso", {
  seccion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_seccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  curso_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado_seccion: {
    type: DataTypes.ENUM("Activo", "Inactivo"),
    defaultValue: "Activo",
  },
});

module.exports = SeccionCurso;
