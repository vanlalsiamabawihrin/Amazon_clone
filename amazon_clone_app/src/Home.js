import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./amazon.jpg" alt="" />
        <div className="home__row">
          <Product id="20" title="Iphone 11 pro max" price={900.99} image="iphone11.png" rating={3} />
          <Product id="56" title="Iphone xr " price={1100.99} image="iphone-xr.png" rating={5} />
        </div>
        <div className="home__row">
          <Product id="96" title="Iphone 12 Pro Max" price={1400.78} image="iphone-12-Pro-Max-13.png" rating={4} />
          <Product id="21" title="Iphone se" price={500} image="iphone-se.png" rating={4} />
          <Product id="4" title="Iphone 7 plus" price={799.99} image="iphone 7 plus copy.png" rating={3} />
        </div>
        <div className="home__row">
          <Product id="3" title="Iphone xr " price={1100.99} image="iphone-xr.png" rating={5} />
          <Product id="8" title="Iphone 7 plus" price={799.99} image="iphone 7 plus copy.png" rating={3} />
          <Product id="9" title="Iphone 11 pro max" price={900.99} image="iphone11.png" rating={3} />
          <Product id="12" title="Iphone 12 Pro Max" price={1400.78} image="iphone-12-Pro-Max-13.png" rating={4} />
        </div>
        <div className="home__row view__large">
          <Product id="15" title="Ipad Pro" price={1600.99} image="curved.webp" rating={3} />
        </div>
      </div>
    </div>
  );
}

export default Home;
