import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner.jsx";
import Navbar from "../../components/navbar/CustomerNavbar.jsx";
import Input from "../../components/form/Input.jsx";
import InputNoLable from "../../components/form/InputNoLable.jsx";
import { validation, numberValidation } from "../../utils/inputValidations.js";
import Footer from "../../components/footer/Footer.jsx";
import { enqueueSnackbar } from "notistack";
import ReviewCard from "../../components/ReviewCard.jsx";
// import { FaRegStar } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";
import AddButton from "../../components/button/AddButton.jsx";
// import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";

const ProductPage = () => {
  // const token = sessionStorage.getItem("token");

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [reviewComment, setReviewComment] = useState("");
  const [rate, setRate] = useState(0);

  const [rateError, setRateError] = useState("");
  const [reviewCommentError, setReviewCommentError] = useState("");

  function validateRate(rate) {
    let isValid = true;
    if (rate < 1 || rate > 10) {
      setRateError("Rating should be between 1 and 10");
      isValid = false;
    }
    if (rate === "") {
      setRateError("Rate is required");
      isValid = false;
    }
    return isValid;
  }

  function validateReviewComment(reviewComment) {
    let isValid = true;
    if (reviewComment === "") {
      setReviewCommentError("Please enter a review");
      isValid = false;
    } else {
      setReviewCommentError("");
    }
    return isValid;
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/cusItems/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  // console.log(product);

  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    // if (!token) {
    //   window.location = "/LoginCus";
    // }
    const cart = {
      // _id: product._id,
      product: product._id,
      quantity: data.amount,
      size: data.size,
      color: data.color,
    };
    setLoading(true);
    axios
      // .post(`http://localhost:3000/cart/${token}`, cart)
      .post(`http://localhost:3000/cart/12345`, cart)
      .then((response) => {
        console.log(response);
        setLoading(false);
        enqueueSnackbar("Added to cart", { variant: "success" });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        enqueueSnackbar("Error adding to cart", { variant: "error" });
      });
  });

  const AddReview = () => {
    event.preventDefault();

    const isValidRate = validateRate(rate);
    const isValidReviewComment = validateReviewComment(reviewComment);

    if (isValidRate && isValidReviewComment) {
      const review = {
        userId: "1234",
        userName: "Sandithi",
        rating: rate,
        reviewComment: reviewComment,
      };
      setLoading(true);
      axios
        .post(`http://localhost:3000/reviews/${id}`, review)
        .then((response) => {
          console.log(response);
          setLoading(false);
          setRate(0);
          setReviewComment("");
          window.location.reload(true);
          enqueueSnackbar("Review Added", { variant: "success" });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          enqueueSnackbar("Error adding review", { variant: "error" });
        });
    }
  };

  // const ProgressBar = ({ value }) => {
  //   return (
  //     <div className="w-72 h-3 bg-gray-200 rounded-full overflow-hidden my-3 mx-2">
  //       <div
  //         className="h-full bg-primary rounded-full"
  //         style={{ width: `${value * 100}%` }}
  //       ></div>
  //     </div>
  //   );
  // };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-evenly mt-[4%] mb-[6%]">
        <img
          src={product.image}
          className="rounded-l-[10px] px-16 w-1/2"
        />
        <div className="flex flex-col w-1/2">
          <h1 className=" pb-[2%] text-6xl font-Aboreto text-primary">
            {product.name}
          </h1>
          <p className="mb-[2%] font-BreeSerif text-primary">
            {product.description}
          </p>
          <p className="mb-[2%] mt-8 text-xl font-BreeSerif text-primary">
            Rs.{product.minprice}.00
          </p>
          <FormProvider {...methods}>
            <form onSubmit={(e) => e.preventDefault} noValidate>
              <div className="flex w-1/2 mt-[10%]">
                <div className="w-1/2">
                  <Input
                    formtype="input"
                    label="Amount"
                    min="1"
                    type="number"
                    id="amount"
                    name="amount"
                    {...numberValidation}
                  />
                </div>
              </div>
              <h1 className=" font-Philosopher text-primary text-3xl mt-[10%] ">
                Select Size
              </h1>
              <div className="flex flex-row my-5 border-t-2 border-l-2 border-b-2 border-ternary align-middle w-fit">
                {product.sizes.map((size, index) => (
                  <div
                    key={index}
                    className="flex flex-row border-r-2 cursor-pointer border-ternary  shadow-xl "
                  >
                    <InputNoLable
                      formtype="input"
                      key={size.id}
                      type="radio"
                      id={size}
                      name="size"
                      value={size}
                      className="hidden peer"
                      {...validation}
                    />
                    <label
                      key={size.id}
                      htmlFor={size}
                      className="cursor-pointer font-BreeSerif text-black p-2 text-center w-20 h-10 peer-checked:bg-primary peer-checked:text-white"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
              {product.colors.length > 0 && (
                <>
                  <h1 className=" font-Philosopher text-primary text-3xl ">
                    Choose Color
                  </h1>
                  <div className="flex flex-row my-5 border-t-2 border-l-2 border-b-2 border-ternary align-middle  w-fit">
                    {product.colors.map((colors, index) => (
                      <div
                        key={index}
                        className="flex flex-row border-r-2 cursor-pointer border-ternary  shadow-xl"
                      >
                        <InputNoLable
                          formtype="input"
                          key={colors.id}
                          type="radio"
                          id={colors}
                          name="color"
                          value={colors}
                          className="hidden peer"
                          {...validation}
                        />
                        <label
                          key={colors.id}
                          htmlFor={colors}
                          className="cursor-pointer font-BreeSerif text-black p-2 text-center w-20 h-10 peer-checked:bg-primary peer-checked:text-white"
                        >
                          {colors}
                        </label>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <button
                onClick={onSubmit}
                className="bg-ternary text-black font-BreeSerif w-1/2 text-xl  p-4 rounded-[10px] shadow-xl"
              >
                Add to Cart
              </button>
            </form>
          </FormProvider>
        </div>
      </div>

      <div className="flex flex-col items-center mb-[6%] w-full ">
        <h1 className="text-[35px] font-Philosopher text-primary">Reviews</h1>
        <div className="flex flex-row justify-evenly w-fit bg-secondary p-4">
          {/* <div className="text-[20px] font-BreeSerif text-primary mx-10">
            Overall Rating
            <br />
            0.0
            <div className="flex flex-col">
              <div className="flex flex-row text-[20px]">
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <ProgressBar value={0.5} />
              </div>
              <div className="flex flex-row">
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <ProgressBar value={0.75} />
              </div>
              <div className="flex flex-row">
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <ProgressBar value={0.42} />
              </div>
              <div className="flex flex-row">
                <FaStar className="mt-2 text-yellow-500" />
                <FaStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <ProgressBar value={0.2} />
              </div>
              <div className="flex flex-row">
                <FaStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <ProgressBar value={0.5} />
              </div>
              <div className="flex flex-row">
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <FaRegStar className="mt-2 text-yellow-500" />
                <ProgressBar value={0} />
              </div>
            </div>
          </div> */}
          <div className="text-[20px] font-BreeSerif text-primary mx-10">
            <div className="text-[30px]">Add Your Review</div>
            <form onSubmit={AddReview} noValidate>
              <div className="flex flex-row justify-between w-fit my-4">
                Rating
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <input
                      className="border-2 border-primary rounded-lg p-2 mx-4"
                      type="number"
                      min="1"
                      max="10"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                    />
                    / 10
                  </div>
                  <AnimatePresence mode="wait" initial={false}>
                    {rateError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {rateError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex flex-row justify-between w-fit my-4">
                Review
                <div className="flex flex-col">
                  <textarea
                    className="border-2 border-primary rounded-lg p-2 ml-3"
                    placeholder="Enter your review here"
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                  />
                  <AnimatePresence mode="wait" initial={false}>
                    {reviewCommentError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {reviewCommentError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <AddButton onClick={AddReview} />
            </form>
          </div>
        </div>
      </div>

      <div className="mx-16">
        <ReviewCard reviews={product.reviews} id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
