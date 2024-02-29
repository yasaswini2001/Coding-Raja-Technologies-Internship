import React, { useState } from 'react';
import axios from 'axios';
import './Write.css';

const Write = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3001/posts', formData);
      if (response.status === 200) {
        setFormData({
          title: '',
          description: '',
          imageUrl: '',
          category: '',
        });
        setError('');
        // Optionally, you can redirect the user to another page after successful submission
      } else {
        setError('Failed to submit post. Please try again.');
      }
    } catch (error) {
      setError('Failed to submit post. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="write-container">
      <h2>Write a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="url" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="art">Art</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
          <option value="cinema">Cinema</option>
          <option value="design">Design</option>
          <option value="food">Food</option>
        </select>
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Write;
