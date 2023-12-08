const models = require('../models');

module.exports = {

  // GET all products
  async getProducts(req, res) {
    try {
      const products = await models.products.getAll();
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server Error: 001'});
    }
  },

  // GET single product
  async getProduct(req. res) {
    let id = req.body.id;
    try {
      const product = await models.products.getOne(id);
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error: 002'});
    }
  },

  // GET product styles
  async getStyles(req, res) {
    let id = req.params.product_id;
    try {
      const styles = await models.products.getProductStyles(id)
      res.status(200).json(styles);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error: 003'});
    }
  },

  // GET related Productc
  async getRelated(req, res) {
    let id = req.params.product_id;
    try {
      const related = await models.products.getRelatedProducts(id);
      res.status(200).json(related);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error: 004'})
    }
  }
}