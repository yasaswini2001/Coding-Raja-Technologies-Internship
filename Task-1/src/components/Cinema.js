import React, { useState ,useEffect} from 'react';
import './Art.css';
import axios from 'axios';
const Cinema = () => {
    
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: 'Perfect Days: Wim Wenders’ reflection on ageing, told through the toilets of Tokyo', 
      description: 'The hero of German filmmaker Wim Wenders’ new film, Perfect Days, spends his time cleaning toilets.Hirayama (Kōji Yakusho) has opted for a simple and solitary life as a toilet cleaner in a park in Shibuya, one of the busiest districts in Tokyo. He seems content and happy with his life, which is self-determined and without any luxuries. His everyday routine is well organised, from watering the bonsai plants in his small apartment, to donning his work clothes, drinking canned coffee in front of his home and driving his big van to the park', 
      likes: 10, 
      comments: [],
      image: 'https://images.theconversation.com/files/576578/original/file-20240219-19-tyt64g.png?ixlib=rb-1.1.0&rect=51%2C74%2C1845%2C922&q=45&auto=format&w=668&h=324&fit=crop',
      alt: 'Artwork 1 Image'
    },
    { 
      id: 2, 
      title: 'Climate disaster movies resonate in ways that news never will', 
      description: 'Like many eco-conscious film buffs, I’ve seen Don’t Look Up many times, and shown it to my friends and family whenever anyone suggests a movie night. Now I’m looking forward to discussing The End We Start From, the new 2024 release starring Killing Eve star Jodie Comer. The Liverpudlian actress plays a new mother trying to find refuge with her baby as London is submerged by flood waters.', 
      likes: 15, 
      comments: [],
      image: 'https://images.theconversation.com/files/570716/original/file-20240122-25-8i3czm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=240&h=240&fit=crop',
      alt: 'Artwork 2 Image'
    },
    { 
      id: 3, 
      title: 'Making emotional films: The enticing contradictions of Norman Jewison’s movies', 
      description: 'How should we think about the late Canadian filmmaker Norman Jewison’s legacy?Cinema studies professor Bart Testa’s opening for his insightful chapter “Norman Jewison: Homecoming for a ‘Canadian Pinko’” argues that “Jewison has not been highly regarded or carefully discussed by film critics, Canadian or American.”', 
      likes: 20, 
      comments: [],
      image: 'https://images.theconversation.com/files/566748/original/file-20231219-19-k72k4e.jpg?ixlib=rb-1.1.0&rect=409%2C97%2C914%2C914&q=45&auto=format&w=240&h=240&fit=crop',
      alt: 'Artwork 3 Image'
    },
  ]);

  const [sidebarArticles, setSidebarArticles] = useState([
    { 
      id: 4, 
      title: 'Schindler’s List at 30: a look back at Steven Spielberg’s shattering masterpiece.', 
      description: 'Steven Spielberg was Hollywood’s wonder boy, best known for films about sharks, aliens and archeologists. Then he turned his attention to the Holocaust.', 
      likes: 5, 
      comments: [],
      image: 'https://images.theconversation.com/files/561205/original/file-20231123-17-vj3uu8.jpg?ixlib=rb-1.1.0&rect=371%2C0%2C1251%2C1250&q=45&auto=format&w=240&h=240&fit=crop',
      alt: 'Artwork 4 Image'
    },
    { 
      id: 5, 
      title: 'The Exorcist: Believer is a ‘retcon’ film - it imagines none of the sequels exist. This sequel shouldn’t exist, either', 
      description: 'What seems at first blush to be an innovative approach to franchise movie-making is nothing more than a futile exercise in cinematic nostalgia.', 
      likes: 8, 
      comments: [],
      image: 'https://images.theconversation.com/files/553856/original/file-20231015-19-epzial.jpg?ixlib=rb-1.1.0&rect=781%2C0%2C2161%2C2160&q=45&auto=format&w=240&h=240&fit=crop',
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
        const response = await axios.get('http://127.0.0.1:3001/posts/cinema');
        console.log(response.data);
        if (response.status === 200) {
          const newPosts = response.data.map(newPost => ({
            id: newPost.id,
            title: newPost.title,
            description: newPost.description,
            likes: 5,
            comments: [],
            image: newPost.imageUrl,
            alt: `Artwork ${newPost.id} Image`
          }));
  
          // Merge existing posts with newly fetched posts
          setPosts(prevPosts => [...prevPosts, ...newPosts]);
        } else {
          console.error('Failed to fetch cinema posts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cinema posts:', error.message);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="art-container">
      <div className="main-content">
        <h2>Cinema Posts</h2>
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

export default Cinema;
