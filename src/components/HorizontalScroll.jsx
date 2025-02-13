//import React from 'react';
import { useRef, useState } from "react";
import CardView from "../components/CardView.jsx";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import PropTypes from "prop-types";

const HorizontalScroll = (props) => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div className="flex flex-row justify-evenly h-fit">
      <button
        className="w-[5%]"
        onClick={() => {
          handleHorizantalScroll(elementRef.current, 25, 100, -10);
        }}
        disabled={arrowDisable}
      >
        <IoIosArrowDropleft className="size-10 text-primary" />
      </button>
      <div className="flex flex-row overflow-hidden w-[90%] h-fit" ref={elementRef}>
        {props.list.map((list) => (
          <CardView
            key={list._id}
            id={list._id}
            heading={list.name}
            stock={list.stock}
            image={list.image}
            price={list.minprice}
          ></CardView>
        ))}
      </div>
      <button
        className="w-[5%]"
        onClick={() => {
          handleHorizantalScroll(elementRef.current, 25, 100, 10);
        }}
      >
        <IoIosArrowDropright className="size-10 text-primary" />
      </button>
    </div>
  );
};

HorizontalScroll.propTypes = {
  list: PropTypes.array,
};

export default HorizontalScroll;
