// App.js
import React ,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registration from './components/Registration';
import Art from './components/Art';
import Write from './components/Write';
import Science from './components/Science';
import Technology from './components/Technology';
import Cinema from './components/Cinema';
import Design from './components/Design';
import Food from './components/Food';
function App() {
 // const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogout = () => {
    // Perform logout actions, such as clearing user data from state or localStorage
    setLoggedInUser('');
  };
  return (
    <Router>
      <div className="App">
        <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/art" element={<Art/>}>
          </Route>
          <Route path="/science" element={<Science/>}>
          </Route>
          <Route path="/technology" element={<Technology/>}>
           
          
          </Route>
          <Route path="/cinema" element={<Cinema/>}>
              
          </Route>
          <Route path="/design" element={<Design/>}>
            
          
          </Route>
          <Route path="/food" element={<Food/>}>
            
            
          </Route>
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />}>
          
          
          </Route>
          <Route path="/write" element={<Write/>}>
          </Route>
          <Route path='/register' element={<Registration/>}/>
          <Route path="/" element={<Login  setLoggedInUser={setLoggedInUser} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
