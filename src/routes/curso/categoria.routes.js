const express = require("express");

const authMiddleware = require("../../middlewares/auth.middleware");
const validationMiddleware = require("../../middlewares/validations.middleware");
const categoriaController = require("../../controllers/curso/categoria.controller");

const router = express.Router();

router.use(authMiddleware.protect);

router
    .route("/")
    .post(
        validationMiddleware.createCategoriaValidation,
        categoriaController.createCategoria
    )
    .get(categoriaController.getCategorias);

router
    .route("/:id")
    .get(categoriaController.getCategoria)
    .patch(
        validationMiddleware.createCategoriaValidation,
        categoriaController.updateCategoria
    )
    .delete(categoriaController.deleteCategoria);

module.exports = router;