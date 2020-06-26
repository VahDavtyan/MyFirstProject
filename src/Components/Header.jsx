import React from "react";
import "../App.css";
import SimpleSlide from "./SimpleSlide";
import CardsMain from './Cards/CardsMain';

function Header() {
  return (
    <div>
      <SimpleSlide />
      <CardsMain/>
    </div>
  );
}

export default Header;
