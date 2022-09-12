const express = require('express');
const productSchema = require('../models/product.js');

const router = express.Router();

/**
  * @swagger 
  *   components:
  *     schemas:
  *        products:
  *          properties:
  *              name:
  *                type: string
  *              price: 
  *                 type: number
  *              purchasePrice: 
  *                 type: number  
  *    
  *                 
  */
// create product

router.post("/products", (req, res) => {
    const product = productSchema(req.body);
    product
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // get all product
router.get("/products", (req, res) => {
    productSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
 
router.get("/products/:id", (req, res) => {
    const { id } = req.params;
    productSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // delete a product
router.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    productSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // update a product 
router.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    productsSchema
      .updateOne({ _id: id }, { $set: { name, price } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });




/**
* @swagger
* /api/products:
*  get:
*    summary: Get all products
*    tags: [Product] 
*    description: Use to request all product
*    responses:
*      '200':
*         content:
*           aplication/json:
*            schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/products'
*/


/**
* @swagger
* /api/products:
*  post:
*    description: Use to request all product
*    responses:
*      '200':
*        description: A successful response
* 
*/



/**
* @swagger
* /api/products:
*  post:
*    summary: create a new product
*    tags: [Product]  
*    requestBody: 
*      required: true
*      content:
*        aplication/json: 
*           schema:
*               $ref: '#/components/schemas/products'
*      responses:
*      '200':
*        description: New product create
* 
*/



/**
* @swagger
* /api/products/{Id}:
*  get:
*    summary: Return a product
*    tags: [Product]  
*    parameters:
*    -in: path
*    name: id     
*    schema:
*        type: string
*    responses:
*      '200':
*        description: A successful response
*      content:
*         aplication/json:
*          schema:
*            type: 
*               items:
*                 $ref: '#/components/schemas/products'     
*/




/**
* @swagger
* /api/products/{Id}:
*  get:
*    summary: Return a product
*    tags: [Product]  
*    parameters:
*    -in: path
*    name: id     
*    schema:
*        type: string
*    responses:
*      '200':
*        description: A successful response
*      content:
*         aplication/json:
*          schema:
*            type: 
*               items:
*                 $ref: '#/components/schemas/products'     
*/




/**
* @swagger
* /api/products/{Id}:
*  put:
*    summary: Update a product
*    tags: [Product]
*    parameters:
*    -in: path
*    name: id     
*    schema:
*        type: string
*    responses:
*      '200':
*        description: A successful response
*      content:
*         aplication/json:
*          schema:
*            type: 
*               items:
*                 $ref: '#/components/schemas/products'     
*/




/**
* @swagger
* /api/products/{Id}:
*  delete:
*    summary: Delete  a product
*    tags: [Product]
*    parameters:
*     -in: path
*     name: id    
*     required: true 
*    schema:
*        type: string   
*    responses:
*      200:
*        description: Product delete
*      400:
*         description: Product not found
   
*/



module.exports = router;