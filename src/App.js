import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ShopCoffeePage from "./components/ShopCoffeePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import RoastersPage from "./components/RoastersPage";
import DemoReactServices from "./utility-services/DemoReactServices";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [response, setResponse] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    DemoReactServices.fetchPageData(
      process.env.REACT_APP_HOST,
      process.env.REACT_APP_PORT,
      process.env.REACT_APP_HOME_PAGE_PATH
    )
      .then((jsonVal) => {
        setResponse(jsonVal);
      })
      .catch((error) => {
        setErrorMsg(error.toString());
      });
  }, []);

  return response != null ? (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <NavBar />
                <Home response={response} />
                <Footer />
              </Fragment>
            }
          />
          <Route exact path="/shop-coffee" element={<ShopCoffeePage />} />
          <Route path="/" element={<Footer />} />
          <Route
            path="/our-roasters"
            element={<RoastersPage roasters={response.roasters} />}
          />
        </Routes>
      </Router>
    </>
  ) : (
    <>
      <div>
        {/* <h1 className="text-center"> 404 -Page not found</h1>
        <h3 className="text-center ">Message: {errorMsg}</h3> */}
        <ErrorComponent errorMsg={errorMsg} />
      </div>
    </>
  );
}

export default App;
