const User = require("./user.model");
const Rol = require("./role.model");
const Permission = require("./permission.model");
const RolePermission = require("./rolePermision.model");
const Categoria = require("./categoria.model");
const Curso = require("./curso.model");
const SeccionCurso = require("./seccion_curso.model");
const LeccionSeccion = require("./leccion_seccion.model");
const ContenidoLeccion = require("./contenido_leccion.model");



const initModels = () => {
  User.belongsTo(Rol, { foreignKey: "role_id" });
  Rol.hasMany(User, { foreignKey: "role_id" });

  Rol.belongsToMany(Permission, {
    through: RolePermission,
    foreignKey: "role_id",
  });
  Permission.belongsToMany(Rol, {
    through: RolePermission,
    foreignKey: "permission_id",
  });
  
  Categoria.hasMany(Curso, { foreignKey: "categoria_id" });
  Curso.belongsTo(Categoria, { foreignKey: "categoria_id" });

  Curso.hasMany(SeccionCurso, { foreignKey: "curso_id" });
  SeccionCurso.belongsTo(Curso, { foreignKey: "curso_id" });

  SeccionCurso.hasMany(LeccionSeccion, { foreignKey: "seccion_id" });
  LeccionSeccion.belongsTo(SeccionCurso, { foreignKey: "seccion_id" });

  LeccionSeccion.hasMany(ContenidoLeccion, { foreignKey: "leccion_id" });
  ContenidoLeccion.belongsTo(LeccionSeccion, { foreignKey: "leccion_id" });
};

module.exports = initModels;
