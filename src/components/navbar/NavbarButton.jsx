// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarButton = (props) => {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
    >
      {props.active && (
        <Link to={props.url}>
          <div className=" py-2 px-3 font-Philosopher text-secondary hover:text-primary text-xl font-bold hover:bg-ternary bg-primary transition-colors duration-300">
            {props.button}
          </div>
        </Link>
      )}
      {!props.active && (
        <Link to={props.url}>
          <div className=" py-2 px-3 font-Philosopher text-primary hover:text-primary text-xl font-bold hover:bg-ternary transition-colors duration-300">
            {props.button}
          </div>
        </Link>
      )}
    </motion.div>
  );
};

NavbarButton.propTypes = {
  button: PropTypes.string,
  url: PropTypes.string,
  active: PropTypes.bool,
};

export default NavbarButton;
