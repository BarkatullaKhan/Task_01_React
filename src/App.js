import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ShopCoffeePage from "./components/ShopCoffeePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4503/aemApp/bin/api/content/v5?page=home", {})
      .then((response1) => response1.json())
      .then((json) => setResponse(json));
  }, []);

  return response != null ? (
    <Router>
      <div className="container-fluid p-0">
        <NavBar />

        <Switch>
          <Route exact path="/" render={() => <Home response={response} />} />
          <Route exact path="/shop_coffee" render={ShopCoffeePage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  ) : (
    <>Server side error</>
  );
}

export default App;
