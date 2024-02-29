import React from "react";
import { Link } from "react-router-dom";
import "./Featured.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function About() {
  function sub() {
    console.log("dbskfs");
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
  function get1() {
    const imgElement =
      "https://m.media-amazon.com/images/I/61LNGJEMh0L._AC_UY327_FMwebp_QL65_.jpg";
    const titleElement =
      "Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU and 16‑core GPU: 33.74 cm (14.2-inch)";
    const priceElement = 199990;

    console.log("Image Source:", imgElement);
    console.log("Title:", titleElement);
    console.log("Price:", priceElement);
    localStorage.setItem("image", imgElement);
    localStorage.setItem("ttl", titleElement);
    localStorage.setItem("pp", priceElement);
  }

  function get2() {
    const imgElement =
      "https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY327_FMwebp_QL65_.jpg";
    const titleElement =
      "Think Straight: Change your thoughts, Change your life [Paperback] Foroux, Darius";
    const priceElement = 124;

    console.log("Image Source:", imgElement);
    console.log("Title:", titleElement);
    console.log("Price:", priceElement);
    localStorage.setItem("image", imgElement);
    localStorage.setItem("ttl", titleElement);
    localStorage.setItem("pp", priceElement);
  }

  return (
    <section id="about" style={{ position: "relative", top: "1300px" }}>
      <center>
        <h1>About us</h1>
      </center>
      <ul>
        <li>y</li>
        <li>A</li>
        <li>s</li>
        <li>A</li>
        <li>S</li>
        <li>W</li>
        <li>I</li>
        <li>N</li>
      </ul>
      <div id="sociallinks">
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaInstagramSquare />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaGithubSquare />
        </a>
      </div>
      <div id="aboutlink">
        <p>Links</p>
        <a href="/">Home</a>
        <br></br>
        <a href="#todaysdeals">TodayDeals</a>
        <br></br>
        <a href="#electronics">Electronics</a>
        <br></br>
        <a href="#books">Books</a>
        <br></br>
        <a href="#kitchen">Home & Kitchen</a>
        <br></br>
        <a href="#promotion">Promotion</a>
        <br></br>
        <a href="#sports">Sports</a>
        <br></br>
        <a href="#featured">Featured Products</a>
        <br></br>
      </div>
      <div id="aboutform">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              style={{ width: "500px" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter Message</Form.Label>
            <Form.Control as="textarea" rows={3} style={{ width: "500px" }} />
          </Form.Group>
          <Button variant="primary" onClick={sub}>
            Submit
          </Button>
        </Form>
      </div>
      <div
        id="toppicks"
        style={{ position: "relative", top: "-600px", left: "1100px" }}
      >
        <h4 style={{ color: "white" }}>Top Picks</h4>
        <div style={{ display: "flex" }} className="topp">
          <Link to="/buy">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/e/j/5/9-snk-310-white-43-bruton-white-original-imageqffhw7mk4mg-bb.jpeg?q=70"
              onClick={getImageDetails}
              title="BuyNow"
              style={{ position: "relative", height: "60px" }}
            />
          </Link>
          <p style={{ fontSize: "10px" }}>
            Modern Trendy Sneakers Shoes Sneakers For Men (White)
          </p>
        </div>

        <div style={{ display: "flex" }} className="topp">
          <Link to="/buy">
            <img
              src="https://m.media-amazon.com/images/I/61LNGJEMh0L._AC_UY327_FMwebp_QL65_.jpg"
              onClick={get1}
              title="BuyNow"
              style={{ position: "relative", height: "60px", width: "60px" }}
            />
          </Link>
          <p style={{ fontSize: "10px" }}>
            Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU and
            16‑core GPU: 33.74 cm (14.2-inch)
          </p>
        </div>

        <div style={{ display: "flex" }} className="topp">
          <Link to="/buy">
            <img
              src="https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY327_FMwebp_QL65_.jpg"
              onClick={get2}
              title="BuyNow"
              style={{ position: "relative", height: "60px", width: "60px" }}
            />
          </Link>
          <p style={{ fontSize: "10px" }}>
            Think Straight: Change your thoughts, Change your life [Paperback]
            Foroux, Darius
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
