const { DataTypes, ENUM } = require("sequelize");
const { db } = require("../database/config");

const ContenidoLeccion = db.define("ContenidoLeccion", {
  contenido_leccion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_contenido: {
    type: ENUM("Video", "Texto", "Imagen"),
    allowNull: false,
  },
  contenido: {
    type: DataTypes.JSON,
    allowNull: true,
  },

  leccion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado_contenido: {
    type: DataTypes.ENUM("Activo", "Inactivo"),
    defaultValue: "Activo",
  },
});

module.exports = ContenidoLeccion;
