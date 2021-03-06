const mongoose = require('../services/db_connector');

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Taxonomy name is required.'],
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    required: [true, 'Taxonomy slug is required.'],
    lowercase: true,
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: [true, 'Author is required.']
  },
  last_edited_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  feature_image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media',
    required: [true, 'Feature image is required.']
  },
  thumbnails: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Media'
    }
  ],
  publish_date: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: String,
    required: [true, 'Status is required.'],
    enum: ['new', 'draft', 'trash']
  },
  main_product_content: {
    type: String
  },
  product_detail: {
    type: String
  },
  price: {
    type: Number
  },
  currency: {
    type: String,
    enum: ['vnd', 'usd']
  },
  sale: {
    type: Number
  },
  meta_data: Object
}, {
  timestamps: true
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
