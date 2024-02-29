import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Cards from "react-credit-cards-2";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { LuRefreshCw } from "react-icons/lu";
import axios from "axios";

function Buy() {
  const [image, setImage] = useState("");
  const [t, setT] = useState("");
  const [p, setP] = useState("");
  const [data, setData] = useState({
    productName: "",
    productPrice: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    district: "",
    stateof: "",
  });
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const personal = useRef();

  useEffect(() => {
    const storedImage =
      localStorage.getItem("image") || localStorage.getItem("image2");
    const storedT =
      localStorage.getItem("ttl") || localStorage.getItem("title2");
    const storedP =
      localStorage.getItem("pp") || localStorage.getItem("price2");
    setData((prevData) => ({
      ...prevData,
      productName: storedT,
      productPrice: storedP,
    }));
    setImage(storedImage || "");
    setT(storedT || "");
    setP(storedP || "");
    cnfrm();
  }, []);
  let cdm = "";
  function verify() {
    let option1 = document.getElementById("payment-option").value;
    cdm = option1;
    if (option1 === "creditcard" || option1 === "debitcard") {
      document.getElementById("credit").removeAttribute("hidden");
      personal.current.setAttribute("hidden", true);
    }
    if (option1 === "cod") {
      personal.current.setAttribute("hidden", true);
      document.getElementById("confirmation").removeAttribute("hidden");
    }
  }

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (name === "expiry" && value.length > 5) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      [name]: value,
      [`${name}Valid`]: value.trim() !== "",
    }));

    if (["number", "expiry", "cvc", "name"].includes(name)) {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  function cnfrm() {
    let data = "0123456789";
    let v = "";
    for (let i = 0; i < 6; i++) {
      v = v + data[Math.floor(Math.random() * 10)];
    }
    document.getElementById("otp").innerHTML = v;
  }

  function verify1() {
    let val = document.getElementById("nu").value;
    let val2 = document.getElementById("otp").innerText;
    const combinedData = { ...data, ...state, option1: cdm };

    axios
      .post("http://127.0.0.1:3001", combinedData)
      .then((msg) => console.log(msg))
      .then(() => console.log("successfully shared"))
      .catch((err) => console.log(err));
    if (val === val2) {
      console.log("Success");
      document.getElementById("confirmation").setAttribute("hidden", true);
      document.getElementById("placed").removeAttribute("hidden");
    } else {
      console.log("Failed");
      cnfrm();
      document.getElementById("nu").value = "";
    }
  }

  function cnfrm1() {
    document.getElementById("confirmation").removeAttribute("hidden");
    document.getElementById("debit").setAttribute("hidden", true);
  }

  function creditcardbutton() {
    document.getElementById("confirmation").removeAttribute("hidden");
    document.getElementById("credit").setAttribute("hidden", true);
  }

  function handlechange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <div id="cart-items-creation" style={{ display: "flex" }}>
        <Card
          style={{
            width: "18rem",
            height: "300px",
            margin: "10px",
            boxShadow: "3px 3px 3px 3px black",
          }}
        >
          <Card.Img
            variant="top"
            src={image}
            style={{ height: "100px", width: "50px" }}
            className="imgsrc"
          />
          <Card.Body>
            <Card.Title className="cardtitle">{t}</Card.Title>
            <Card.Text className="price">{p}</Card.Text>
          </Card.Body>
          <Card.Body></Card.Body>
        </Card>
      </div>
      <div
        id="formdetails"
        style={{
          border: "1px solid black",
          height: "600px",
          width: "600px",
          position: "relative",
          left: "500px",
          top: "-300px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          boxShadow: "6px 6px 6px 6px black",
        }}
      >
        <Form style={{ margin: "10px" }} id="personal" ref={personal}>
          <Form.Group className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="ex : Satyada yasaswini Raju"
              name="name"
              value={data.name}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="ex : +91 1234567890"
              name="phone"
              value={data.phone}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={data.email}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Address"
              name="address"
              value={data.address}
              onChange={handlechange}
            />
          </Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Text style={{ margin: "10px" }}>
              District And State
            </InputGroup.Text>
            <Form.Control
              aria-label="First name"
              style={{ margin: "10px" }}
              name="district"
              value={data.district}
              onChange={handlechange}
            />
            <Form.Control
              aria-label="Last name"
              style={{ margin: "10px" }}
              name="stateof"
              value={data.stateof}
              onChange={handlechange}
            />
          </InputGroup>
          <Form.Select aria-label="Default select example" id="payment-option">
            <option disabled selected value>
              Payment
            </option>
            <option value="creditcard">CreditCard</option>
            <option value="debitcard">DebitCard</option>
            <option value="cod">Cash On delivery</option>
          </Form.Select>
          <br></br>
          <Button variant="primary" onClick={verify}>
            Proceed to Payment
          </Button>
        </Form>

        <div id="credit" hidden>
          <div>
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  name="number"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  name="name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Expiry</Form.Label>
                <Form.Control
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Form.Group>
              <Button variant="primary" onClick={creditcardbutton}>
                Proceed
              </Button>
            </Form>
          </div>
        </div>

        <div id="debit" hidden>
          <div>
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Card Number"
                  name="number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Expiry</Form.Label>
                <Form.Control
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Form.Group>
              <Button variant="primary" onClick={cnfrm1}>
                Proceed
              </Button>
            </Form>
          </div>
        </div>

        <div id="confirmation" hidden>
          <p id="numplace">
            Your Number is : <span id="otp"></span>
          </p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>confirmation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter confirmation number"
                id="nu"
              />
              <LuRefreshCw onClick={cnfrm} />
            </Form.Group>
            <Button variant="success" onClick={verify1}>
              Submit
            </Button>
          </Form>
        </div>
        <div id="placed" hidden>
          <h3>Order Placed</h3>
          <center>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ynsf-VrwjweHcLMOwZ0ox8SCF0gHs7QtMRC4wTae0Op-kU3pQNXR0jPjLm77aBxn_AU&usqp=CAU"
              alt="no image"
              style={{ position: "relative", top: "200px" }}
            ></img>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Buy;
