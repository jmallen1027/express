//const products = [];

const Product = require('../models/product.js')

exports.getAddProducts = (req, res, next) => {
        res.render('add-product', { // Refers to the addproduct template. 
         pageTitle: 'Add Product', //Page title Variable to pass to the temaplate 
         path: '/admin/add-product', //Path Variablr to the template
         activeAddProduct: true, //For Handlebars 
         productCSS: true, //For Handlebars
         formsCSS: true //For Handlebars
    })
};

exports.postAddProducts = (req, res, next) => {
    // console.log(res);
     //products.push({ title: req.body.title}) //Sharing Data to shop.js
     const product = new Product(req.body.title); // Creates a new product Object. 
     product.save();
     res.redirect('/')
 } 

exports.getProducts = (req, res, next) =>{
    Product.fetchAll(products => { //Call Back function retuning the product objects and displaying them on ejs file. 
        res.render('shop', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
            activeShop: true,
            productCSS: true,
            formsCSS: true
        });
    });

 };