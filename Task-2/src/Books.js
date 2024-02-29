import React, { useContext } from "react";
import "./Featured.css";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";
import { PiShoppingBag } from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./Todaysdeals";
import { Link } from "react-router-dom";
import axios from "axios";
function Books() {
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
      });
    }
  }

  return (
    <section
      id="books"
      style={{
        width: "100vw",
        height: "1000px",
        position: "relative",
        top: "-300px",
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
      <h1 style={{ color: "blue" }}>
        <b>Books</b>
      </h1>
      <div class="product">
        <div class="pro">
          <img
            id="addimg301is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71s7alulc4L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg301ts">
              Welcome to Aaraampur: A Sleepy Little Hill Town
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg301ps">245</h4>
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
            id="addimg348is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81KeOD++BBL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg348ts">
              A Nation of Idiots
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg348ps">399</h4>
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
            id="addimg302is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81BgEsl0SJL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg302ts">
              Master Your Emotions: A Practical Guide to Overcome Negativity and
              Better Manage Your Feelings
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star"></i>
            </div>
            <h4 id="addimg302ps">238</h4>
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
            id="addimg303is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p id="addimg303ts" class="ttl">
              Think Straight: Change your thoughts, Change your life [Paperback]
              Foroux, Darius
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star-half"></i>
            </div>
            <h4 id="addimg303ps">124</h4>
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
            id="addimg304is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71B4h-dSVzL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg304ts">
              Energize Your Mind: Learn the Art of Mas
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star-half"></i>
            </div>
            <h4 id="addimg304ps">169</h4>
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
            id="addimg305is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71Zfi7cSB2L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg305ts">
              My First Book of Pencil Control : Practice Pattern Writing (Full
              Color Pages): Patterns Practice book
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star"></i>
            </div>
            <h4 id="addimg305ps">87</h4>
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
        <div
          class="pro"
          id="Gold Plated | Diamond Studded | 3D Cut Glass | Day and Date | 1 Year Warranty Analog Watch - For Men CSD-625-BLACK-GOLD-DD"
        >
          <img
            id="addimg306is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg630ts">
              The Power of your Subconscious Mind
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg306ps">145</h4>
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
            id="addimg307is"
            class="product1"
            src="https://m.media-amazon.com/images/I/719uAS32P7L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg307ts">
              The Power of One Thought : Master Your Mind, Master Your Life
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg307ps">281</h4>
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
            id="addimg308is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71qB1s4zChL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg308ts">
              Addition and Subtraction Activity Book For Children - 80+
              Activities Inside
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star-half"></i>
            </div>
            <h4 id="addimg308ps">99</h4>
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
            id="addimg309is"
            class="product1"
            src="https://m.media-amazon.com/images/I/61yB0UFlM3L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg309ts">
              Grandma's Bag of Stories: Collection of 20+ Illustrated short
              stories, traditional Indian folk tales for all ages
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg309ps">171</h4>
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
            id="addimg310is"
            class="product1"
            src="https://m.media-amazon.com/images/I/710GgrTea1L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg310ts">
              Moral Story Books for Kids (Set of 10 Books) (Illustrated) -
              English Short Stories with Colourful Pictures - Bedtime
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg310ps">221</h4>
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
            id="addimg311is"
            class="product1"
            src="https://m.media-amazon.com/images/I/4196PDwUlmL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg311ts">
              Navneet HQ | Five Subject Spiral Wiro Bound Notebook|14.8x21 cm
              |Single Line |300 Pages | Mint Green
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg311ps">141</h4>
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
            id="addimg312is"
            class="product1"
            src="https://m.media-amazon.com/images/I/819Rm7xw2aL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg312ts">
              AmazonBasics Classic Notebook, Plain - (130mm x 210mm) - 240 pages
              (Black)
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg312ps">259</h4>
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
            id="addimg313is"
            class="product1"
            src="https://m.media-amazon.com/images/I/51jOyHcJswL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg313ts">
              DOODLE Adventures of the Mind Hard Bound Non dated Diary (5.5 X
              8.5 Inches, 80 GSM, 192 Ruled perforated)
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star"></i>
            </div>
            <h4 id="addimg313ps">266</h4>
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
            id="addimg314is"
            class="product1"
            src="https://m.media-amazon.com/images/I/816PO1ZLMzL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg314ts">
              JIADA Unicorn Print Wirebound Spiral Diary Notebook A5 Size, 160
              Pages - 1 Unicorn Pen Free
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg314ps">99</h4>
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
            id="addimg315is"
            class="product1"
            src="https://m.media-amazon.com/images/I/91TIN3Dtk-L._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg315ts">
              Amazon Brand - Solimo Handmade Personal Leather Diary Embossed
              with Lotus Design, 7x5 inches, 200
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg315ps">179</h4>
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
            id="addimg316is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71qMFxtcfdL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg316ts">
              Classmate Notebook - Single Line, 140 Pages, 240 mm x 180 mm -
              Pack Of 4
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star"></i>
            </div>
            <h4 id="addimg316ps">169</h4>
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
            id="addimg317is"
            class="product1"
            src="https://m.media-amazon.com/images/I/61NJ7uZ2muL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p id="addimg317ts" class="ttl">
              Classmate Soft Cover 6 Subject Spiral Binding Notebook, Unruled,
              300
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star-half"></i>
            </div>
            <h4 id="addimg317ps">159</h4>
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
            id="addimg318is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81o4QuOH39L._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg318ts">
              Classmate Long Notebook - 140 Pages, Single Line, 297Mm X 210Mm
              (Pack Of 12)
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star-half"></i>
            </div>
            <h4 id="addimg318ps">719</h4>
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
            id="addimg319is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81obxi935WL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg319ts">
              Classmate Long Book - Unruled, 160 Pages, 330 mm x 210 mm - Pack
              Of 2
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star"></i>
            </div>
            <h4 id="addimg319ps">123</h4>
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
        <div
          class="pro"
          id="Gold Plated | Diamond Studded | 3D Cut Glass | Day and Date | 1 Year Warranty Analog Watch - For Men CSD-625-BLACK-GOLD-DD"
        >
          <img
            id="addimg320is"
            class="product1"
            src="https://m.media-amazon.com/images/I/4196PDwUlmL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg320ts">
              Navneet HQ | Five Subject Spiral Wiro Bound Notebook|14.8x21 cm
              |Single Line |300 Pages | Mint Green
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg320ps">141</h4>
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
            id="addimg321is"
            class="product1"
            src="https://m.media-amazon.com/images/I/7144Ce32NYL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg321ts">
              Classmate Longbook - 272 X 167 mm, 172 Pages, Unruled
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg321ps">683</h4>
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
            id="addimg322is"
            class="product1"
            src="https://m.media-amazon.com/images/I/718cX3iXs1L._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg322ts">
              Navneet HQ | EZEE Disc Notebook White | Single Line | B5 Size -
              25x17 cm | 120 Pages
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg322ps">179</h4>
          </div>
          <button class="addbtn" onclick="addimg322s()">
            <i class="bi bi-cart4"></i>
          </button>
        </div>
        <div class="pro">
          <img
            id="addimg323is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81dJmoCKRES._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg323ts">
              Classmate Pulse Notebook - 240 X 180, 300 Pages, Unruled, Wiro
              Binding, Pack Of 3
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg323ps">380</h4>
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
            id="addimg324is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71se1m2WxFL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg324ts">
              WOODSNIPE Double Line Notebooks | 172 Ruled Pages Jumbo Size |
              Small Notebooks 2 Line | Hard
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star"></i>
            </div>
            <h4 id="addimg324ps">225</h4>
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
            id="addimg325is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81Eu-2AzHhL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p id="addimg325ts" class="ttl">
              Classmate Long Book - Single Line, 80 Pages, 297 mm x 210 mm -
              Pack Of 3
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star-half"></i>
            </div>
            <h4 id="addimg325ps">99</h4>
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
            id="addimg326is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81LqKfDuK8L._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg326ts">
              amblitz Spiral Notebook - A4-500 pages - Unruled
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star-half"></i>
            </div>
            <h4 id="addimg326ps">288</h4>
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
            id="addimg327is"
            class="product1"
            src="https://m.media-amazon.com/images/I/61hJUAzkkUL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg327ts">
              Classmate Pulse PP Cover Longbooks,A4 size, Unruled,140 Pages
              (Pack of 6)
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star"></i>
            </div>
            <h4 id="addimg327ps">251</h4>
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
        <div
          class="pro"
          id="Gold Plated | Diamond Studded | 3D Cut Glass | Day and Date | 1 Year Warranty Analog Watch - For Men CSD-625-BLACK-GOLD-DD"
        >
          <img
            id="addimg328is"
            class="product1"
            src="https://m.media-amazon.com/images/I/61dIy6EFBLL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg328ts">
              Le Schön’s multipurpose Diary / Notebook Wiro bound Size B5
              (7”x9”) Pack of 3 Single line ruled writing pages Best
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg328ps">279</h4>
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
            id="addimg329is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81R0AHLA57L._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg329ts">
              TARGET PUBLICATIONS 3 in 1 /Maths Square 9 MM, Single Line
              Notebook, Four Line Notebook-172 Pages, 18 x 24
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg329ps">234</h4>
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
            id="addimg330is"
            class="product1"
            src="https://m.media-amazon.com/images/I/61GwahWVACL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg330ts">
              Luxor 5 Subject Notebook | 70 gsm Paper | Single Ruled | Pages -
              300 | Count - 1 | 14 x 21.6 CM | Spiral Binding |
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg330ps">153</h4>
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
            id="addimg331is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81gu1KxWswL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg331ts">
              Paperkraftâ Expression| Hardâ Cover Notebook | 15.8 Cm X 19.4 Cm |
              Unruled | 192 Pages
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg331ps">122</h4>
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
            id="addimg332is"
            class="product1"
            src="https://m.media-amazon.com/images/I/51K2+43rspL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg332ts">
              KRASHTIC Book Girl Front Cover A4 Primary Composition Notebook,
              Journal, Unruled, 200 Page
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star"></i>
            </div>
            <h4 id="addimg332ps">189</h4>
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
            id="addimg333is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81Ql1mORJKS._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p id="addimg333ts" class="ttl">
              SHARMA BUSINESS SPIRAL NOTEBOOK 200 PAGES FOR SCHOOL AND OFFICE
              WORK SIZE A4 (30X21CM) UNRULED
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star-half"></i>
            </div>
            <h4 id="addimg333ps">179</h4>
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
            id="addimg334is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71RjjIQHhUL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg334ts">
              Archmesh, Square Grid Notebook, A4 Size (8.5x11 inches), Square
              Graph, Kraft Cover, Pack of 1
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star-half"></i>
            </div>
            <h4 id="addimg334ps">289</h4>
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
            id="addimg335is"
            class="product1"
            src="https://m.media-amazon.com/images/I/51lAppHaBRL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg335ts">
              Mathematics - Textbook for Class 7-756
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <i class="bi bi-star"></i>
            </div>
            <h4 id="addimg335ps">54</h4>
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
        <div
          class="pro"
          id="Gold Plated | Diamond Studded | 3D Cut Glass | Day and Date | 1 Year Warranty Analog Watch - For Men CSD-625-BLACK-GOLD-DD"
        >
          <img
            id="addimg336is"
            class="product1"
            src="https://m.media-amazon.com/images/I/91S-GcPpRLL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg336ts">
              Karnataka 1st PUC 2023-24 Hindi Text Book, Work Book and an offer
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg336ps">450</h4>
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
            id="addimg337is"
            class="product1"
            src="https://m.media-amazon.com/images/I/91XY8tMFoJL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg337ts">
              A Short Textbook of Psychiatry
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg337ps">635</h4>
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
            id="addimg338is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71W-kj60tXL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg338ts">
              Textbook of Pathology, 1e
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg338ps">1530</h4>
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
            id="addimg339is"
            class="product1"
            src="https://m.media-amazon.com/images/I/91jZXRU4-nL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg339ts">
              ISCCM Textbook of Critical Care Medicine
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg339ps">2940</h4>
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
            id="addimg340is"
            class="product1"
            src="https://m.media-amazon.com/images/I/41KNcQulYfL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg340ts">
              Guyton & Hall Textbook of Medical Physiology: Third South Asia
              Edition
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg340ps">1678</h4>
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
            id="addimg341is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71LSG9uUpdL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg341ts">
              INTERactive English - Intermediate Second Year English Textbook
              2022 New Edition
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg341ps">370</h4>
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
            id="addimg342is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81r0BWTtMXL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg342ts">
              Textbook of Prosthodontics
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg342ps">1995</h4>
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
            id="addimg343is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71QQiJgswhL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg343ts">
              Short Stories From Panchatantra - Volume 3: Abridged Illustrated
              Stories For Children (With Morals)
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg343ps">68</h4>
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
            id="addimg344is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71W2WfCokgL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg344ts">
              Writing Practice Boxset: Pack of 4 Books (Writing Fun: Write And
              Practice Capital Letters, Small Letters
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg344ps">199</h4>
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
            id="addimg345is"
            class="product1"
            src="https://m.media-amazon.com/images/I/71J5ncLaPhL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg345ts">
              ANANTHANARAYAN AND PANIKERÂ€™S TEXTBOOK OF MICROBIOLOGY, TWELFTH
              EDITION
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg345ps">1116</h4>
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
            id="addimg346is"
            class="product1"
            src="https://m.media-amazon.com/images/I/91w51uLctEL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg346ts">
              UG Textbook of Pediatrics
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg346ps">1039</h4>
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
            id="addimg347is"
            class="product1"
            src="https://m.media-amazon.com/images/I/81bz50PUo-L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div class="des">
            <span>yasaswini</span>
            <p class="ttl" id="addimg347ts">
              Textbook For Intermediate Frist Year Second Language: Part-II
              Sanskrit [TELUGU AKADEMI]
            </p>
            <div class="star">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <h4 id="addimg347ps">140</h4>
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
export default Books;
