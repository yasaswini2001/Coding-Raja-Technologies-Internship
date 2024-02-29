import React, { useState ,useEffect} from 'react';
import './Art.css';
import axios from 'axios';
const Food = () => {
    
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: 'Starchy Vegetables', 
      description: 'Starchy vegetables are high-quality carbs that contain valuable nutrients, but theyre more calorie-dense than nonstarchy, water-rich varieties, so be sure to eat them in moderation.', 
      likes: 10, 
      comments: [],
      image: 'https://joybauer.com/wp-content/uploads/2016/02/thumb_2071_content_big_wide-150x150.jpg',
      alt: 'Artwork 1 Image'
    },
    { 
      id: 2, 
      title: 'Refined Grains', 
      description: 'Refined grains are missing fiber and key nutrients that their whole-grain counterparts retain. Dont miss out on those good-for-you parts — go for the whole grains instead!', 
      likes: 15, 
      comments: [],
      image: 'https://joybauer.com/wp-content/uploads/2016/02/thumb_2072_content_big_wide-150x150.jpg',
      alt: 'Artwork 2 Image'
    },
    { 
      id: 3, 
      title: 'Coffee and Tea', 
      description: 'Tea and coffee may wake you up and keep you focused, but dont overdo it on the caffeine — it may trigger migraines or IBS in people who are sensitive.', 
      likes: 20, 
      comments: [],
      image: 'https://joybauer.com/wp-content/uploads/2016/02/thumb_2041_content_big_wide-150x150.jpg',
      alt: 'Artwork 3 Image'
    },
  ]);

  const [sidebarArticles, setSidebarArticles] = useState([
    { 
      id: 4, 
      title: 'Chocolate', 
      description: 'Revel in the potential health benefits of chocolate, but dont overindulge! Chocolate is still rich in calories, sugar, and fat that can bust your diet if you overdo it.', 
      likes: 5, 
      comments: [],
      image: 'https://joybauer.com/wp-content/uploads/2016/02/thumb_2044_content_big_wide-150x150.jpg',
      alt: 'Artwork 4 Image'
    },
    { 
      id: 5, 
      title: 'Fish and Shellfish', 
      description: 'Fruits of the sea, like fish and shellfish, are some of the best choices of lean protein available — as long as you dont fry them or drown them in butter!', 
      likes: 8, 
      comments: [],
      image: 'https://joybauer.com/wp-content/uploads/2016/02/thumb_2022_content_big_wide-150x150.jpg',
      alt: 'Artwork 5 Image'
    },
  ]);
  
  
  const handleLike = (postId, isSidebar) => {
    if (isSidebar) {
      // Handle like for sidebar article
      const updatedSidebarArticles = sidebarArticles.map(article => {
        if (article.id === postId) {
          return { ...article, likes: article.likes + 1 };
        }
        return article;
      });
      setSidebarArticles(updatedSidebarArticles);
    } else {
      // Handle like for main content article
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      }));
    }
  };

  const handleComment = (postId, comment, isSidebar) => {
    if (isSidebar) {
      // Handle comment for sidebar article
      const updatedSidebarArticles = sidebarArticles.map(article => {
        if (article.id === postId) {
          return { ...article, comments: [...article.comments, comment] };
        }
        return article;
      });
      setSidebarArticles(updatedSidebarArticles);
    } else {
      // Handle comment for main content article
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, comment] };
        }
        return post;
      }));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3001/posts/food');
        console.log(response.data);
        if (response.status === 200) {
          // Append new data to existing posts
          setPosts(prevPosts => [...prevPosts, ...response.data.map(newPost => ({
            id: newPost.id,
            title: newPost.title,
            description: newPost.description,
            likes: 5, // Default likes
            comments: [],
            image: newPost.imageUrl, // Use imageUrl from database
            alt: `Artwork ${newPost.id} Image`
          }))]);
        } else {
          console.error('Failed to fetch art posts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching art posts:', error.message);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div className="art-container">
      <div className="main-content">
        <h2>Art Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <img 
              src={post.image} 
              alt={post.alt} 
            />
            <p>{post.description}</p>
            <div className="interactions">
              <button onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
              <input type="text" placeholder="Add a comment" onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleComment(post.id, e.target.value);
                  e.target.value = '';
                }
              }} />
              <div className="comments">
                {post.comments && post.comments.map((comment, index) => (
                  <div key={index} className="comment">{comment}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar">
        <h2>Related Articles</h2>
        {sidebarArticles.map(article => (
          <div key={article.id} className="sidebar-article">
            <h3>{article.title}</h3>
            <img src={article.image} alt={article.alt} />
            <p>{article.description}</p>
            <div className="interactions">
              <button onClick={() => handleLike(article.id, true)}>Like ({article.likes})</button>
              <input type="text" placeholder="Add a comment" onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleComment(article.id, e.target.value, true);
                  e.target.value = '';
                }
              }} />
              <div className="comments">
                {article.comments && article.comments.map((comment, index) => (
                  <div key={index} className="comment">{comment}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
