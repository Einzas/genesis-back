const { body, validationResult } = require("express-validator");

const validField = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: "error", errors: errors.mapped() });
  }
  next();
};

// validaciones para los campos de la tabla roles
exports.createRoleValidation = [
  body("nombre_rol").notEmpty().withMessage("El nombre del rol es requerido!"),
  validField,
];

exports.updateRoleValidation = [
  body("nombre_rol").notEmpty().withMessage("El nombre del rol es requerido!"),
  validField,
];

// validaciones para los campos de la tabla permisos
exports.createPermissionValidation = [
  body("nombre_permiso")
    .notEmpty()
    .withMessage("El nombre del permiso es requerido!"),
  body("detalle_permiso")
    .notEmpty()
    .withMessage("La descripción del permiso es requerida!"),
  validField,
];

exports.updatePermissionValidation = [
  body("nombre_permiso")
    .notEmpty()
    .withMessage("El nombre del permiso es requerido!"),
  body("detalle_permiso")
    .notEmpty()
    .withMessage("La descripción del permiso es requerida!"),
  validField,
];

// validaciones para los campos de la tabla roles_permisos
exports.createRolePermissionValidation = [
  body("role_id").notEmpty().withMessage("El ID del rol es requerido!"),
  body("permission_id")
    .notEmpty()
    .withMessage("El ID del permiso es requerido!"),
  validField,
];

exports.updateRolePermissionValidation = [
  body("role_id").notEmpty().withMessage("El ID del rol es requerido!"),
  body("permission_id")
    .notEmpty()
    .withMessage("El ID del permiso es requerido!"),
  validField,
];

// validaciones para los campos de la tabla usuarios

exports.createUserValidation = [
  body("name").notEmpty().withMessage("El nombre es requerido!"),
  body("email")
    .notEmpty()
    .withMessage("El correo electrónico es requerido!")
    .isEmail()
    .withMessage("Debe ser un correo electrónico válido!"),
  body("password")
    .notEmpty()
    .withMessage("La contraseña es requerida!")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres!"),
  validField,
];

exports.UpdateUserValidation = [
  body("name").notEmpty().withMessage("El nombre es requerido!"),
  body("email")
    .notEmpty()
    .withMessage("El correo electrónico es requerido!")
    .isEmail()
    .withMessage("Debe ser un correo electrónico válido!"),
  validField,
];

exports.loginValidation = [
  body("email")
    .notEmpty()
    .withMessage("El email es requerido!")
    .isEmail()
    .withMessage("Debe ser un email válido!"),
  body("password")
    .notEmpty()
    .withMessage("La contraseña es requerida!")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres!"),
  validField,
];

exports.createCategoriaValidation = [
  body("nombre_categoria")
    .notEmpty()
    .withMessage("El nombre de la categoría es requerido!"),
  validField,
];

exports.updateCategoriaValidation = [
  body("nombre_categoria")
    .notEmpty()
    .withMessage("El nombre de la categoría es requerido!"),
  validField,
];

exports.createCursoValidation = [
  body("nombre_curso")
    .notEmpty()
    .withMessage("El nombre del curso es requerido!"),
  body("descripcion_curso")
    .notEmpty()
    .withMessage("La descripción del curso es requerida!"),
  body("precio_curso")
    .notEmpty()
    .withMessage("El precio del curso es requerido!"),
  body("profesor_curso")
    .notEmpty()
    .withMessage("El nombre del profesor del curso es requerido!"),
  validField,
];

exports.updateCursoValidation = [
  body("nombre_curso")
    .notEmpty()
    .withMessage("El nombre del curso es requerido!"),
  body("descripcion_curso")
    .notEmpty()
    .withMessage("La descripción del curso es requerida!"),
  body("precio_curso")
    .notEmpty()
    .withMessage("El precio del curso es requerido!"),
  body("profesor_curso")
    .notEmpty()
    .withMessage("El nombre del profesor del curso es requerido!"),
  validField,
];

exports.createSeccionCursoValidation = [
  body("nombre_seccion")
    .notEmpty()
    .withMessage("El nombre de la sección es requerido!"),
  body("curso_id").notEmpty().withMessage("El ID del curso es requerido!"),
  validField,
];

exports.updateSeccionCursoValidation = [
  body("nombre_seccion")
    .notEmpty()
    .withMessage("El nombre de la sección es requerido!"),
  body("curso_id").notEmpty().withMessage("El ID del curso es requerido!"),
  validField,
];

exports.createLeccionSeccionValidation = [
  body("nombre_leccion")
    .notEmpty()
    .withMessage("El nombre de la lección es requerido!"),
  body("seccion_id")
    .notEmpty()
    .withMessage("El ID de la sección es requerido!"),
  validField,
];

exports.updateLeccionSeccionValidation = [
  body("nombre_leccion")
    .notEmpty()
    .withMessage("El nombre de la lección es requerido!"),
  body("seccion_id")
    .notEmpty()
    .withMessage("El ID de la sección es requerido!"),
  validField,
];

exports.createContenidoLeccionValidation = [
  body("tipo_contenido")
    .notEmpty()
    .withMessage("El tipo de contenido es requerido!"),
  body("leccion_id")
    .notEmpty()
    .withMessage("El ID de la lección es requerido!"),
  validField,
];

/* exports.createRestaurantValidation = [
  body("name").notEmpty().withMessage("Name is required!"),
  body("address").notEmpty().withMessage("Address is required!"),
  body("rating")
    .notEmpty()
    .withMessage("Rating is required!")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5!"),
  validField,
];

exports.updateRestaurantValidation = [
  body("name").notEmpty().withMessage("Name is required!"),
  body("address").notEmpty().withMessage("Address is required!"),

  validField,
];

exports.createReviewValidation = [
  body("comment").notEmpty().withMessage("Comment is required!"),
  body("rating")
    .notEmpty()
    .withMessage("Rating is required!")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5!"),
  validField,
]; */

/* exports.updateReviewValidation = [
  body("comment").notEmpty().withMessage("Comment is required!"),
  body("rating")
    .notEmpty()
    .withMessage("Rating is required!")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5!"),
  validField,
];

exports.createMealValidation = [
  body("name").notEmpty().withMessage("Name is required!"),
  body("price").notEmpty().withMessage("Price is required!"),
  validField,
];

exports.updateMealValidation = [
  body("name").notEmpty().withMessage("Name is required!"),
  body("price").notEmpty().withMessage("Price is required!"),
  validField,
];

exports.createOrderValidation = [
  body("mealId").notEmpty().withMessage("MealId is required!"),
  body("quantity").notEmpty().withMessage("Quantity is required!"),
  validField,
];
*/
