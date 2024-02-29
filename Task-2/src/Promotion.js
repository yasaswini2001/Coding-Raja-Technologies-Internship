import "./Featured.css";
import { FaArrowDownLong } from "react-icons/fa6";

function Promotion() {
  function getiphone() {
    console.log("iphonr");
  }
  function giveaway() {
    console.log("giveaway");
  }
  return (
    <section
      id="promotion"
      style={{
        width: "100vw",
        height: "760px",
        position: "relative",
        top: "1300px",
      }}
    >
      <div id="iphone"></div>
      <div id="giveaway">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ_X5DVhWSi1vm_XIfLXL9cW5wxL7aOOZCQ&usqp=CAU" />
        <h1 style={{ color: "brown" }}>#Giveaway</h1>
        <h3 style={{ color: "aqua" }}>Win a brand new Macbook Laptop</h3>
        <form id="giveawayform">
          <input
            type="text"
            id="giveawayname"
            placeholder="Enter Name"
            required
          />
          <br></br>
          <input
            type="number"
            id="giveawaymobile"
            placeholder="Enter Phone"
            required
          />
          <br></br>
          <input
            type="email"
            id="giveawayemail"
            placeholder="Enter Email"
            required
          />
          <br></br>
          <input type="checkbox" id="giveawaycheck" required />
          <b style={{ color: "blue" }}>Accept TERMS & CONDITIONS</b>
          <br></br>
          <br></br>
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={giveaway}
          >
            Enter into Giveaway
          </button>
          <br></br>
          <p id="giveawaymsg" style={{ color: "blue" }}></p>
        </form>
      </div>
      <div id="dealsoftheday">
        <h2 style={{ position: "absolute", top: "100px", color: "white" }}>
          <b>Limited Offer!!!</b>
        </h2>
        <h1 id="arrow">
          <FaArrowDownLong
            id="arr"
            style={{
              color: "blue",
              position: "absolute",
              top: "270px",
              left: "180px",
            }}
          />
        </h1>
        <button type="button" className="btn btn-outline-primary">
          <a href="#todaysdeals">TodayDeals</a>
        </button>
        <div id="spinwheel" style={{ position: "absolute", left: "500px" }}>
          <div id="gamequiz">
            <h3
              style={{
                position: "absolute",
                top: "-300px",
                width: "400px",
                left: "60px",
              }}
            >
              <a href="#promotion">
                Get IPHONE 14 PRO MAX in the cheapest price
              </a>
            </h3>
            <strike
              style={{
                position: "absolute",
                color: "red",
                fontWeight: "bold",
                fontSize: "20px",
                top: "-230px",
                left: "350px",
              }}
            >
              149899
            </strike>
            <h3
              style={{
                position: "absolute",
                color: "green",
                fontWeight: "bold",
                fontSize: "30px",
                top: "-230px",
                left: "250px",
              }}
            >
              98000
            </h3>
            <img
              id="play"
              src="https://lh3.googleusercontent.com/FETzGOo1Efz7J9SqBdo8h8LwytumW5geyGio-cVgVXRfNNVILmpSPZdcboy-A6jodlgnDMbpJhrfjqvwLf0-epdC1aEdzcdNvU62VhxcLMdmJT5WFkkIdx3BL9OOtD-HwCXmcyfPNZpomiM-QfPb-i9hAIV8kCAFBCypJPhZFC2cJFOYl8ytcrNmCg"
              style={{
                position: "absolute",
                top: "-200px",
                width: "400px",
                left: "60px",
              }}
            />
            <button
              type="button"
              className="btn btn-outline-primary"
              style={{
                position: "absolute",
                top: "100px",
                width: "400px",
                left: "60px",
              }}
              onClick={getiphone}
            >
              Get It
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
