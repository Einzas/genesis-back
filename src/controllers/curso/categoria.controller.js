const Categoria = require("../../models/categoria.model");

const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

exports.createCategoria = catchAsync(async (req, res, next) => {
  const { nombre_categoria } = req.body;

  const categoria = await Categoria.create({ nombre_categoria });

  res.status(201).json({
    status: "success",
    categoria,
  });
});

exports.getCategorias = catchAsync(async (req, res, next) => {
  const categorias = await Categoria.findAll();

  res.status(200).json({
    status: "success",
    categorias,
  });
});

exports.getCategoria = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const categoria = await Categoria.findByPk(id);

  if (!categoria) return next(new AppError("Categoria no encontrada!", 404));

  res.status(200).json({
    status: "success",
    categoria,
  });
});

exports.updateCategoria = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre_categoria } = req.body;

  const categoria = await Categoria.findByPk(id);

  if (!categoria) return next(new AppError("Categoria no encontrada!", 404));

  await categoria.update({ nombre_categoria });

  res.status(200).json({
    status: "success",
    categoria,
  });
});

exports.deleteCategoria = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const categoria = await Categoria.findByPk(id);

  if (!categoria) return next(new AppError("Categoria no encontrada!", 404));

  await categoria.destroy();

  res.status(204).json({
    status: "success",
    categoria: null,
  });
});
