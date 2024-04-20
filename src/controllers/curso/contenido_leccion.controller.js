const ContenidoLeccion = require("../../models/contenido_leccion.model");

const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

exports.createContenidoLeccion = catchAsync(async (req, res, next) => {
  const { tipo_contenido, contenido, leccion_id } = req.body;

  const contenidoLeccion = await ContenidoLeccion.create({
    tipo_contenido,
    contenido,
    leccion_id,
  });

  res.status(201).json({
    status: "success",
    contenidoLeccion,
  });
});

exports.getContenidosLeccion = catchAsync(async (req, res, next) => {
  const contenidosLeccion = await ContenidoLeccion.findAll();

  res.status(200).json({
    status: "success",
    contenidosLeccion,
  });
});

exports.getContenidoLeccion = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const contenidoLeccion = await ContenidoLeccion.findByPk(id);

  if (!contenidoLeccion)
    return next(new AppError("Contenido de lección no encontrado!", 404));

  res.status(200).json({
    status: "success",
    contenidoLeccion,
  });
});

exports.updateContenidoLeccion = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { tipo_contenido, contenido, leccion_id } = req.body;

  const contenidoLeccion = await ContenidoLeccion.findByPk(id);

  if (!contenidoLeccion)
    return next(new AppError("Contenido de lección no encontrado!", 404));

  await contenidoLeccion.update({ tipo_contenido, contenido, leccion_id });

  res.status(200).json({
    status: "success",
    contenidoLeccion,
  });
});

exports.deleteContenidoLeccion = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const contenidoLeccion = await ContenidoLeccion.findByPk(id);

  if (!contenidoLeccion)
    return next(new AppError("Contenido de lección no encontrado!", 404));

  await contenidoLeccion.destroy();

  res.status(204).json({
    status: "success",
    contenidoLeccion: null,
  });
});

exports.getContenidosByLeccion = catchAsync(async (req, res, next) => {
  const { leccion_id } = req.params;

  const contenidosLeccion = await ContenidoLeccion.findAll({
    where: { leccion_id },
  });

  res.status(200).json({
    status: "success",
    contenidosLeccion,
  });
});

exports.getContenidosByTipo = catchAsync(async (req, res, next) => {
  const { tipo_contenido } = req.params;

  const contenidosLeccion = await ContenidoLeccion.findAll({
    where: { tipo_contenido },
  });

  res.status(200).json({
    status: "success",
    contenidosLeccion,
  });
});
