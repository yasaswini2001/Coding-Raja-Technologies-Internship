import React, { useState ,useEffect} from 'react';
import './Art.css';
import axios from 'axios';
const Technology = () => {
    
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: 'Realism of OpenAI’s Sora video generator raises security concerns', 
      description: 'The latest AI model capable of converting text into video is attracting praise from some AI researchers, while also raising concerns about the risks of video deepfakes during global elections in 2024', 
      likes: 10, 
      comments: [],
      image: 'https://images.newscientist.com/wp-content/uploads/2024/02/16201946/SEI_191815757.jpg?width=800',
      alt: 'Artwork 1 Image'
    },
    { 
      id: 2, 
      title: 'Lasers smaller than a human hair emit doughnut-shaped light', 
      description: ' Incredibly thin, hollow wires made from gallium and nitrogen can produce laser beams that are hollow with a ring-shaped cross-section, and that could be used to create optical fibres out of thin air', 
      likes: 15, 
      comments: [],
      image: 'https://images.newscientist.com/wp-content/uploads/2024/02/15164040/SEI_191604492.jpg?width=800',
      alt: 'Artwork 2 Image'
    },
    { 
      id: 3, 
      title: 'How your age, gender and nationality alter how you interpret emojis', 
      description: 'An emoji that represents happiness to one person may signify a different emotion to another, with this varying according to our age, gender and nationalityBy Chen Ly', 
      likes: 20, 
      comments: [],
      image: 'https://images.newscientist.com/wp-content/uploads/2024/02/14153321/SEI_191493253.jpg?width=800',
      alt: 'Artwork 3 Image'
    },
  ]);

  const [sidebarArticles, setSidebarArticles] = useState([
    { 
      id: 4, 
      title: 'People who are blind can navigate indoors with a phone in their pocket', 
      description: 'Two wayfinding apps use motion sensors and AI to help people who are blind navigate a building, without needing to hold their phone out in front of them and risk theft',
      likes: 5, 
      comments: [],
      image: 'https://images.newscientist.com/wp-content/uploads/2024/02/09110139/SEI_190305505.jpg?width=800',
      alt: 'Artwork 4 Image'
    },
    { 
      id: 5, 
      title: 'Nanobot uses a DNA clutch to engage its engine', 
      description: 'A tiny robot with a clutch that mimics similar mechanisms found in microorganisms could be used to trigger the internal workings of a cell', 
      likes: 8, 
      comments: [],
      image: 'https://images.newscientist.com/wp-content/uploads/2024/02/13124357/SEI_191150210.jpg?width=800',
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
        const response = await axios.get('http://127.0.0.1:3001/posts/technology');
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
        <h2>Technology Posts</h2>
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

export default Technology;
