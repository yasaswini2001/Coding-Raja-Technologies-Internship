import React, { useState ,useEffect} from 'react';
import './Art.css';
import axios from 'axios';
const Art = () => {
    
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: 'Hans Holbein the Younger acted as a matchmaker to Henry VIII, tasked with painting the portraits of potential wives across Europe in a bid to safeguard the future of the throne. As two new exhibitions open, Deborah Nicholls-Lee looks at how he was the pre-eminent image-maker of the 16th Century.', 
      description: 'The German-Swiss artist was the image-maker of his time, garnering acclaim for his lifelike portraits of Basels elite, including the Dutch philosopher and theologian Desiderius Erasmus – who he painted exactly 500 years ago − before travelling to England to work in Tudor societys uppermost echelons, influencing the course of history by painting the profile pictures of eligible women the King might like to marry, such as Christina of Denmark, as part of a long-distance introduction service.', 
      likes: 10, 
      comments: [],
      image: 'https://ychef.files.bbci.co.uk/1600x900/p0gxyflb.webp',
      alt: 'Artwork 1 Image'
    },
    { 
      id: 2, 
      title: 'Holbein had unrivalled access to the Royal court, and was allowed to sketch Anne Boleyn in her private chambers', 
      description: 'The exceptional access required for these intimate sittings saw Holbein admitted to Anne Boleyns private rooms in the early 1530s, where he sketched her in a satin bedgown, thought to be a gift from the king. Like so many of Holbeins sitters, she would be executed during Henrys tempestuous sovereignty, but Holbein had no shortage of patrons and, with Anne gone, his career reached new heights when Henry put him on the royal pay roll and instructed him to paint a mural for his Privy Chamber in Whitehall Palace', 
      likes: 15, 
      comments: [],
      image: 'https://ychef.files.bbci.co.uk/1600x900/p0gxychc.webp',
      alt: 'Artwork 2 Image'
    },
    { 
      id: 3, 
      title: 'Although hard to read in his messaging, Holbein could choose how to reflect a sitters personality in his portraits, as with Sir Richard Southwell', 
      description: 'Elsewhere, there are hints of his antipathy. He makes no attempt to disguise the deep tuberculosis scar on the neck of Sir Richard Southwell, for example, and places him in a rather haughty and unsympathetic pose. Southwell was "a very unpleasant man known for betraying a number of his friends… and Holbein does capture something of that ambition and arrogance," says Heard. Yet, here − as with the imagery he frequently created for factions − he was inscrutable. "One of the reasons why I think Holbein survived is that he was a complete master of ambiguity in terms of messaging," says Moyle.', 
      likes: 20, 
      comments: [],
      image: 'https://ychef.files.bbci.co.uk/1600x900/p0gxyc8l.webp',
      alt: 'Artwork 3 Image'
    },
  ]);

  const [sidebarArticles, setSidebarArticles] = useState([
    { 
      id: 4, 
      title: 'Restorers are uncovering "forgotten faces" that were later retouched, with painters adding plump lips, sculpted noses and tapered chins centuries afterwards, writes Kelly Grovier.', 
      description: 'It is tempting, of course, to believe that technology is to blame, that we fix our faces because, for the first time in history, we can. But there is a history to falsifying beauty – a long one. In recent days, a glimpse of that tradition became visible when it was revealed that conservators for English Heritage, while cleaning a 17th-Century portrait of the great-granddaughter of one of Queen Elizabeth Is closest friends, William Cecil, Lord Burghley, discovered that Diana Cecils likeness had had a beauty filter of sorts applied to it in the years after it was completed.', 
      likes: 5, 
      comments: [],
      image: 'https://ychef.files.bbci.co.uk/1600x900/p0gwpzgd.webp',
      alt: 'Artwork 4 Image'
    },
    { 
      id: 5, 
      title: 'The Met Aims to Get Harlem Right, the Second Time Around', 
      description: 'The museum catches up to the vital lessons of the Harlem Renaissance, with its American, European and African exchanges and its cultural solidarity.', 
      likes: 8, 
      comments: [],
      image: 'https://static01.nyt.com/images/2024/02/19/multimedia/19met-renaissance-review-kmzc/19met-renaissance-review-kmzc-superJumbo.jpg?quality=75&auto=webp',
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
        const response = await axios.get('http://127.0.0.1:3001/posts/art');
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

export default Art;
