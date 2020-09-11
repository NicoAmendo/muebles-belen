var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require("path");

var productosController = require("../Controllers/productosController");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,"./public/images/products");

    },
    filename: (req, file, cb) => {
               cb(null, Date.now() + path.extname(file.originalname));

    } 

});
const upload = multer({ storage: storage })

//formulariodecarga-Crear
router.get("/crear", productosController.crear);
router.post("/crear", upload.any(), productosController.guardado);

//listado
router.get("/listado", productosController.listado);

// Edición
router.get("/editar/:id", productosController.editar);
router.post("/editar/:id",upload.any(), productosController.actualizar);

//eliminar
router.post("/borrar/:id", productosController.borrar);

module.exports = router;
