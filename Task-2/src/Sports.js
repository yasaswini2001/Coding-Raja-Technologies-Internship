import React, { useContext } from "react";
import "./Featured.css";
import { FaShoppingCart } from "react-icons/fa";
import { PiShoppingBag } from "react-icons/pi";
import Button from "react-bootstrap/Button";
import { LiaStarSolid } from "react-icons/lia";
import { store } from "./Todaysdeals";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Sports() {
  const [noofcartitems, setnoofcartitems] = useContext(store);
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
    const cardElement = event.target.closest(".pro");
    setnoofcartitems((prev) => prev + 1);
    if (cardElement) {
      const imgElement = cardElement.querySelector("img").src;
      const titleElement = cardElement.querySelector("p").value;
      const priceElement = cardElement.querySelector("h4").value;
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
    const cardElement = event.target.closest(".pro");

    if (cardElement) {
      const imgElement = cardElement.querySelector("img").src;

      // Check if title element exists before accessing innerText
      const titleElement = cardElement.querySelector("p.ttl");
      const titleText = titleElement ? titleElement.innerText : "";

      // Check if price element exists before accessing innerText
      const priceElement = cardElement.querySelector("h4");
      const priceText = priceElement ? priceElement.innerText : "";

      console.log("Image Source:", imgElement);
      console.log("Title:", titleText);
      console.log("Price:", priceText);

      localStorage.setItem("image", imgElement);
      localStorage.setItem("ttl", titleText);
      localStorage.setItem("pp", priceText);

      const formData = new FormData();
formData.append('title', titleText);
formData.append('price', priceText);
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
    })
  }
  }

  return (
    <section
      id="sports"
      style={{
        width: "100vw",
        height: "900px",
        position: "relative",
        top: "-450px",
      }}
    >
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
      <h1>Sports</h1>
      <div class="product">
        <div class="pro">
          <img
            id="addimg201is"
            class="product1"
            src="https://m.media-amazon.com/images/I/61RpRYFb2wL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg201ts">
              Nivia Storm Football | Rubberized Moulded | Suitable for Hard
              Ground Without Grass | Training Ball{" "}
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg201ps">389</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg202is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71vih6Kw9FL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg202ts">
              Jaspo Slog Heavy Duty Plastic Cricket Bat,Full Size (34” X
              4.5”inches) Premium Bat{" "}
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg202ps">349</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg203is"
            class="product1"
            src="https://m.media-amazon.com/images/I/51cWUJHECZL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg203ts">
              Jaspo Cricket Ball for Practice, Training, and Matches for All Age
              Groups (Knocking Ball, Hard Shot Ball, T-20 Soft Ball ){" "}
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg203ps">278</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg204is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71Cuuje2xOS._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg204ts">
              Whackk Scorer Blue, Yellow Cricket kit Bag (9030)
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg204ps">1401</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg205is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71KyUQ9vmwL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg205ts">
              SG Full Cricket Kit with Duffle Bag and Trycom Brand Ball(with
              helmat)
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg205ps">7250</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg206is"
            class="product1"
            src="https://m.media-amazon.com/images/I/51OKm41cx4L._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg206ts">
              SG Icon Skin-Fit Cricket Top
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg206ps">1095</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg207is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81VgTSYk+wL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg207ts">
              SG Test RH Leather Batting Gloves, Adult - Cricket (Assorted)
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg207ps">2699</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg208is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81KSXD4oNwL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg208ts">
              Boldfit Basketball Size 7 Professional Basket Ball for
              Indoor-Outdoor Training Basketball for Players
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg208ps">549</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg209is"
            class="product1"
            src="https://m.media-amazon.com/images/I/91RoFeiSJkL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg209ts">
              Sg Test Rh Batting Legguard, Adult, Multicolour, Wood
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg209ps">3999</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg210is"
            class="product1"
            src="https://m.media-amazon.com/images/I/817NWNZKiEL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg210ts">
              Whitedot Falcon 1.0 Duffle Backpack Cricket Kitbag, Black
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg210ps">1224</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg211is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71rsEm78-FL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg211ts">
              Boldfit Volleyball Standard Size for Men and Women Sports Volley
              Ball with Free Pin Strong Grip Vollyball
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg211ps">749</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg212is"
            class="product1"
            src="https://m.media-amazon.com/images/I/31rP79r4RUL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg212ts">
              WorldCare® Knee Leg Sports Brace Support Sleeve Protector
              Basketball Volleyball (Xl) (Imported){" "}
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg212ps">3709</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg213is"
            class="product1"
            src="https://m.media-amazon.com/images/I/51lEznzIAML._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg213ts">
              Nivia Airstrike Football Stud Shoe
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg213ps">389</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
        <div class="pro">
          <img
            id="addimg214is"
            class="product1"
            src="https://m.media-amazon.com/images/I/41-3wHKwcPL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg214ts">
              amz sports Nylon Volleyball Net (38x39 Inches, Black){" "}
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg214ps">312</h4>
          </div>
          <Button variant="primary" onClick={addtocart}>
            AddToCart <FaShoppingCart />
          </Button>
          <Link to="/buy">
            <Button variant="success" onClick={buynow}>
              BuyNow <PiShoppingBag />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Sports;
