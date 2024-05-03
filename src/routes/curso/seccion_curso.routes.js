const express = require("express");

const authMiddleware = require("../../middlewares/auth.middleware");
const validationMiddleware = require("../../middlewares/validations.middleware");
const seccionCursoController = require("../../controllers/curso/seccion_curso.controller");

const router = express.Router();

router.use(authMiddleware.protect);

router
    .route("/")
    .post(
        validationMiddleware.createSeccionCursoValidation,
        seccionCursoController.createSeccionCurso
    )
    .get(seccionCursoController.getSeccionesCurso);

router
    .route("/:id")
    .get(seccionCursoController.getSeccionCurso)
    .patch(
        validationMiddleware.createSeccionCursoValidation,
        seccionCursoController.updateSeccionCurso
    )
    .delete(seccionCursoController.deleteSeccionCurso);

module.exports = router;