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
  *                 type: string     
  */
// criar produto
router.post("/product", async (req, res) => {
  const product = await productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// todos os productos
router.get("/product", async (req, res) => {
     await productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    
});


// um produto
router.get("/product/:id", async (req, res) => {
  const { id } = req.params; await
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

});

// deletar produto
router.delete("/product/:id", async (req, res) => {
  const { id } = req.params; await
  productSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// atualizar  produto
router.put("/product/:id", async (req, res) => {
  const { id } =  req.params;
  const { nome, marca, preço, tipo} =  await req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { nome, marca, preço, tipo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});





 // código para criar um produto
/**
 * @swagger
 * /api/product:
 *  post:
 *      summary: Criar um produto
 *      tags: [Product]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/product'
 *                  required: true
 *      responses:
 *          200:
 *              description: produto criado com sucesso
 */


//código para todos os produtos

/**
* @swagger
* /api/product:
*  get:
*    summary: Todos os produtos
*    tags: [Product] 
*    description: Use para solicitar todos os produtos
*    responses:
*      '200': 
*         content:
*           aplication/json:
*            schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/product'
*/

 

// Get producto por id  
/**
 * @swagger
 * /api/product/{id}:
 *  get:
 *      summary: Produto por id
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true 
 *      responses:
 *          200:
 *              description: produto encontrado 
 *          422:
 *              description: produto não encontrado
 */



 // código para update do produto 
/**
 * @swagger
 * /api/product/{id}:
 *  put:
 *      summary: Atualizar produto
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/product'
 *      responses:
 *          200:
 *              description: Produto atualizado
 *          422:
 *              description: Produto não encontrado
 */



 // código para apagar um produto

 /**
 * @swagger
 * /api/product/{id}:
 *  delete:
 *      summary: Deletar produto
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *              $ref: '#/components/schemas/product'
 *          required: true 
 *      responses:
 *          200:
 *              description: Produto deletado
 *          422:
 *              description: Produto não encontrado
 */

module.exports = router;