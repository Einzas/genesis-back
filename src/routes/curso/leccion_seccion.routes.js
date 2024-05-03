const express = require("express");

const authMiddleware = require("../../middlewares/auth.middleware");
const validationMiddleware = require("../../middlewares/validations.middleware");
const leccion_seccion = require("../../controllers/curso/leccion_seccion.controller");

const router = express.Router();

router.use(authMiddleware.protect);

router
    .route("/")
    .post(
        validationMiddleware.createLeccionSeccionValidation,
        leccion_seccion.createLeccionSeccion
    )
    .get(leccion_seccion.getLeccionesSeccion);

router
    .route("/:id")
    .get(leccion_seccion.getLeccionSeccion)
    .patch(
        validationMiddleware.createLeccionSeccionValidation,
        leccion_seccion.updateLeccionSeccion
    )
    .delete(leccion_seccion.deleteLeccionSeccion);

module.exports = router;