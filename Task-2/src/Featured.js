import "./Featured.css";
import { useState, useContext, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { PiShoppingBag } from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import { store } from "./Todaysdeals";
import { Link } from "react-router-dom";
import axios from "axios";
function Featured() {
  const [isDetailslappyHidden, setIsDetailslappyHidden] = useState(true);
  const [isDetailslappy, setIsDetailslappy] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [noofcartitems, setnoofcartitems] = useContext(store);

  function view1() {
    setIsDetailslappyHidden(!isDetailslappyHidden);
  }
  function view2() {
    setIsDetailslappy(!isDetailslappy);
  }
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
    const cardElement = event.target.closest("#details-individual");
    setnoofcartitems((prev) => prev + 1);
    if (cardElement) {
      const imgElement = cardElement.querySelector("img").src;
      const titleElement = cardElement.querySelector("h5").innerText;
      const priceElement = cardElement.querySelector("#price").innerText;
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
    const cardElement = event.target.closest("#details-individual");

    if (cardElement) {
      const imgElement = cardElement.querySelector("img").src;
      const titleElement = cardElement.querySelector("h5").innerText;
      const priceElement = cardElement.querySelector("#price").innerText;

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
    })
  }
}
  function hide() {
    setIsDetailslappy(!isDetailslappy);
  }
  function nope() {
    setIsDetailslappyHidden(!isDetailslappyHidden);
  }
  function open(event) {
    let din = document.getElementById("details-individual");
    din.removeAttribute("hidden");
    console.log("open");
    console.log(document.querySelector("img").src);
  }
  function exitdetailsindividual() {
    let din = document.getElementById("details-individual");
    din.setAttribute("hidden", true);
  }

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
      const titleElement = cardElement.querySelector("p").innerText;
      const priceElement = cardElement.querySelector("h4").innerText;
      console.log("Image Source:", imgElement);
      console.log("Title:", titleElement);
      console.log("Price:", priceElement);
      localStorage.setItem("image", imgElement);
      localStorage.setItem("ttl", titleElement);
      localStorage.setItem("pp", priceElement);
    }
  }
  let addbtn = document.querySelectorAll(".addbtn");
  let producttitle = document.getElementById("producttitle"); //producttitle
  let stars = document.getElementById("stars"); //rating stars
  let mrp = document.getElementById("original");
  let price = document.getElementById("price");
  let frequentitems = document.querySelectorAll(".deyasaswini");
  console.log(frequentitems);
  let detailsindividual = document.getElementById("details-individual");
  let placeimage = document.getElementById("placeimage");
  frequentitems.forEach((frequent) => {
    frequent.addEventListener("click", function handleClick() {
      console.log("clicked");
      placeimage.src = frequent.src;

      if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/519bfX0ISVL._SX355_.jpg"
      ) {
        producttitle.innerHTML =
          "Pigeon Aster Gas Stove 2 Burner with High Powered Brass Burner, Gas Cooktop with Glass Top and Powder Coated Body, black, standard (14266)";

        mrp.innerHTML = 5000;
        price.innerHTML = 1999;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/510sqsUwdRL._SX522_.jpg"
      ) {
        producttitle.innerHTML =
          "Yale YDME 50 NxT, Smart Door Lock with Biometric, Pincode, RFID Card & Mechanical Keys, Color- Black, for Home & Office (Free Installation)…";

        mrp.innerHTML = 15999;
        price.innerHTML = 10748;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/31UISB90sYL._SX679_.jpg"
      ) {
        producttitle.innerHTML =
          "Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White, GLS18I3FWAMC)";
        stars.innerHTML =
          "<LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/>";
        mrp.innerHTML = 58990;
        price.innerHTML = 32499;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/31OD2Jq6VYL._SX300_SY300_QL70_FMwebp_.jpg"
      ) {
        producttitle.innerHTML =
          "Usha Bloom Daffodil Goodbye Dust Ceiling Fan 1250mm, Sparkle Golden and Brown";
        stars.innerHTML =
          "<LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/>";
        mrp.innerHTML = 3775;
        price.innerHTML = 2999;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/51cv-A-cfYS._SY355_.jpg"
      ) {
        producttitle.innerHTML =
          "Urban Furnishing Engineered Wooden Wenge Finish 3 Door Wardrobe";
        stars.innerHTML =
          "<LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/>";
        mrp.innerHTML = 20099;
        price.innerHTML = 16099;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/41EcYoIZhIL._SY355_.jpg"
      ) {
        producttitle.innerHTML =
          "V Guard Mixer Grinder, 750W, 3 Jars (Black Orange)";

        mrp.innerHTML = 5999;
        price.innerHTML = 5780;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61D30mfoejL._SX355_.jpg"
      ) {
        producttitle.innerHTML =
          "KIRFIZ Stainless Steel 2 Slice Auto Pop-up Toaster ,Sandwich Butter Bread Breakfast Machine Baking Cooking Toaster - 930W";

        mrp.innerHTML = 8999;
        price.innerHTML = 4100;
      } else if (
        frequent.src == "https://m.media-amazon.com/images/I/31rXtyHzxyL.jpg"
      ) {
        producttitle.innerHTML =
          "Sunset Vista Designs Circle Bamboo Wind Chime, 26";

        mrp.innerHTML = 6999;
        price.innerHTML = 4539;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61TtV638UAL._SX355_.jpg"
      ) {
        producttitle.innerHTML =
          "Gala E-Popular Spin Mop with Bucket,Blue,Extra Large,170380";

        mrp.innerHTML = 1999;
        price.innerHTML = 1499;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/71I7-M6kcDL._SY355_.jpg"
      ) {
        producttitle.innerHTML =
          "Polyresine Little Monk Budha Suitable for Home Décor, Gifting, Car Dashboard, Livng Room, Office";

        mrp.innerHTML = 3999;
        price.innerHTML = 2500;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/21ki7Z1ZUrS._SX300_SY300_QL70_FMwebp_.jpg"
      ) {
        producttitle.innerHTML =
          "SOHAM Wheel Base Store Display Dummy Female Mannequin (Large, Size 12)";

        mrp.innerHTML = 7999;
        price.innerHTML = 6489;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/51LvKiH5txL._SY355_.jpg"
      ) {
        producttitle.innerHTML =
          "nal 2469 Pillar Tap Faucet  (Built-in Installation Type)";

        mrp.innerHTML = 2500;
        price.innerHTML = 2400;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61BzwtmQptL._SY450_.jpg"
      ) {
        producttitle.innerHTML =
          "beatXP Bolt Deep Tissue Massage Gun |  Pain Relief of Neck, Shoulder, Back, Foot for Men & Women Up to 1 Year Warranty (Black)";

        mrp.innerHTML = 4999;
        price.innerHTML = 1499;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/51hInlCq2IL._SY355_.jpg"
      ) {
        producttitle.innerHTML =
          "Cello KleenoTelescopic Hardtile Brush, Pack of 1pc, Red";

        mrp.innerHTML = 799;
        price.innerHTML = 459;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/513w75K0ffL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6 FHD Thin & Light Laptop(8GB/512GB SSD/Windows 11/";

        mrp.innerHTML = 36990;
        price.innerHTML = 59890;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/51ZmQLDGVOL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Dell Inspiron 7420 2in1 Touch Laptop,12th Gen Intel Core i3-1215U, 8GB/256GB SSD/14.0 (35.56Cms) FHD+";

        mrp.innerHTML = 53990;
        price.innerHTML = 71740;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/711QykIMR4L._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "HP Laptop 15s, 12th Gen Intel Core i3-1215U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD";

        mrp.innerHTML = 56261;
        price.innerHTML = 40990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61xzutxSl8L._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050)";

        mrp.innerHTML = 82999;
        price.innerHTML = 56990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/71DBkrxqBDL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "ASUS Vivobook S15 OLED 2022, 15.6 39.62 cm FHD OLED, Intel Core Evo i5-12500H 12th Gen, Thin and";

        mrp.innerHTML = 92990;
        price.innerHTML = 74990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61LNGJEMh0L._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU and 16‑core GPU: 33.74 cm (14.2-inch)";

        mrp.innerHTML = 210000;
        price.innerHTML = 199900;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61Ph34V0YAL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (16.2-inch)";

        mrp.innerHTML = 229990;
        price.innerHTML = 249900;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/51u9Q4IEnsL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Dell Vostro 3420 Laptop,Intel i5-1135G7/16GB/512GB SSD/14.0 (35.54cm)FHD, TÜV Rheinland Certified";

        mrp.innerHTML = 75550;
        price.innerHTML = 52990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/71Q6o3tg9dL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "HP Laptop 15, 13th Gen Intel Core i5-1335U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xᵉ";

        mrp.innerHTML = 78477;
        price.innerHTML = 68480;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/7181raNEn1L._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "HP Victus [Smart Choice }Gaming Laptop 12th Gen Intel Core i5-12450H 15.6 FHD IPS (Windows 11 Home/16GB";

        mrp.innerHTML = 88646;
        price.innerHTML = 68990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/71tHNTGasKL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Honor MagicBook 14, AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop";

        mrp.innerHTML = 75999;
        price.innerHTML = 41990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/71czGb00k5L._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Acer Aspire Lite 11th Gen Intel Core i3 Premium Metal Laptop (8GB RAM/512GB SSD/Windows 11 Home) AL15-";

        mrp.innerHTML = 30990;
        price.innerHTML = 44990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/41o-KkXEkSL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6 (39.62cm) FHD Laptop (8GB/256GB SSD/Win";

        mrp.innerHTML = 49190;
        price.innerHTML = 33990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/51u9Q4IEnsL._AC_UY327_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          " Dell 14, Intel 12th Gen i5-1235U Laptop/8GB/512GB SSD/14.0 (35.56cm) FHD TÜV Rheinland Certified";

        mrp.innerHTML = 83100;
        price.innerHTML = 52990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/71tHNTGasKL._AC_UY327_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Honor MagicBook 14, AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop";

        mrp.innerHTML = 65999;
        price.innerHTML = 37990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/71PFY+4vWrL._AC_UY327_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "HP Laptop 15s, 11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD";

        mrp.innerHTML = 50697;
        price.innerHTML = 37990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/71R-AObyPFL._AC_UY327_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "HP 255 G8 Notebook PC,AMD Ryzen 3 3250U, 15.6 inch(39.6cm) Anti-Glare HD Laptop/8GB RAM/512GB";

        mrp.innerHTML = 37188;
        price.innerHTML = 29490;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "OnePlus 11 5G (Eternal Green, 16GB RAM, 256GB Storage)";

        mrp.innerHTML = 71999;
        price.innerHTML = 61999;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/610cjhPdq3L._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Vivo Y100 5G (Pacific Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers";

        mrp.innerHTML = 29999;
        price.innerHTML = 23999;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61RZDb2mQxL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Samsung Galaxy S23 5G (Green, 8GB, 128GB Storage)";

        mrp.innerHTML = 89999;
        price.innerHTML = 74998;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "realme narzo 50i Prime (Dark Blue 4GB RAM+64GB Storage) Octa-core Processor | 5000 mAh Battery";

        mrp.innerHTML = 9999;
        price.innerHTML = 7599;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/81-JH9qHdfL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Nokia C12 Android 12 (Go Edition) Smartphone, All-Day Battery, 4GB RAM (2GB RAM + 2GB Virtual RAM) + 64GB";

        mrp.innerHTML = 7499;
        price.innerHTML = 5699;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61RBrScYUSL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Nokia 2660 Flip 4G Volte keypad Phone with Dual SIM, Dual Screen, inbuilt MP3 Player & Wireless FM Radio";

        mrp.innerHTML = 5899;
        price.innerHTML = 4449;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/81LrmorQeQL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Oppo A78 5G (Glowing Black, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger|";

        mrp.innerHTML = 21999;
        price.innerHTML = 18999;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/6175SlKKECL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "OnePlus Nord CE 3 5G (Aqua Surge, 8GB RAM, 128GB Storage)";

        mrp.innerHTML = 33450;
        price.innerHTML = 26998;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "OnePlus 11 5G (Eternal Green, 16GB RAM, 256GB Storage)";

        mrp.innerHTML = 79999;
        price.innerHTML = 61999;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61gdyDHr9ZL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Vivo Y27 (Burgundy Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers";

        mrp.innerHTML = 18999;
        price.innerHTML = 14999;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/810fCELNzvL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Itel P40+ (4GB RAM+128GB ROM, 8GB* RAM with Memory Fusion | 13MP AI Rear Camera | 7000mAh";

        mrp.innerHTML = 9999;
        price.innerHTML = 7998;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/418AkvIGS8L._AC_UY327_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "(Renewed) Vivo Y67 (Gold,4GB RAM, 64GB Storage)";

        mrp.innerHTML = 17999;
        price.innerHTML = 6999;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/31rx3zPdZ1L._AC_UY327_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Vivo V23 Pro 5G(Sunshine Gold, 12GB RAM, 256GB Storage)";

        mrp.innerHTML = 45990;
        price.innerHTML = 36990;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          "Apple iPhone 14 Pro Max (256 GB) - Deep Purple";

        mrp.innerHTML = 159990;
        price.innerHTML = 149900;
      } else if (
        frequent.src ==
        "https://m.media-amazon.com/images/I/61WAINtWPPL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML = "Apple iPhone 14 (256 GB) - Yellow";

        mrp.innerHTML = 909999;
        price.innerHTML = 178999;
      } else if (
        frequent.serc ==
        "	https://m.media-amazon.com/images/I/61RBrScYUSL._AC_UY327_FMwebp_QL65_.jpg"
      ) {
        producttitle.innerHTML =
          " Nokia 2660 Flip 4G Volte keypad Phone with Dual SIM, Dual Screen, inbuilt MP3 Player & Wireless FM Radio | Black";
        mrp.innerHTML = 3399;
        price.innerHTML = 4399;
      }
    });
  });
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
      <div id="featured" style={{ position: "relative", top: "-350px" }}>
        <h3 id="fre">Featured Products</h3>
        <div id="frequently">
          <div class="product" id="gasstove">
            <img
              src="https://m.media-amazon.com/images/I/519bfX0ISVL._SX355_.jpg"
              className="deyasaswini"
              onClick={open}
              id="img"
            />
            <img
              src="https://m.media-amazon.com/images/I/510sqsUwdRL._SX522_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/31UISB90sYL._SX679_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/31OD2Jq6VYL._SX300_SY300_QL70_FMwebp_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/51cv-A-cfYS._SY355_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/41EcYoIZhIL._SY355_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/61D30mfoejL._SX355_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/31rXtyHzxyL.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/61TtV638UAL._SX355_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/71I7-M6kcDL._SY355_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/21ki7Z1ZUrS._SX300_SY300_QL70_FMwebp_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/51LvKiH5txL._SY355_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/61BzwtmQptL._SY450_.jpg"
              className="deyasaswini"
              onClick={open}
            />
            <img
              src="https://m.media-amazon.com/images/I/51hInlCq2IL._SY355_.jpg"
              className="deyasaswini"
              onClick={open}
            />
          </div>
        </div>
        <div id="details-individual" hidden>
          <button id="exitdetailsindividual" onClick={exitdetailsindividual}>
            X
          </button>
          <button
            type="button"
            id="addtocart"
            class="btn btn-outline-warning"
            onClick={addtocart}
          >
            <Button variant="primary">addtocart</Button>
          </button>
          <Link to="/buy">
            <button
              type="button"
              id="buynow"
              class="btn btn-outline-success"
              onClick={buynow}
            >
              <Button variant="primary">BuyNow</Button>
            </button>
          </Link>
          <img src="" id="placeimage" class="product1" />
          <h5 id="producttitle" class="ttl"></h5>
          <h6 id="stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
          </h6>
          <b id="priceindividual">
            <h6 id="mrp">MRP</h6>
            <del id="original"></del>
            <b id="price"></b>
          </b>
        </div>
        <section id="electronics" style={{ position: "relative", top: "20px" }}>
          <h2 id="ttl">Electronics</h2>
          <div id="mobiles">
            <button
              type="button"
              class="btn btn-success"
              id="mviewall"
              onClick={view1}
            >
              ViewAll
            </button>
            <div id="mhead">
              <h3>Mobiles</h3>
            </div>
            <div class="product" id="gasstove">
              <img
                src="https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/610cjhPdq3L._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/81-JH9qHdfL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/61RZDb2mQxL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/61RBrScYUSL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/81LrmorQeQL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/6175SlKKECL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/61gdyDHr9ZL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/810fCELNzvL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/418AkvIGS8L._AC_UY327_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/31rx3zPdZ1L._AC_UY327_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/61WAINtWPPL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
            </div>
          </div>
          <div id="laptops">
            <button
              type="button"
              class="btn btn-success"
              id="lviewall"
              onClick={view2}
            >
              ViewAll
            </button>
            <div id="mhead">
              <h3>Laptops</h3>
            </div>
            <div class="product" id="gasstove">
              <img
                src="https://m.media-amazon.com/images/I/513w75K0ffL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                id="img"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/51ZmQLDGVOL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/711QykIMR4L._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/61LNGJEMh0L._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/61Ph34V0YAL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/51u9Q4IEnsL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/71Q6o3tg9dL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/7181raNEn1L._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/71tHNTGasKL._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/71czGb00k5L._AC_UY327_FMwebp_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/51u9Q4IEnsL._AC_UY327_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/71tHNTGasKL._AC_UY327_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/71PFY+4vWrL._AC_UY327_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
              <img
                src="https://m.media-amazon.com/images/I/71R-AObyPFL._AC_UY327_QL65_.jpg"
                class="product1"
                className="deyasaswini"
                onClick={open}
              />
            </div>
          </div>

          <div id="details" hidden={isDetailslappyHidden}>
            <Button variant="danger" onClick={nope}>
              X
            </Button>
            <div class="product">
              <div class="pro">
                <img
                  id="addimg1i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/l/8/-original-imagqmtfgq7e4edm.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg1t">
                    Xiaomi 12 Pro 5G (Couture Blue, 256 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg1p">44999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg2i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/m/w/-original-imag47fdfgmg2gnh.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg2t">
                    SAMSUNG Galaxy S20 FE 5G (Cloud Navy, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg2p">27478</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg3i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgan7.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg3t">
                    SAMSUNG Galaxy S23 Ultra 5G (Cream, 256 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg3p">124999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg4i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/n/f/galaxy-s23-ultra-5g-sm-s918bzgcins-samsung-original-imagqq9hd7ytyzqb.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg4t">
                    SAMSUNG Galaxy S23 Ultra 5G (Cream, 512 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg4p">126349</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg11i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70"
                />
                <div class="des">
                  <span>Iphone</span>
                  <p className="ttl" id="addimg11t">
                    APPLE iPhone 13 (Midnight, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg11p">60999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg12i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/l0r1j0w0/mobile/b/h/f/-original-imagch28cnf3u3we.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg12t">
                    Nokia 105 TA-1473 SS
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg12p">1599</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg13i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg13t">
                    OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg13p">17739</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg14i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/s/x/-original-imagnfqyn37fpmnz.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg14t">
                    OPPO A17k (Blue, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg14p">9499</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg15i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/p/m/11-prime-mzb0cepin-redmi-original-imagzqvrhmzjeedx.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg15t">
                    REDMI 11 Prime (Playful Green, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg15p">10749</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg16i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/d/o/-original-imaghgbyhy6banxv.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg16t">
                    SAMSUNG Galaxy F04 (Opal Green, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg16p">8499</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg17i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg17t">
                    APPLE iPhone 14 (Starlight, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg17p">69999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg18i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/l0r1j0w0/mobile/m/j/u/-original-imagch29bxhbyjju.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg18t">
                    Nokia 105 TA-1459 DS
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg18p">1651</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg19i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/kfmv9u80/mobile/5/q/w/nokia-150-2020-12gmnb21a01-original-imafwfqgpf7hmyyh.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg19t">
                    Nokia 150 TA-1235 DS
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg19p">2499</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg20i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/jyxaw7k0/mobile/p/4/5/nokia-105-dual-sim-2017-ta-1034-original-imafa9duv3yf5zmx.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg20t">
                    Nokia 105 ss
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg20p">1549</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg21i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/kfmv9u80/mobile/g/h/m/nokia-125-12gmnw21a01-original-imafwfqge833sxwx.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg21t">
                    Nokia 125 TA-1253 DS
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg21p">2199</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg22i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/kfmv9u80/mobile/6/9/j/nokia-150-2020-12gmne21a01-original-imafwfqfcbdphgqp.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg22t">
                    Nokia 150 DS 2020
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg22p">2767</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg23i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/k34rki80/mobile/3/z/x/nokia-105-ss-105-ss-original-imafjw6xnttqqhyf.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg23t">
                    Nokia 105 SS 2021
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg23p">1449</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              '
              <div class="pro">
                <img
                  id="addimg24i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/7/e/2/110-4g-ta-1373-ds-nokia-original-imag6vwzcfkhcyht.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg24t">
                    Nokia 110 4G
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg24p">2999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg25i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/l3hmwsw0/mobile/6/f/e/105-ss-plus-ta-1447ss-nokia-original-imagehjkht6j3jrw.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg25t">
                    Nokia 105 PLUS SS
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg25p">1444</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg26i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/l4bn5ow0/mobile/7/5/5/-original-imagf92wpefavmtd.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg26t">
                    Nokia 105 DS 2020
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg26p">1598</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg27i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg27t">
                    APPLE iPhone 14 (Purple, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg27p">69999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg28i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg28t">
                    APPLE iPhone 11 (White, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg28p">44999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg29i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg29t">
                    APPLE iPhone 11 (White, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg29p">41999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg30i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg30t">
                    APPLE iPhone 14 Pro (Deep Purple, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg30p">120999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg31i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg?q=70"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg13t">
                    APPLE iPhone 12 (Purple, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg31p">53999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg32i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dubf3nytw.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg32t">
                    APPLE iPhone 12 (Green, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg32p">53999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg33i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg33t">
                    APPLE iPhone 11 Pro Max (Midnight Green, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg33p">95699</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg34i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/q/z/g/iphone-11-128-a-mwm32hn-a-apple-0-original-imafkg25hjmuy98e.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg34t">
                    APPLE iPhone 11 (Red, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg34p">41999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg35i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/p/8/-original-imagg2a4rmk94gay.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg35t">
                    OnePlus Nord CE 2 Lite 5G (Black Dusk, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg35p">17717</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg36i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/w/l/11r-5g-5011102527-oneplus-original-imagn3bq8t4ja5rx.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg36t">
                    OnePlus 11R 5G (Galactic Silver, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg36p">38999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg37i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/a/11r-5g-5011102525-oneplus-original-imagn3afeqfr6acy.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg37t">
                    OnePlus 11R 5G (Sonic Black, 256 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg37p">44150</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg38i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/b/o/-original-imageypzw8gumvyz.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg38t">
                    OnePlus 10R (Forest Green, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg38p">30970</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg39i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/s/t/-original-imagfx6hzsqu438h.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg39t">
                    OnePlus Nord 2T 5G (Jade Fog, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg39p">28799</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg40i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/p/8/-original-imagg2a4rmk94gay.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg40t">
                    OnePlus Nord CE 2 Lite 5G (Black Dusk, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg40p">17717</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg41i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/q/v/-original-imageyq5akea25we.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg41t">
                    OnePlus 10R (Sierra Black, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg41p">30755</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg42i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/a/v/-original-imagfx6b9shazw8u.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg42t">
                    -OnePlus Nord 2T 5G (Gray Shadow, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg42p">28898</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg43i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/a/v/-original-imagfx6b9shazw8u.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg43t">
                    OnePlus Nord 2T 5G (Gray Shadow, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg43p">28898</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg44i"
                  class="product1"
                  className="ttl"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/s/t/-original-imagfx6hzsqu438h.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg44t">
                    OnePlus Nord 2T 5G (Jade Fog, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg44p">28894</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg45i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/a/v/-original-imagfx6b9shazw8u.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg45t">
                    OnePlus Nord 2T 5G (Gray Shadow, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg45p">27819</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg46i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg46t">
                    SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg46p">10999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg47i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg47t">
                    SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg47p">10999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg48i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/i/k/galaxy-f14-5g-sm-e146bzggins-samsung-original-imagnzdkprfwj9hv.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg48t">
                    SAMSUNG Galaxy F14 5G (GOAT Green, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg48p">14990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg49i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/kr6oeq80/mobile/p/f/f/guru-music-2-sm-b310ezddins-samsung-original-imafchdspbgbvuth.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg49t">
                    SAMSUNG Guru Music 2
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg49p">2899</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg50i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/t/5/note-12-mzb0e2kin-redmi-original-imagz62rkfazphz2.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg50t">
                    REDMI Note 12 (Ice Blue, 64 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg50p">13999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg51i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/a/x/f21s-pro-cph2461-oppo-original-imagg59c2gvbkdft.jpeg?q=70
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg51t">
                    OPPO F21s Pro (Starlight Black, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg51p">20790</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg52i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/o/o/-original-imaghkvuzxkcna4n.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg52t">
                    REDMI Note 12 Pro 5G (Stardust Purple, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg52p">24999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg53i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/u/7/-original-imagmgy5ywvzdv6g.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg53t">
                    OPPO Reno8T 5G (Midnight Black, 128 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg53p">29999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg454i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/j16qm4w0/mobile/8/n/z/oppo-f1s-a1601-original-imaestf6hneprfg5.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg54t">
                    OPPO F1S (Grey, 32 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg54p">18330</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg55i"
                  className="ttl"
                  class="product1"
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/z/-original-imaghkvufhjsnw7q.jpeg?q=70
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg55t">
                    REDMI Note 12 Pro+ 5G (Iceberg Blue, 256 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg55p">32999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
            </div>
          </div>

          <div id="detailslappy" hidden={isDetailslappy}>
            <Button variant="danger" onClick={hide}>
              X
            </Button>
            <div class="product">
              <div class="pro">
                <img
                  id="addimg1ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/513w75K0ffL._AC_UY327_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg1tx">
                    Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6" FHD Thin &
                    Light Laptop(8GB/512GB SSD/Windows 11/Office)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg1px">35990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg2ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61G5EPaVmXL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg2tx">
                    Dell 14 Laptop, Intel Core
                    i3-1115G4/8GB/512GB/14.0"(35.56cm) FHD Display, TÜV
                    Rheinland Certified
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg2px">36990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg3ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/81OR5aEctIL._AC_UY327_FMwebp_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg3tx">
                    HP Victus Gaming Laptop AMD Ryzen 5 5600H 15.6 inch(39.6 cm)
                    FHD IPS Gaming Laptop (16GB
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg3px">64999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg4ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/816z4zx1peL._AC_UY327_FMwebp_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg4tx">
                    HP Laptop 15s, 12th Gen Intel Core i3-1215U, 15.6-inch (39.6
                    cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg4px">40990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg11ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71A95WmWCeL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <div class="des">
                  <span>Iphone</span>
                  <p className="ttl" id="addimg11tx">
                    HP Laptop 15s, 11th Gen Intel Core i5-1155G7, 15.6-inch
                    (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xe
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg11px">52499</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg12ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/711QykIMR4L._AC_UY327_FMwebp_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg12tx">
                    HP Pavilion 14 12th Gen Intel Core i5 16GB RAM/512GB SSD 14
                    inch(35.6cm) IPS Micro-Edge FHD Laptop/Intel
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg12px">65990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg13ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61WS4xoCvvL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg13tx">
                    HP ProBook 445 G8 Notebook PC, AMD Ryzen™ 7 5800U
                    Processor,14 inch(35.6cm) Anti-Glare FHD Laptop/8GB
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg13px">45990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg14ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71b8lYXqorL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg14tx">
                    HP 250 G8 Notebook PC, 11th Gen Intel Core i3-1115G4
                    Processor, 15.6 inch(39.6cm) Anti-Glare HD Laptop/8GB
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg14px">35999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg15ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61Q6f2wXpkL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg15tx">
                    (Renewed) HP Chromebook C640 10th Gen Intel Core i5 FHD Thin
                    & Light Laptop (8 GB DDR4 RAM/64 GB eMMC)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg15px">19199</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg16ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61w9Lcc66CL._AC_UY327_FMwebp_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg16tx">
                    Hp Pavilion X360 11Th Gen Intel Core I3 14 Inches Fhd
                    Multitouch 2-in-1 Laptop(8Gb Ram/512Gb
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg16px">54490</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg17ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/81yUqauTI5L._AC_UY327_FMwebp_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg17tx">
                    HP 247 G8 Laptop PC with AMD Ryzen 3 3250U/8 GB DDR4 RAM/512
                    GB PCIe® NVMe™ SSD/AMD Radeon™
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg17px">626518</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg18ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71BUBqd5nJL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg18tx">
                    ASUS Vivobook 15 (2023), Intel Core i3-1315U 13th Gen, 15.6"
                    (39.62 cms) FHD, Thin and Light Laptop
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg18px">45490</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg19ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71-l4YfD2yL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg19tx">
                    ASUS Vivobook S 15 2022, Intel Core i5-12500H 12th Gen,
                    15.6-inch (39.62 cms) FHD, Thin & Light Laptop
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg19px">57999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg20ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71qTbS09tjL._AC_UY327_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg20tx">
                    ASUS Vivobook 15, Intel Core i5-1235U 12th Gen, 15.6" (39.62
                    cm) FHD, Thin and Light Laptop (8GB RAM/512)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg20px">48990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg21ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71tGjGxis6L._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg21tx">
                    ASUS Creator Series Vivobook 16X 2023, Intel Core i5-12450H
                    12th Gen, 16.0-inch FHD+ 120Hz, Laptop
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg21px">65990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg22ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61eTPcEsC+L._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg22tx">
                    ASUS Vivobook Pro 15, AMD Ryzen 5 5600H, 15.6" (39.62 cm)
                    FHD, Thin & Light Laptop (16GB/512GB SSD/4GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg22px">65940</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg23ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/710NRdecQtL._AC_UY327_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg23tx">
                    ASUS TUF Gaming F15 (2021), 15.6" (39.62 cms) FHD 144Hz,
                    Intel Core i5-10300H 10th Gen, GTX 1650 4GB
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg23px">52990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              '
              <div class="pro">
                <img
                  id="addimg24ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71e9f-EU2WL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg24tx">
                    ASUS Vivobook 15 (2022), 15.6" (39.62 cms) FHD, Intel Core
                    i3-1220P 12th Gen, Thin and Light Laptop
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg24px">39999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg25ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71czGb00k5L._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg25tx">
                    Acer Aspire Lite 11th Gen Intel Core i5-1155G7 Thin and
                    Light Laptop (8 GB RAM/512GB SSD/Intel Iris Xe)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg25px">39990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg26ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61xzutxSl8L._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg26tx">
                    Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen (16
                    GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg26px">54990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg27ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71czGb00k5L._AC_UY327_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg27tx">
                    Acer Aspire Lite 11th Gen Intel Core i3-1115G4 Premium Thin
                    & Light Laptop (8GB RAM/256GB SSD/Intel UHD)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg27px">29990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg28ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/81yL4BWuwnL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg28tx">
                    Acer Nitro 5 AN515-58 Gaming Laptop 12th Gen Intel Core
                    i7-12650H NVIDIA GeForce RTX 3070Ti 8GB Laptop
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg28px">99990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg29ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71ixvs8g7PL._AC_UY327_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg29tx">
                    Acer Extensa 15 AMD Ryzen™ 3 7320U Quad-Core Processor (8
                    GB/256 GB SSD/Windows 11 Home/AMD)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg29px">29999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg30ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/41o-KkXEkSL._AC_UY327_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg30tx">
                    Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6"
                    (39.62cm) FHD Laptop (8GB/256GB SSD/Win)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg30px">33990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg31ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61DVZ7M+9FL._AC_UY327_QL65_.jpg"
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg13tx">
                    Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm)
                    FHD IPS Thin & Light Laptop (16GB/512GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg31px">56999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg32ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/619wdC9vcCL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg32tx">
                    Lenovo IdeaPad Slim 3 Intel Core i3 11th Gen 14" (35.56cm)
                    FHD IPS Thin & Light Laptop (8GB/512GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg32px">36990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg33ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/710aJMxsUXL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg33tx">
                    Xiaomi Notebook Ultra Max 11th Gen Intel Core i5-11320H Thin
                    & Light (16GB/512GB SSD/Iris Xe)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg33px">46999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg34ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71iiXU7HHkL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg34tx">
                    [SmartChoice] Xiaomi NotebookPro QHD+ IPS AntiGlare Display
                    Intel Core i5-11300H 11th Gen 14 inch(35.56 cm)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg34px">44999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg35ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71P73BaF1pL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg35tx">
                    Xiaomi [Smart Choice] Notebook Pro 120G 12th Gen Intel
                    i5-12450H (16GB/512GB SSD/Nvidia MX550/2.5K)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg35px">68999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg36ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71BCum1YVzL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg36tx">
                    MSI GF63 Thin, Intel Core i7-11800H, 40CM FHD 144Hz Gaming
                    Laptop (16GB/512GB NVMe SSD/Windows 1)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg36px">68990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg37ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/718AiQQtJBL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg37tx">
                    MSI Modern 15, Intel 11th Gen. i5-1155G7, 40CM FHD 60Hz
                    Laptop (8GB/512GB NVMe SSD/Windows 11)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg37px">40990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg38ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/713dZHEY2YL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg38tx">
                    MSI Katana 15, Intel 12th Gen. i7-12650H, 40CM FHD 144Hz
                    Gaming Laptop (16GB/512GB NVMe)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg38px">89990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg39ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71BCum1YVzL._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg39tx">
                    MSI GF63 Thin, Intel Core i7-11800H, 40CM FHD 144Hz Gaming
                    Laptop (16GB/512GB NVMe SSD/Windows 11)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg39px">60799</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg40ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71l4M2y8zwL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg40tx">
                    MSI Cyborg 15, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz
                    Gaming Laptop (16GB/512GB NVMe)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg40px">65990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg41ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/718AiQQtJBL._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg41tx">
                    MSI Modern 15, Intel 11th Gen. i3-1115G4, 40CM FHD 60Hz
                    Laptop (8GB/512GB NVMe SSD/Windows 11)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg41px">32990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg42ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71NjNYTRy3L._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg42tx">
                    Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM
                    39.6cm(15.6") Super Amoled 2-in-1 Touchscreen Laptop)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg42px">122990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg43ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71VETao+NEL._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg43tx">
                    Samsung Galaxy Book2 (NP750) Intel 12th Gen core i5 39.6cm
                    (15.6") FHD Thin & Light Laptop (8 GB/512 GB/Windows 11/MS
                    Office/Backlit Keyboard/Finger Print Reader/Silver/1.55Kg),
                    NP750XED-KC1IN 4.0 out of 5 stars 139)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg43px">58940</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg44ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71Dh450OVpL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg44tx">
                    (Renewed) Samsung Galaxy Book3 Pro Intel 13th Gen i5 EvoTM
                    35.56cm(14") Dynamic Amoled 2X, 3K Display,
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg44px">112191</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg45ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71OOsEBtCtL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg45tx">
                    Samsung Newest Chromebook 4 11.6” Laptop Computer for
                    Business Student, Intel Celeron N4020(Up to 2.8GH)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg45px">42775</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg46ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/41YAfpeqI8L._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg46tx">
                    Samsung Chromebook 4 (2021 Model) 11.6" Intel UHD Graphics
                    600, Intel Celeron Processor N4020, 4GB, 16G
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg46px">34674</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg47ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/41UE2lCINwS._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg47tx">
                    Samsung Chromebook Plus Intel Celeron 3965Y 12.2 inches
                    Laptop (4GB LPDDR3 32GB eMMC, Chrome OS)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg47px">66893</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg48ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/610tKrTIhqL._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg48tx">
                    Samsung Chromebook 3 11.6 HD Flagship Ultrabook Laptop PC |
                    Intel Core Celeron N3060 | 4GB RAM | 32GB
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg48px">50200</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg49ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61c64Zn6nDL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg49tx">
                    Samsung Chromebook 3 11.6-inch HD WLED Intel Celeron 4GB
                    32GB eMMC Chrome OS Laptop (Charcoal)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg49px">36564</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg50ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/71lkDaWTa8L._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg50tx">
                    Microsoft Surface GO 3 8VA-00013 10.5" (26.67 cms) Laptop
                    (Intel Pentium T6600 Processor/8GB/128GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg50px">56990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg51ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61wqtqb2hzL._AC_UY327_QL65_.jpg
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg51tx">
                    Microsoft New Surface Laptop5 13.5" Intel evo 12 Gen i5 /
                    8GB / 256GB Platinum with Windows 11 Home, 365
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg51px">102608</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg52ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61Oajf5fe2L._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg52tx">
                    Microsoft Surface Laptop Studio - 14.4" Touchscreen - Intel®
                    Core™ i7-16GB RAM Memory - 512GB SSD
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg52px">194990</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg53ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61UGE9cZVlL._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg53tx">
                    Microsoft Surface Studio 14.4 inches Touchscreen Intel ®
                    Core i7 Laptop (32GB Memory, Windows 11 Home, 2TB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg53px">373999</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg54ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61brE9c2DCL._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg54tx">
                    Microsoft Laptop 4 - 13.5" inches Screen, Ryzen AMD 5,
                    Windows 11 Home/8GB RAM/256 GB SSD/ Platinum{" "}
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg54px">79000</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg60ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/61LNGJEMh0L._AC_UY327_FMwebp_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg60tx">
                    Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU
                    and 16‑core GPU: 33.74 cm (14.2-inch)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg60px">199900</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
              <div class="pro">
                <img
                  id="addimg55ix"
                  class="product1"
                  src="https://m.media-amazon.com/images/I/81KoSSAwH2L._AC_UY327_QL65_.jpg
  
          "
                />
                <div class="des">
                  <span>yasaswini</span>
                  <p className="ttl" id="addimg55tx">
                    REDMI Note 12 Pro+ 5G (Iceberg Blue, 256 GB)
                  </p>
                  <div class="star">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                  <h4 id="addimg55px">77500</h4>
                </div>
                <Button variant="primary" onClick={addtocart}>
                  AddToCart <FaShoppingCart />
                </Button>
<Link to="/buy"><Button variant="success">BuyNow<PiShoppingBag/></Button></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Featured;
