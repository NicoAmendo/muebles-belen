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


router.get("/crear", productosController.crear);
router.post("/crear", upload.any(), productosController.guardado);

module.exports = router;
