const express = require("express");

const authMiddleware = require("../../middlewares/auth.middleware");
const validationMiddleware = require("../../middlewares/validations.middleware");
const cursoController = require("../../controllers/curso/curso.controller");

const router = express.Router();

router.use(authMiddleware.protect);

router
    .route("/")
    .post(
        validationMiddleware.createCursoValidation,
        cursoController.createCurso
    )
    .get(cursoController.getCursos);

router
    .route("/:id")
    .get(cursoController.getCurso)
    .patch(
        validationMiddleware.createCursoValidation,
        cursoController.updateCurso
    )
    .delete(cursoController.deleteCurso);

module.exports = router;