// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardView = (props) => {
  return (
    <Link
      to={`/ProductPage/${props.id}`}
      className="flex flex-col justify-around w-fit mr-10 h-fit p-5 rounded-[10px] mb-10 items-center hover:bg-slate-100"
    >
      <img src={props.image} className="h-96 w-80 rounded-lg" />
      <h1 className="text-2xl font-Philosopher text-primary">
        {props.heading}
      </h1>
      <p className="font-BreeSerif text-primary w-80"></p>
      <p className="font-BreeSerif text-primary">Rs.{props.price}.00</p>
      {props.stock === 0 && (
              <p className="text-red-500 font-bold">Out of stock</p>
            )}
    </Link>
  );
};

CardView.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  heading: PropTypes.string,
  stock: PropTypes.number,
  price: PropTypes.number,
};

export default CardView;
