import React from "react";
import Slick from "../Components/Slick";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";

function Home(props) {
  const images = [
    "images/slide_5.jpg",
    "images/slide_6.png",
    "images/slide_7.jpg",
  ];
  console.log(window.location.pathname);
  return (
    <div className="home">
      <div className="slide-container">
        <Zoom scale={0.4} autoplay="true">
          {images.map((each, index) => (
            <img key={index} className="diap-img" src={each} />
          ))}
        </Zoom>
      </div>
      <div className="home-right">
        <h1 className="right-title"> Title-title</h1>
        <p>
          loreLorem ipsum dolor sit amet consectetur adipisicing elit. Error
          perspiciatis quidem, labore non in voluptatem reiciendis doloribus
          commodi esse ratione quae nemo veritatis et quam! Aliquid assumenda
          asperiores quasi eveniet.
        </p>
      </div>
      <div className="clear"></div>
      <Slick />
    </div>
  );
}

export default Home;
