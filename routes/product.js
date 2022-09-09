const express = require('express');
const productSchema = require('../models/product.js');

const router = express.Router();

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
  /**
  * @swagger
 * /products:
 *  get:
 *    description: Use to request all products
 *    responses:
 *      '200':
 *        description: A successful response
 *
 */

  // get a product
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

  module.exports = router;