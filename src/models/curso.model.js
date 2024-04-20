const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Curso = db.define("Curso", {
  curso_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_curso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion_curso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio_curso: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },

  profesor_curso: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  imagen_curso: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      "https://marketplace.imporsuit.com/sysadmin/img_sistema/noimg.png",
  },
  estado_curso: {
    type: DataTypes.ENUM("Activo", "Inactivo"),
    defaultValue: "Activo",
  },
});

module.exports = Curso;
