import "../styles/teaser.css";
import { useEffect, useState } from "react";

const Teaser = (props) => {
  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    let newItemsArray = [];
    for (let i = 0; i < Object.keys(props.teaser.allTeasers).length; i++) {
      newItemsArray.push("item" + i);
      console.log();
    }
    setItemsArray(newItemsArray);
  }, []);

  return (
    <div className="container-fluid p-2">
      <h1 className="text-center py-2">How It Works</h1>

      <div className="container">
        <div className="row">
          {itemsArray.map((item) => {
            return (
              <div className="col-md-6 col-sm-6 col-xs-12 col-lg-3 " key={item}>
                <div className="card teaser-card  border-0 mt-2 align-items-center justify-content-center " key={item}>
                  <img
                    className="card-img-top p-2 w-50 h-50 "
                    src={props.teaser.allTeasers[item].teaserImage}
                    alt="Card  cap"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {props.teaser.allTeasers[item].teaserTitle}
                    </h5>
                    <p className="card-text">
                      {props.teaser.allTeasers[item].teaserDescription}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Teaser;
