import React, { createContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { PiShoppingBag } from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";
import "./App.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavScrollExample from "./NavScrollExample";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart";
import Sports from "./Sports";
import Featured from "./Featured";
import { Link } from "react-router-dom";
import Books from "./Books";
import Kitchen from "./Kitchen";
import axios from "axios";
export const store = createContext([0, () => {}]);
function Todaydeals() {
  const [sec, setSec] = useState(60);
  const [min, setMin] = useState(59);
  const [hrs, setHrs] = useState(23);
  const images = document.querySelectorAll(".product1");
  images.forEach((image, index) => {
    image.addEventListener("click", clic);
  });
  function clic() {
    console.log("clicked");
  }
  function getItemDetails(event) {
    let i = event.target.src;
    console.log(i);
  }
  useEffect(() => {
    const timerid = setInterval(() => {
      updateTimer();
    }, 1000);
    return () => {
      clearInterval(timerid);
    };
  }, [sec, min, hrs]);
  function updateTimer() {
    setSec((prevSec) => (prevSec === 0 ? 59 : prevSec - 1));

    if (sec === 0) {
      setMin((prevMin) => (prevMin === 0 ? 59 : prevMin - 1));

      if (min === 0 && sec === 0) {
        setHrs((prevHrs) => (prevHrs === 0 ? 23 : prevHrs - 1));
      }
    }
  }
  const [noofcartitems, setnoofcartitems] = useState(0);

  function addtocart(event) {
    toast.success("Added To cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setnoofcartitems((prev) => prev + 1);

    const cardElement = event.target.closest(".card1");

    if (cardElement) {
      const imgElement = cardElement.querySelector(".imgsrc").src;
      const titleElement = cardElement.querySelector(".cardtitle").innerText;
      const priceElement = cardElement.querySelector(".price").innerText;

      console.log("Image Source:", imgElement);
      console.log("Title:", titleElement);
      console.log("Price:", priceElement);
      let existingCartItems = JSON.parse(localStorage.getItem("cartItems"));
      existingCartItems = Array.isArray(existingCartItems)
        ? existingCartItems
        : [];
      const newCartItem = {
        imgSrc: imgElement,
        title: titleElement,
        price: priceElement,
      };

      const updatedCartItems = [...existingCartItems, newCartItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  }
  function buynow(event) {
    const cardElement = event.target.closest(".card1");

    if (cardElement) {
      const imgElement = cardElement.querySelector(".imgsrc").src;
      const titleElement = cardElement.querySelector(".cardtitle").innerText;
      const priceElement = cardElement.querySelector(".price").innerText;

      console.log("Image Source:", imgElement);
      console.log("Title:", titleElement);
      console.log("Price:", priceElement);
      localStorage.setItem("image", imgElement);
      localStorage.setItem("ttl", titleElement);
      localStorage.setItem("pp", priceElement);

    const formData = new FormData();
    formData.append('title', titleElement);
    formData.append('price', priceElement);
    formData.append('image', imgElement);

    // Make a POST request to your backend server
    axios.post('/products', formData)
      .then(response => {
        console.log('Data stored successfully:', response.data);
        // Optionally, you can handle the response here
      })
      .catch(error => {
        console.error('Error storing data:', error);
        // Optionally, you can handle errors here
      });
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        style={{ position: "relative", top: "-300px" }}
        className="today-deals-container"
        id="todaysdeals"
      >
        <Button variant="primary" id="todatimer">
          Today-Deals <Badge bg="secondary">0</Badge>
        </Button>
        <div id="time">
          <span id="hrs">{hrs}</span>:<span id="minutes">{min}</span>:
          <span>{sec}</span>
        </div>
        <div className="todaysDeals">
          <div className="cards">
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/r/0/l/l-high-neck-indian-krait-original-imaghbsehzxzsd3j.jpeg?q=70"
                  alt="no image"
                  style={{ height: "100px", width: "100px" }}
                  className="imgsrc"
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Men Self Design High Neck Cotton Blend White T-Shirt
                  </Card.Text>

                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">488</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://m.media-amazon.com/images/I/519bfX0ISVL._SX355_.jpg"
                  style={{ height: "100px", width: "100px" }}
                  className="imgsrc"
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Pigeon Aster Gas Stove 2 Burner with High Powered Brass
                    Burner
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">1999</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/r/4/m/-original-imagj72vqsfqgzpf.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    APPLE iPad (10th Gen) 256 GB ROM 10.9 inch with Wi-Fi Only
                    (Blue)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">57900</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/electric-cycle/z/i/m/e-power-l6-27-5t-electric-cycle-with-front-suspension-dual-disc-original-imaghyzgbsmqstex.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    LEADER E-Power L6 27.5T Electric Cycle with Front Suspension
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">26999</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/key-holder/0/z/i/6-745-a3-box-original-imagkyhyc9nxaxfe.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    A3 BOX I Love Mom Dad Wood Key Holder (6 Hooks, Brown)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">173</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/416/416/kshtxu80/umbrella/p/i/x/3-fold-umbrella-with-auto-open-and-close-23-snowpride-original-imag6fz9zhgnm8ra.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    KUSUM Auto Open And Close 3 Fold Umbrella (Black)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">381</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/v/m/u/-original-imagrgwwqqczesqb.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Gold Plated | Diamond Studded | 3D Cut Glass | Day and Date
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">299</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/i/e/6-f1rst-full-black-6-hotstyle-white-original-imaghmz9xa2yk8m9.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    FAST Trendy Trainer Execellent Running Gear
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">279</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/art-set/p/4/h/-original-imagqtdkwz4dpyxd.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Fevicreate Activity 8 in 1 Kit
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">391</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/416/416/k2c6rgw0/calculator/h/e/w/casio-scientific-fx-82ms-original-imafgc6xh5aunehx.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    CASIO FX-82MS Scientific Scientific Calculator (12 Digit)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">550</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/416/416/keokpe80/diary-notebook/k/6/m/classmate-02105002-original-imafvbyguq5v7hkn.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Classmate Pulse Book-size Notebook Unruled 300 Pages
                    (Multicolor)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">188</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/projector-stand/t/u/6/50-ceiling-mount-projector-hanging-kit-3-feet-adjustable-weight-original-imagke8kxjsqenaz.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    MOIZ Wall/Ceiling Mount kit Projector Stand
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">1133</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/416/416/ky1vl3k0/file-folder/k/5/k/101ffp13-for-documents-certificates-letter-a4-size-file-original-imagadkgpvz5dgyp.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    NIVIZEN Plastic 13 Pockets Expanding File Folder for
                    Documents
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">296</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/416/416/ku1k4280/pen/y/s/c/4030186-classmate-original-imag78yghkqchxdk.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Classmate Octane Gel Pen (Pack of 10, Blue)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">99</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/312/312/kfmv9u80/mobile/5/q/w/nokia-150-2020-12gmnb21a01-original-imafwfqgpf7hmyyh.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Nokia 150 TA-1235 DS
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">2499</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgan7.jpeg?q=70"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    SAMSUNG Galaxy S23 Ultra 5G (Cream, 256 GB)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">124999</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/71czGb00k5L._AC_UY327_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Acer Aspire Lite 11th Gen Intel Core i3-1115G4 Premium Thin
                    & Light Laptop (8GB RAM/256GB SSD/Intel UHD)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">29990</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/718AiQQtJBL._AC_UY327_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    MSI Modern 15, Intel 11th Gen. i3-1115G4, 40CM FHD 60Hz
                    Laptop (8GB/512GB NVMe SSD/Windows 11)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">32990</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/81BgEsl0SJL._AC_UY327_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Master Your Emotions: A Practical Guide to Overcome
                    Negativity and Better
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">238</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY327_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Think Straight: Change your thoughts, Change your life
                    [Paperback] Foroux, Darius
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">124</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/71B4h-dSVzL._AC_UY327_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Energize Your Mind: Learn the Art of Mas
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">169</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/71Zfi7cSB2L._AC_UY327_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    My First Book of Pencil Control
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">87</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UY327_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    The Power of your Subconscious Mind
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">145</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/719uAS32P7L._AC_UY327_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    The Power of One Thought : Master Your Mind, Master Your
                    Life
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">281</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/71qB1s4zChL._AC_UY327_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Addition and Subtraction Activity Book For Children
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">99</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/61yB0UFlM3L._AC_UY327_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Grandma's Bag of Stories: Collection of 20+ Illustrated
                    short stories
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">171</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/710GgrTea1L._AC_UY327_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Moral Story Books for Kids (Set of 10 Books) (Illustrated)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">221</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/4196PDwUlmL._AC_UL600_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    Navneet HQ | Five Subject Spiral Wiro Bound Notebook
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">141</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/819Rm7xw2aL._AC_UL600_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    AmazonBasics Classic Notebook, Plain - (130mm x 210mm)
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">259</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgsrc"
                  variant="top"
                  src="https://m.media-amazon.com/images/I/51jOyHcJswL._AC_UL600_FMwebp_QL65_.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
                <Card.Body>
                  <Card.Text className="cardtitle">
                    DOODLE Adventures of the Mind Hard Bound Non dated Diary
                  </Card.Text>
                  <Card.Text>
                    <h5>Price :</h5>
                    <h5 className="price">266</h5>
                  </Card.Text>
                  <Card.Text>
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                    <LiaStarSolid class="star" />
                  </Card.Text>
                  <Button variant="primary" onClick={addtocart}>
                    AddToCart <FaShoppingCart />
                  </Button>
                  <Link to="/buy">
                    <Button variant="success" onClick={buynow}>
                      BuyNow <PiShoppingBag />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <store.Provider value={[noofcartitems, setnoofcartitems]}>
        <NavScrollExample />
        <Cart />
        <Sports />
        <Featured />
        <Books />
        <Kitchen />
      </store.Provider>
    </>
  );
}
export default Todaydeals;
