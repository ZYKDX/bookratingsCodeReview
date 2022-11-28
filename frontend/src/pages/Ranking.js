import React, { useState, useEffect } from "react";
import Gallery from "../components/Gallery/Gallery.jsx";
import Pin from "../components/Pin/Pin.js";
import { getAllBooks } from "../services/pin.service.js";
import BasePage from "./BasePage.js";

function Ranking() {
  const [deviceWidth, setDeviceWidth] = useState(window.screen.width);
  const [books, setBookList] = useState([]);

  window.document.title = "Book Ranking";

  useEffect(() => {
    window.addEventListener("resize", setDevice);

    function setDevice() {
      setDeviceWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    getAllBooks(setBookList);
  }, []);

  function setPinDimension(width = 200, height) {
    let pinWidth = 250;
    if (deviceWidth <= 650) pinWidth = deviceWidth / 2 - 16;
    let pinWidthPerc = (pinWidth * 100) / width;
    let pinHeight = (height * pinWidthPerc) / 100;
    pinWidth = pinWidth + "px";
    pinHeight = pinHeight + "px";
    return [pinWidth, pinHeight];
  }

  const allPins = books.map((pin) => {
    const [pinWidth, pinHeight] = setPinDimension(pin.width, pin.height);

    return <Pin pin={pin} width={pinWidth} height={pinHeight} />;
  });

  return (
    <BasePage>
      <div className="grid justify-center">
        <h1> Here is recent book ranking.</h1>
        <Gallery allPins={allPins}></Gallery>
      </div>
    </BasePage>
  );
}

Ranking.propTypes = {};

export default Ranking;
