const express = require("express");

const authMiddleware = require("../../middlewares/auth.middleware");
const validationMiddleware = require("../../middlewares/validations.middleware");
const contenidoLeccionController = require("../../controllers/curso/contenido_leccion.controller");

const router = express.Router();

router.use(authMiddleware.protect);

router
    .route("/")
    .post(
        validationMiddleware.createContenidoLeccionValidation,
        contenidoLeccionController.createContenidoLeccion
    )
    .get(contenidoLeccionController.getContenidosLeccion);

router
    .route("/:id")
    .get(contenidoLeccionController.getContenidoLeccion)
    .patch(
        validationMiddleware.createContenidoLeccionValidation,
        contenidoLeccionController.updateContenidoLeccion
    )
    .delete(contenidoLeccionController.deleteContenidoLeccion);

module.exports = router;