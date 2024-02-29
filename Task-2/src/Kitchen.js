import React, { useContext } from "react";
import "./Featured.css";
import { FaShoppingCart } from "react-icons/fa";
import { PiShoppingBag } from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";
import Button from "react-bootstrap/Button";
import { store } from "./Todaysdeals";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Kitchen() {
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
    setnoofcartitems((prev) => prev + 1);

    const cardElement = event.target.closest(".pro");

    if (cardElement) {
      const imgElement = cardElement.querySelector("img").src;
      const titleElement = cardElement.querySelector("p").innerText;
      const priceElement = cardElement.querySelector("h4").innerText;

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
      const titleElement = cardElement.querySelector("p.ttl");
      const titleText = titleElement ? titleElement.innerText : "";

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
      id="kitchen"
      style={{
        width: "100vw",
        height: "900px",
        position: "relative",
        top: "1000px",
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
      <h1>
        <b>Home&Kitchen</b>
      </h1>
      <div class="product">
        <div class="pro">
          <img
            id="addimg81is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71R8GV2pxaL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg81ts">
              Golwyn® Kitchen Accessories Items Dispenser Soap Pump Sponge
              Holder Plastic Liquid Soap Dispenser Kitchen Set
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg81ps">189</h4>
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
            id="addimg82is"
            class="product1"
            src="https://m.media-amazon.com/images/I/61ADJiLzIOL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg82ts">
              Scotch-Brite Plastic Kitchen Wiper
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg82ps">150</h4>
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
            id="addimg83is"
            class="product1"
            src="https://m.media-amazon.com/images/I/61fPH47Hd0L._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg83ts">
              Butterfly Premium Vegetable Chopper 900 Ml, Blue
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg83ps">299</h4>
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
            id="addimg84is"
            class="product1"
            src="https://m.media-amazon.com/images/I/41kGt3Och1L._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg84ts">
              Kitchenwell Soap Holder for Bathroom Kitchen Sink Wall Single
              Layer with Magic Vacumme{" "}
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg84ps">39</h4>
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
            id="addimg85is"
            class="product1"
            src="https://m.media-amazon.com/images/I/31Mt4AiUiML._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg85ts">
              KBS Bottle Cleaning Brush Silicone Long Handle for Water Bottle
              Narrow Neck Containers Vase and Glass
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg85ps">56</h4>
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
            id="addimg86is"
            class="product1"
            src="https://m.media-amazon.com/images/I/511pD3c3ZAL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg86ts">
              Pigeon by Stovekraft Stainless Steel Kitchen Knives Set, 3-Pieces,
              Multicolor
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg86ps">209</h4>
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
            id="addimg87is"
            class="product1"
            src="https://m.media-amazon.com/images/I/31rTW8ylFJL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg87ts">
              Tosmy Stainless Steel Potato Vegetable Pav Bhaji Masher,
              Multicolour
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg87ps">79</h4>
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
            id="addimg88is"
            class="product1"
            src="https://m.media-amazon.com/images/I/51bfd5UUidL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg88ts">
              Tosaa Dry Fruit Cutter, Slicer, Grinder, Chocolate Cutter and
              Butter Slicer with 3 in 1 Blade
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg88ps">69</h4>
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
            id="addimg89is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71iDFYr3AIL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg89ts">
              AGARO Royal Stand Mixer 1000W with 5L SS Bowl and 8 Speed Setting
              I Includes Whisking Cone, Mixing Beat
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg89ps">5999</h4>
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
            id="addimg90is"
            class="product1"
            src="https://m.media-amazon.com/images/I/611JToXX49L._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg90ts">
              Scotch-Brite No-Dust Broom, Long handle, Easy floor cleaning
              (Multi-use)
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg90ps">275</h4>
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
            id="addimg91is"
            class="product1"
            src="https://m.media-amazon.com/images/I/51OYFH+NrFS._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg91ts">
              HealthSense Chef-Mate KS 33 Digital Kitchen Weighing Scale & Food
              Weight Machine
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg91ps">1059</h4>
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
            id="addimg92is"
            class="product1"
            src="https://m.media-amazon.com/images/I/51L0pMPJKnL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg92ts">
              IKEA RASKOG Home Kitchen Storage Utility Rack
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg92ps">3399</h4>
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
            id="addimg93is"
            class="product1"
            src="https://m.media-amazon.com/images/I/711V3xT+rKS._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg93ts">
              Zollyss Double Layer Soap Dish Storage Organizer Holder and
              Stainless Steel Hook Self-Adhesive Stainless
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg93ps">329</h4>
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
export default Kitchen;
