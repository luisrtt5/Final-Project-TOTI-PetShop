const express = require('express');
const productSchema = require('../models/product.js');

const router = express.Router();

/**
  * @swagger 
  *   components:
  *     schemas:
  *        product:
  *         type:
  *         properties:
  *              nome:
  *                type: string
  *              marca: 
  *                 type: string
  *              preço: 
  *                 type: number     
  *              tipo: 
  *                 type: number      
  */
// create product
router.post("/product", async (req, res) => {
  const product = await productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// get all products
router.get("/product", async (req, res) => {
     await productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    
});


// get  a product
router.get("/product/:id", async (req, res) => {
  const { id } = await req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

});

// delete a product
router.delete("/product/:id", async (req, res) => {
  const { id } =  await req.params;
  productSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// update a product 
router.put("/product/:id", async (req, res) => {
  const { id } = await  req.params;
  const { name, price, purchasePrice} =  await req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { name, price, purchasePrice } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});





 // código para criar um produto

  /**
   * @swagger
   * /api/product:
   *  post:
   *      summary: Create a new product
   *      tags: [Product]
   *      consumes:
   *          - application/json
   *      parameters:
   *        - in: body
   *          name: Product
   *          schema:
   *              $ref: '#/components/schemas/product'
   *      responses:
   *          201:
   *              description: Product created
   */
  
  
 //código para todos os produtos
  
  
  /**
  * @swagger
  * /api/product:
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
  *                 $ref: '#/components/schemas/product'
  */
 
   
  
  // Get a product by ID 
  /**
   * @swagger
   * /api/product/{productId}:
   *  get:
   *      summary: get a product
   *      tags: [Product]
   *      parameters:
   *        - in: path
   *          name: Product Id
   *          schema:
   *              type: string
   *          required: true
   *          description: Id of the product to updateOne
   *      responses:
   *          200:
   *              description: Get product
   *              schema:
  *                type: array
  *                items:
  *                 $ref: '#/components/schemas/product'
   */
  
  
 // código para update do produto 
  
  /**
   * @swagger
   * /api/product/{productId}:
   *  put:
   *      summary: Update a product
   *      tags: [Product]
   *      parameters:
   *        - in: path
   *          name: Product Id
   *          schema:
   *              type: string
   *          required: true
   *          description: Id of the product to updateOne
   *      responses:
   *          200:
   *              description: Product that was update
   *              schema:
   *                 $ref: '#/components/schemas/product'
   */
  
   // código para apagar um produto
  
  /**
   * @swagger
   * /api/product/{productId}:
   *  delete:
   *      summary: Delete a product
   *      tags: [Product]
   *      parameters:
   *        - in: path
   *          name: Product Id
   *          schema:
   *              type: string
   *          required: true
   *          description: string id of user to delete
   *      responses:
   *          200:
   *              description: Product that was deleted
   */


module.exports = router;