import { useState, useEffect } from "react";
import DemoReactServices from "../utility-services/DemoReactServices";
import Banner from "./Banner";
import CoffeeCards from "./CoffeeCards";
import ErrorComponent from "./ErrorComponent";
import Footer from "./Footer";
import NavBar from "./NavBar";

const ShopCoffeePage = () => {
  const [coffeeCardsArray, setCoffeeCardsArray] = useState([]);
  const [shopCoffeeData, setShopCoffeeData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    DemoReactServices.fetchPageData(
      process.env.REACT_APP_HOST,
      process.env.REACT_APP_PORT,
      process.env.REACT_APP_SHOP_COFFEE_PAGE_API
    )
      .then((data) => {
        setCoffeeCardsArray(Object.values(data.coffee_card.coffeeItems));
        setShopCoffeeData(data);
      })
      .catch((error) => {
        setErrorMsg(error.toString());
      });
  }, []);

  return (
    <>
      <NavBar />
      {shopCoffeeData !== null ? <Banner banner={shopCoffeeData.banner} /> : ""}
      {coffeeCardsArray.length !== 0 ? (
        <div>
          <div className="d-flex  justify-content-center py-5">
            <h1>{coffeeCardsArray.length} - </h1>
            <h1> {coffeeCardsArray.length > 1 ? "Coffees" : "Coffee"}</h1>
          </div>
          <div className="d-flex row justify-content-center">
            {coffeeCardsArray.map((cards) => {
              return <CoffeeCards coffeeCard={cards} />;
            })}
          </div>
        </div>
      ) : (
        <div>
          <ErrorComponent errorMsg={errorMsg} />
        </div>
      )}

      <Footer />
    </>
  );
};

export default ShopCoffeePage;
