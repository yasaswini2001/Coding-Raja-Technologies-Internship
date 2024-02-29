import React, { useState ,useEffect} from 'react';
import './Art.css';
import axios from 'axios';
const Science = () => {
    
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: 'Life on Mars', 
      description: 'Four and a half billion years ago, a rock was formed on Mars by some volcanic process. Half a billion years later, this rock was broken into smaller pieces by a meteorite impact nearby. Some ground water also entered the rock. 16 million years ago, an asteroid hit Mars somewhere near where this rock was. The impact threw pieces of the rock into space. One 2 kilogram piece of rock orbited the Sun until 13,000 years ago, when it came close to the Earth. This piece crashed onto an Antarctic glacier. Over 13,000 years, it reached the Allan Hills region of Antarctica, buried inside the ice. In 1984, this meteorite was discovered and named ALH84001. A large number of people worked out this history of the meteorite that we just narrated.', 
      likes: 10, 
      comments: [],
      image: 'https://static.vikaspedia.in/media/images_en/education/childrens-corner/science-section/life-on-marstest.jpg',
      alt: 'Artwork 1 Image'
    },
    { 
      id: 2, 
      title: 'The weird sky glow called STEVE is really confusing scientists', 
      description: 'Researchers are trying to figure out the recipe of atmospheric conditions that creates this aurora-like light show.', 
      likes: 15, 
      comments: [],
      image: 'https://www.snexplores.org/wp-content/uploads/2024/02/1440_STEVE_feat2-800x450.jpg',
      alt: 'Artwork 2 Image'
    },
    { 
      id: 3, 
      title: 'Physics explains why poured water burbles the way it does', 
      description: 'Ah, the refreshing sound of a cool drink of water being poured. You might feel thirsty just thinking about it. Or, if you’re a scientist, you might feel curious.Mouad Boudina certainly was. He’s a mechanical engineer at Seoul National University in South Korea. He and his colleagues wanted to know how pouring conditions affect the volume of cascading water. The key, they learned, was how much a stream of water rippled as it fell.', 
      likes: 20, 
      comments: [],
      image: 'https://www.snexplores.org/wp-content/uploads/2024/01/010324_ec_water-acoustics_feat-800x450.jpg',
      alt: 'Artwork 3 Image'
    },
  ]);

  const [sidebarArticles, setSidebarArticles] = useState([
    { 
      id: 4, 
      title: 'Shouting into the wind may seem futile — but it’s really not', 
      description: 'To describe something as pointless, people may liken it to shouting into the wind. This idiom implies that making noise against the flow of air is very hard. But shouting into the wind isn’t that difficult after all, new research shows.In fact, sending sounds upwind, against the flow of air, actually makes them louder. So someone standing in front of you should have no problem hearing you. This is due to what’s known as convective amplification.', 
      likes: 5, 
      comments: [],
      image: 'https://www.snexplores.org/wp-content/uploads/2023/05/050823_ev_wind_feat-800x450.jpg',
      alt: 'Artwork 4 Image'
    },
    { 
      id: 5, 
      title: 'Explainer: How the Doppler effect shapes waves in motion', 
      description: 'Next time you hear a train whistling its approach, or an ambulance driving by with its siren blaring, listen closely. You’ll hear the pitch rise as it gets closer to you, and then fall as it passes. This is due to the Doppler effect, which describes how waves — such as sound waves — change when their source is moving relative to an observer. ', 
      likes: 8, 
      comments: [],
      image: 'https://www.snexplores.org/wp-content/uploads/2022/08/GettyImages-577362446-870x580.jpg',
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
        const response = await axios.get('http://127.0.0.1:3001/posts/science');
        console.log('Science posts response:', response.data);

        if (response.status === 200) {
          // Update posts state with fetched data
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
          console.error('Failed to fetch science posts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching science posts:', error.message);
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

export default Science;
