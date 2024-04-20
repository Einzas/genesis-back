const LeccionSeccion = require("../../models/leccion_seccion.model");

const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

exports.createLeccionSeccion = catchAsync(async (req, res, next) => {
  const { nombre_leccion, seccion_id } = req.body;

  const leccionSeccion = await LeccionSeccion.create({
    nombre_leccion,
    seccion_id,
  });

  res.status(201).json({
    status: "success",
    leccionSeccion,
  });
});
exports.getLeccionesSeccion = catchAsync(async (req, res, next) => {
  const leccionesSeccion = await LeccionSeccion.findAll();

  res.status(200).json({
    status: "success",
    leccionesSeccion,
  });
});

exports.getLeccionSeccion = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const leccionSeccion = await LeccionSeccion.findByPk(id);

  if (!leccionSeccion)
    return next(new AppError("Lección de sección no encontrada!", 404));

  res.status(200).json({
    status: "success",
    leccionSeccion,
  });
});

exports.updateLeccionSeccion = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre_leccion, seccion_id } = req.body;

  const leccionSeccion = await LeccionSeccion.findByPk(id);

  if (!leccionSeccion)
    return next(new AppError("Lección de sección no encontrada!", 404));

  await leccionSeccion.update({ nombre_leccion, seccion_id });

  res.status(200).json({
    status: "success",
    leccionSeccion,
  });
});

exports.deleteLeccionSeccion = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const leccionSeccion = await LeccionSeccion.findByPk(id);

  if (!leccionSeccion)
    return next(new AppError("Lección de sección no encontrada!", 404));

  await leccionSeccion.destroy();

  res.status(204).json({
    status: "success",
    data: null,
  });
});
