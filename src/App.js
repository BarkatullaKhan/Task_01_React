
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";



function App() {
 

const [response,setResponse]=useState(null);

  useEffect(() => {
    fetch("http://localhost:4503/aemApp/bin/api/content/v5?page=home", {

    })
      .then(response1 => response1.json())
      .then(json => setResponse(json))
  }, []);

  return (
    response!=null?<><div className="container-fluid p-0">
    {/* <h1> ggggg : </h1> */}
    <NavBar/>
     <Home response={response}/>
     <Footer />
   </div></>:<>Server side error</>
    
   
    
  );
}

export default App;
