import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom-styles.scss";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { store } from "./Todaysdeals";
import { Link } from "react-router-dom";
function NavScrollExample() {
  const [noofcartitems] = useContext(store);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Performing search with query: ", searchQuery);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the state with the filtered data
    setFilteredData(filteredData);
  };
  useEffect(() => {
    console.log("the value is : " + noofcartitems);
    const h3Element = document.getElementById("s");
    if (h3Element) {
      h3Element.innerText = noofcartitems;
    }
  }, [noofcartitems]);
  return (
    <>
      <Navbar className="bg-body-tertiary" style={{ backgroundColor: "black" }}>
        <Container fluid>
          <Navbar.Brand href="/">yasaswini</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#todaysdeals">Today's Deals</Nav.Link>

              <Nav.Link href="#electronics">Electronics</Nav.Link>
              <Nav.Link href="#books">Books</Nav.Link>
              <Nav.Link href="#kitchen">Home & Kitchen</Nav.Link>
              <Nav.Link href="#promotion">Promotions</Nav.Link>
              <Nav.Link href="#sports">Sports</Nav.Link>
              <Nav.Link href="#featured">Featured Products</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item>
                <Link to="/login">Logout</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Order History
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/cart">
                <Button variant="primary">
                  <FaShoppingCart /> Cart <Badge bg="secondary" id="s"></Badge>
                  <span className="visually-hidden">unread messages</span>
                </Button>
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {filteredData.map((item, index) => (
          <div key={index}>{item.title}</div>
          // Render other properties as needed
        ))}
      </Container>
    </>
  );
}

export default NavScrollExample;
