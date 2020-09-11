const db = require("../database/models");
let path= require("path");
const fs = require('fs');



let productosController = {
    crear: function(req,res){
        db.Categoria.findAll()
        .then(function(categoria){
            return res.render("formularioDeCarga", {categoria:categoria});

        }) 
    },
    guardado: function(req,res){
        db.Product.create({
            nombre: req.body.nombre,
            materiales: req.body.materiales,
            precio: req.body.precio,        
            color: req.body.color,
            medidas: req.body.medidas,
            stock: req.body.stock,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria,
            imagen: req.files[0].filename

        }),
        res.redirect("/productos/crear");
    } 
      

}
module.exports = productosController; 