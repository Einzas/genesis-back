const SeccionCurso = require("../../models/seccion_curso.model");

const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

exports.createSeccionCurso = catchAsync(async (req, res, next) => {
  const { nombre_seccion, curso_id } = req.body;

  const seccionCurso = await SeccionCurso.create({ nombre_seccion, curso_id });

  res.status(201).json({
    status: "success",
    seccionCurso,
  });
});

exports.getSeccionesCurso = catchAsync(async (req, res, next) => {
  const seccionesCurso = await SeccionCurso.findAll();

  res.status(200).json({
    status: "success",
    seccionesCurso,
  });
});

exports.getSeccionCurso = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const seccionCurso = await SeccionCurso.findByPk(id);

  if (!seccionCurso)
    return next(new AppError("Sección de curso no encontrada!", 404));

  res.status(200).json({
    status: "success",
    seccionCurso,
  });
});

exports.updateSeccionCurso = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre_seccion, curso_id } = req.body;

  const seccionCurso = await SeccionCurso.findByPk(id);

  if (!seccionCurso)
    return next(new AppError("Sección de curso no encontrada!", 404));

  await seccionCurso.update({ nombre_seccion, curso_id });

  res.status(200).json({
    status: "success",
    seccionCurso,
  });
});

exports.deleteSeccionCurso = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const seccionCurso = await SeccionCurso.findByPk(id);

  if (!seccionCurso)
    return next(new AppError("Sección de curso no encontrada!", 404));

  await seccionCurso.destroy();

  res.status(204).json({
    status: "success",
    seccionCurso: null,
  });
});
