import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
function Cart() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    if (Array.isArray(cartItems)) {
      setData(cartItems);
    }
  }, []);
  function remove(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    localStorage.setItem("cartItems", JSON.stringify(newData));
  }
  function buynow(item) {
    const iii = item.imgSrc;
    const ttt = item.title;
    const ppp = item.price;
    console.log("Image Source:", iii);
    console.log("Title:", ttt);
    console.log("Price:", ppp);
    localStorage.setItem("image", iii);
    localStorage.setItem("ttl", ttt);
    localStorage.setItem("pp", ppp);

    let existingCartItems = JSON.parse(localStorage.getItem("cartItems"));
    existingCartItems = Array.isArray(existingCartItems)
      ? existingCartItems
      : [];

    const newCartItem = {
      imgSrc: iii,
      title: ttt,
      price: ppp,
    };

    const updatedCartItems = [...existingCartItems, newCartItem];

    // Update local storage with the updated cart items
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    const formData = new FormData();
formData.append('title', ttt);
formData.append('price', ppp);
formData.append('image', iii);
// Make a POST request to your backend server
axios.post('/products', formData)
  .then(response => {
    console.log('Data stored successfully:', response.data);
    // Optionally, you can handle the response here
  })
  .catch(error => {
    console.error('Error storing data:', error);
    // Optionally, you can handle errors here
  })
}
  return (
    <div
      id="cartcomponent"
      style={{ position: "relative", marginTop: "30px" }}
      className="card1"
    >
      <Navbar className="bg-body-tertiary justify-content-between">
        <Form inline style={{ position: "relative", left: "1200px" }}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      <div
        id="cart-items-creation"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {data
          .filter(
            (item) =>
              item.title &&
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              style={{
                width: "18rem",
                height: "300px",
                margin: "10px",
                boxShadow: "3px 3px 3px 3px black",
              }}
            >
              <Card.Img
                variant="top"
                src={item.imgSrc}
                style={{ height: "100px", width: "50px" }}
                className="imgsrc"
              />
              <Card.Body>
                <Card.Title className="cardtitle">{item.title}</Card.Title>
                <Card.Text className="price">{item.price}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Link to="/buy">
                  <Button variant="primary" onClick={() => buynow(item)}>
                    BuyNow
                  </Button>
                </Link>
                <Button variant="danger" onClick={() => remove(index)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default Cart;
