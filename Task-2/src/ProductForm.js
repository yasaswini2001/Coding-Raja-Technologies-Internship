import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (formData.title && formData.price) {
      const newProduct = { ...formData };
      setProducts([...products, newProduct]);
      setFormData({
        image: '',
        title: '',
        description: '',
        price: ''
      });
    } else {
      alert('Please fill in the required fields (Title, Price)');
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="dd" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            {/* Display the image using the img element */}
            <img src={product.image} alt={`Product ${index + 1}`} />
            {/* Display other product details */}
            <div>Title: {product.title}</div>
            <div>Description: {product.description}</div>
            <div>Price: {product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductForm;
