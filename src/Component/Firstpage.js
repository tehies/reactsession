import React from "react";
import logo2 from "../images/image2.png";
import logo3 from "../images/image3.png";
import logo4 from "../images/image4.png";
import logo5 from "../images/image5.png";

const Newpage = () => {
  return (
    <>
      <div className="main-banner">
        <img src={require("../images/image1.png")}></img>
        <div className="container">
          <div className="content-banner">
            <h2>Where can I get some</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock,
              <br></br>a Latin professor at Hampden-Sydney College in Virginia,
              looked up one of the more obscure Latin words,
            </p>
            <div className="Banner-button">
              <button className="banner-buttons">Purchase UI Kit</button>
              <button className="banner-buttons">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="light">
          <div className="section2">
            <h2>Light, Fast & Powerful</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Title Goes Here Title Goes
              Here Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
            <div className="main-section2">
              <div className="section2-icons">
                <img src={require("../images/Icon.png")}></img>
                <h3>Title Goes Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="section2-icons">
                <img src={require("../images/Icon.png")}></img>
                <h3>Title Goes Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="section2">
            <img src={logo2}></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="light1">
          <img src={logo3}></img>
          <div className="section3">
            <h2>Light, Fast & Powerful</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
        <div className="light1">
          <img src={logo4}></img>
          <div className="section3">
            <h2>Light, Fast & Powerful</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
        <div className="light1">
          <img src={logo5}></img>
          <div className="section3">
            <h2>Light, Fast & Powerful</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>
      <div className="upper-footer-section">
        <div class="container">
          <div className="light2">
            <div className="section4">
              <h2>A Price To Suit Everyone</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
              </p>

              <h2>$40</h2>
              <p>UI Design Kit</p>
              <p>See, One price. Simple.</p>
              <button>Purchase Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newpage;
