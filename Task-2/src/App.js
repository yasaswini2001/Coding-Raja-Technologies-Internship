import "./App.css";
import NavScrollExample from "./NavScrollExample";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todaydeals from "./Todaysdeals";
import Cart from "./Cart";
import Buy from "./Buy";
import Featured from "./Featured";
import Login from "./Login";
import Register from "./Register";
import ProductForm from "./ProductForm";
function App() {
  return (
    <div className="app-container">
      <Router>
        <NavScrollExample />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/todaysdeals" element={<Todaydeals />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/productform" element={<ProductForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
