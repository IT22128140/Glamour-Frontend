import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner.jsx";
import RadioButton from "../../components/RadioButton.jsx";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer";
import CardView from "../../components/CardView";
import { useLocation } from "react-router-dom";
import { mensTops, mensBottoms } from "../../utils/arrays.js";
import { womensTops, womensBottoms } from "../../utils/arrays.js";

const Catalogue = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [personalized, setPersonalized] = useState([]);
  const [userID, setuserID] = useState("");
  const [boolean, setBoolean] = useState(false);

  const location = useLocation();
  const recievedData = location.state;

  function filterItems(e) {
    const inputValue = e.target.value.toLowerCase();
    const filteredData = items.filter((opt) =>
      opt.category.toLowerCase().includes(inputValue)
    );
    setFilteredData(filteredData);
  }

  function filterPersonalizedItems(e) {
    const inputValue = JSON.parse(e.target.value);
    if (inputValue[2].toLowerCase() == "male") {
      const filteredTops = items.filter((opt) =>
        mensTops.includes(opt.category.toLowerCase("mensshirt", "menstshirt", "menshoodies" ))
      );
      const filteredwithSizeTops = filteredTops.filter(
        (opt) => opt.sizes.includes(inputValue[0])
      );
      const filteredBottoms = items.filter((opt) =>
        mensBottoms.includes(opt.category.toLowerCase("menstrousers", "mensdenims", "mensshorts" ))
      );
      const filteredwithSizeBottoms = filteredBottoms.filter(
        (opt) => opt.sizes.includes(inputValue[1])
      );
      const filteredData = filteredwithSizeTops.concat(filteredwithSizeBottoms);
      setFilteredData(filteredData);
    } else if (inputValue[2].toLowerCase() == "female") {
      const filteredTops = items.filter((opt) =>
        womensTops.includes(opt.category.toLowerCase( "womenssets", "womensdresses", "womenstops" ))
      );
      const filteredwithSizeTops = filteredTops.filter(
        (opt) => opt.sizes.includes(inputValue[0])
      );
      const filteredBottoms = items.filter((opt) =>
        womensBottoms.includes(opt.category.toLowerCase( "womenstrousers", "womensdenims", "womenskirts" ))
      );
      const filteredwithSizeBottoms = filteredBottoms.filter(
        (opt) => opt.sizes.includes(inputValue[1])
      );
      const filteredData = filteredwithSizeTops.concat(filteredwithSizeBottoms);
      setFilteredData(filteredData);
    }
  }



  useEffect(() => {
    setLoading(true);
    axios
    .get("http://localhost:3000/cusItems")
    .then((response) => {
      setLoading(false);
      setItems(response.data);
      if (recievedData) {
        const filteredData = response.data.filter((opt) =>
          opt.category.toLowerCase().includes(recievedData.toLowerCase())
        );
        setFilteredData(filteredData);
      } else {
        setFilteredData(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
    const token = localStorage.getItem("token");
    if (token !== null) {
      axios
      .post("http://localhost:3000/login/auth", { token: token })
      .then((response) => {
        setuserID(response.data.userID);
        axios
        .get(`http://localhost:3000/measurements/user/${response.data.userID}`)
        .then((response) => {
          setPersonalized(response.data);
          if (response.data.Hip > 0 ){
            setBoolean(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [userID, recievedData]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/cusItems")
  //     .then((response) => {
  //       setLoading(false);
  //       setItems(response.data);
  //       if (recievedData) {
  //         const filteredData = response.data.filter((opt) =>
  //           opt.category.toLowerCase().includes(recievedData.toLowerCase())
  //         );
  //         setFilteredData(filteredData);
  //       } else {
  //         setFilteredData(response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, [recievedData]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <CustomerNavbar />
      <div className="flex flex-row pt-8 pl-8">
        <div className=" bg-secondary w-1*4 p-5 rounded-lg shadow-lg  h-fit">
          <h1 className=" font-Aboreto text-primary font-bold text-2xl">
            CATEGORIES
          </h1>
          <div>
              {boolean && (
                <>
                  <h2 className=" font-Philosopher text-primary text-2xl my-3">
                    Personalized
                  </h2>
                  <RadioButton
                    key={personalized._id}
                    name="check"
                    value={JSON.stringify([
                      personalized.TopSize,
                      personalized.PantSize,
                      personalized.Gender,
                      personalized._id,
                    ])}
                    label={personalized.UniqueName}
                    onChange={(e) => filterPersonalizedItems(e)}
                  />
                </>
              )}
          </div>
          {/* Mens */}
          <div>
            <h2 className=" font-Philosopher text-primary text-2xl my-3">
              Mens
            </h2>
            <RadioButton
              name="check"
              value="mensshirt"
              label="Shirts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="menstshirt"
              label="T-Shirts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="menstrousers"
              label="Trousers"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="mensdenims"
              label="Denims"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="mensshorts"
              label="Shorts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="menshoodies"
              label="Hoodies"
              onChange={(e) => filterItems(e)}
            />
          </div>
          {/* Womens */}
          <div>
            <h2 className=" font-Philosopher text-primary text-2xl my-3">
              Women
            </h2>
            <RadioButton
              name="check"
              value="womenssets"
              label="Sets"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womensdresses"
              label="Dresses"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womenstops"
              label="Tops"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womenskirts"
              label="Skirts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womenstrousers"
              label="Trousers"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womensdenims"
              label="Denims"
              onChange={(e) => filterItems(e)}
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap ml-10 h-fit">
          {filteredData.map((item) => (
            <CardView
              key={item._id}
              id={item._id}
              heading={item.name}
              stock={item.stock}
              image={item.image}
              price={item.minprice}
            />
          ))}
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Catalogue;
