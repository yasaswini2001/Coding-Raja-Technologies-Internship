import React from "react";
import "./App.css";
import Todaydeals from "./Todaysdeals.js";
import Featured from "./Featured.js";
import Sports from "./Sports.js";
import Books from "./Books.js";
import Kitchen from "./Kitchen.js";
import Promotion from "./Promotion.js";
import About from "./About.js";
import { Link } from "react-router-dom";
function Home() {
  function getImageDetails(event) {
    let img = event.target.src;
    console.log(img);
  }
  function getImageDetails() {
    const imgElement =
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/e/j/5/9-snk-310-white-43-bruton-white-original-imageqffhw7mk4mg-bb.jpeg?q=70";
    const titleElement =
      "Modern Trendy Sneakers Shoes Sneakers For Men  (White)";
    const priceElement = 485;

    console.log("Image Source:", imgElement);
    console.log("Title:", titleElement);
    console.log("Price:", priceElement);
    localStorage.setItem("image", imgElement);
    localStorage.setItem("ttl", titleElement);
    localStorage.setItem("pp", priceElement);
  }
  return (
    <div className="home-container">
      <div id="sliders"></div>
      <div id="sideimages">
        <Link to="/buy">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/e/j/5/9-snk-310-white-43-bruton-white-original-imageqffhw7mk4mg-bb.jpeg?q=70"
            onClick={getImageDetails}
            title="BuyNow"
          />
        </Link>
      </div>
      <Todaydeals />
      <Promotion />
      <About />
    </div>
  );
}

export default Home;
