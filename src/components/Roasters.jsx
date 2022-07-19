import "../styles/roasters.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import RoasterItem from "./RoasterItem";

const Roasters = (props) => {
  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    let newItemsArray = [];
    let rosterArray = [];

    // rosterArray = [[item0,item1,item2,item3],[item4,item5,...],[]];

    for (let i = 0; i < Object.keys(props.roasters.roasterItems).length; i++) {
      if (i === 0) {
        newItemsArray.push("item" + i);
      } else if (
        i % 4 !== 0 &&
        i !== Object.keys(props.roasters.roasterItems).length - 1
      ) {
        newItemsArray.push("item" + i);
      } else if (
        i % 4 !== 0 &&
        i === Object.keys(props.roasters.roasterItems).length - 1
      ) {
        newItemsArray.push("item" + i);
        rosterArray.push(newItemsArray);
      } else {
        rosterArray.push(newItemsArray);
        newItemsArray = [];
        newItemsArray.push("item" + i);
      }
    }
    setItemsArray(rosterArray);
    console.log(itemsArray);
  }, []);

  return itemsArray.length !== 0 ? (
    <>
    <h1 className="text-center py-2">Meet Our Roaster</h1>
      <Carousel style={{ color: "black" }}>
        {/* {alert(Object.keys(props.roasters.roasterItems).length)} */}

        {itemsArray.map((items) => {
          return (
            <Carousel.Item className="roaster ">
              <div className="roaster ">
                {items.map((item) => {
                  return <RoasterItem item={item} roasters={props.roasters} />;
                })}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  ) : (
    <>
      <h2>none</h2>
    </>
  );
};

export default Roasters;
