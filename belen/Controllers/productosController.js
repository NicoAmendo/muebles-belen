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
    },
    listado: function(req, res){
        db.Product.findAll({
            include: ["categoria"]
         })
            .then(function(productos){
               res.render("listadoProductos", {productos:productos});

            })

    },

    borrar: function(req,res){
        db.Product.destroy({
            where:{
                id: req.params.id
            }
        });
        res.redirect("/productos/listado");
    },
    
    editar: function(req, res){
        let pedidoProducto = db.Product.findByPk(req.params.id);
 
        let pedidoCategorias = db.Categoria.findAll();
        
         Promise.all([pedidoProducto, pedidoCategorias])
               .then(function([producto, categoria]) {
                     res.render("editarProducto", {producto:producto, categoria:categoria});
 
             })
     
     },
 
     actualizar: function(req, res){
         db.Product.update({
            nombre: req.body.nombre,
            materiales: req.body.materiales,
            precio: req.body.precio,        
            color: req.body.color,
            medidas: req.body.medidas,
            stock: req.body.stock,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria,
            imagen: req.files[0].filename

         },{
             where: {
                 id: req.params.id
             }
         });
         res.redirect("/productos/");
 
     },


}
module.exports = productosController; 