const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true
  },
  preço: {
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    required: true
  }
}, {versionKey: false}) ;

module.exports = mongoose.model('Product', productSchema );