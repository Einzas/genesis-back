const RolePermission = require("../models/rolePermision.model");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createRolePermission = catchAsync(async (req, res, next) => {
  const { role_id } = req.body; // Asumimos que solo necesitas role_id del cuerpo de la solicitud.

  // Obtener todos los permisos disponibles.
  const allPermissions = await Permission.findAll(); // Asumiendo que tienes un modelo Permission que puede ser usado para obtener todos los permisos.

  // Asignar todos los permisos al rol especificado.
  const rolePermissions = await Promise.all(
    allPermissions.map((permission) =>
      RolePermission.create({
        role_id,
        permission_id: permission.id,
      })
    )
  );

  res.status(201).json({
    status: "success",
    rolePermissions, // Devolver todos los permisos del rol creados.
  });
});

exports.getRolePermissions = catchAsync(async (req, res, next) => {
  const rolePermissions = await RolePermission.findAll();

  res.status(200).json({
    status: "success",
    rolePermissions,
  });
});

exports.getRolePermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rolePermission = await RolePermission.findByPk(id);

  if (!rolePermission) return next(new AppError("Permiso no encontrado!", 404));

  res.status(200).json({
    status: "success",
    rolePermission,
  });
});

exports.updateRolePermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { role_id, permission_id } = req.body;

  const rolePermission = await RolePermission.findByPk(id);

  if (!rolePermission) return next(new AppError("Permiso no encontrado!", 404));

  await rolePermission.update({ role_id, permission_id });

  res.status(200).json({
    status: "success",
    rolePermission,
  });
});
exports.deleteRolePermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rolePermission = await RolePermission.findByPk(id);

  if (!rolePermission) return next(new AppError("Permiso no encontrado!", 404));

  await rolePermission.destroy();

  res.status(204).json({
    status: "success",
    message: "Permiso eliminado exitosamente.",
  });
});
exports.reactiveRolePermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rolePermission = await RolePermission.findByPk(id);

  if (!rolePermission) return next(new AppError("Permiso no encontrado!", 404));

  await rolePermission.update({ estado_permiso: "Activo" });

  res.status(200).json({
    status: "success",
    message: "Permiso reactivado exitosamente.",
  });
});
