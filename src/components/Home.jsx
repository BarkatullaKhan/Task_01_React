import React, { useEffect, useState } from "react";
import DemoReactServices from "../utility-services/DemoReactServices";
import Banner from "./Banner";
import CoffeeLowdown from "./Coffee_Lowdown";
import ErrorComponent from "./ErrorComponent";
import PerfectBean from "./Perfect_Bean";
import Roasters from "./Roasters";
import Teaser from "./Teaser";

const Home = (props) => {
  console.log(props.response);

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
        console.log(jsonVal);
      })
      .catch((error) => {
        setErrorMsg(error.toString());
      });
  }, []);
  return response != null ? (
    <div>
      <Banner banner={response.banner} />
      <Teaser
        teaser={response.teaser_new}
        title={props.response.my_title.title}
      />
      <Roasters
        roasters={response.roasters}
        title={props.response.my_title_1.title}
      />
      <PerfectBean perfect_bean={response.perfect_bean} />
      <CoffeeLowdown coffee_lowdown={response.coffee_lowdown} />
      <CoffeeLowdown coffee_lowdown={response.coffee_lowdown_1} />
    </div>
  ) : (
    <div>
      <ErrorComponent errorMsg={errorMsg} />
    </div>
  );
};

export default Home;
