//import React from 'react'
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import AnimButton from "../button/AnimButton";

const Category = (props) => {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-around items-center w-[750px]"
    >
      <img src={props.image} className="w-full h-[600px] mt-[10%]" />
      <h1 className="font-Aboreto text-5xl m-2 text-primary ">
        {props.heading}
      </h1>
      <Link to={props.link} state={props.state}>
      <AnimButton classname={"bg-ternary w-fit text-primary text-2xl font-Philosopher shadow-xl p-4 rounded-xl"} name={'Shop Now'}/>
      </Link>
    </motion.div>
  );
};

Category.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.string,
  state: PropTypes.string,
};

export default Category;
