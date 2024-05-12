const Curso = require("../../models/curso.model");
const User = require("../../models/user.model");

const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

exports.createCurso = catchAsync(async (req, res, next) => {
  const { nombre_curso, descripcion_curso, precio_curso, profesor_curso, categoria_id } = req.body;

  const curso = await Curso.create({
    nombre_curso,
    descripcion_curso,
    precio_curso,
    categoria_id,
    profesor_curso
  });

  res.status(201).json({
    status: "success",
    curso,
  });
});

exports.getCursos = catchAsync(async (req, res, next) => {
  const cursos = await Curso.findAll();

  res.status(200).json({
    status: "success",
    cursos,
  });
});

exports.getCurso = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const curso = await Curso.findByPk(id);

  if (!curso) return next(new AppError("Curso no encontrado!", 404));

  res.status(200).json({
    status: "success",
    curso,
  });
});

exports.updateCurso = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre_curso, descripcion_curso,profesor_curso, precio_curso, categoria_id } = req.body;

  const curso = await Curso.findByPk(id);

  if (!curso) return next(new AppError("Curso no encontrado!", 404));

  await curso.update({ nombre_curso, descripcion_curso,profesor_curso, precio_curso, categoria_id });

  res.status(200).json({
    status: "success",
    curso,
  });
});

exports.deleteCurso = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const curso = await Curso.findByPk(id);

  if (!curso) return next(new AppError("Curso no encontrado!", 404));

  await curso.destroy();

  res.status(204).json({
    status: "success",
    curso: null,
  });
});

exports.getCursosByCategoria = catchAsync(async (req, res, next) => {
  const { categoria_id } = req.params;

  const cursos = await Curso.findAll({ where: { categoria_id } });

  res.status(200).json({
    status: "success",
    cursos,
  });
});

exports.getCursosByProfesor = catchAsync(async (req, res, next) => {
  const { profesor_id } = req.params;

  const cursos = await Curso.findAll({ where: { profesor_id } });

  res.status(200).json({
    status: "success",
    cursos,
  });
});

exports.getProfesores = catchAsync(async (req, res, next) => {
  const profesores = await User.findAll({ where: { roleId: 2 } });

  res.status(200).json({
    status: "success",
    profesores,
  });

});