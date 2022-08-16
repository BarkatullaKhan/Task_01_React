import "../styles/roasters.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import RoasterItem from "./RoasterItem";

const Roasters = (props) => {
  const [itemsArray, setItemsArray] = useState([]);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    let itemToRender;
    if (screenSize.dynamicWidth < 766) {
      itemToRender = 1;
    } else if (
      screenSize.dynamicWidth >= 766 &&
      screenSize.dynamicWidth < 1067
    ) {
      itemToRender = 4;
    } else {
      itemToRender = 8;
    }

    let newItemsArray = [];
    let rosterArray = [];
    let len = Object.keys(props.roasters.roasterItems).length;

    for (let i = 0; i < len; i++) {
      if (i === 0) {
        newItemsArray.push("item" + i);
      } else if (i % itemToRender !== 0 && i !== len - 1) {
        newItemsArray.push("item" + i);
      } else if (i % itemToRender !== 0 && i === len - 1) {
        newItemsArray.push("item" + i);
        rosterArray.push(newItemsArray);
      } else if (i % itemToRender === 0 && i === len - 1) {
        rosterArray.push(newItemsArray);
        newItemsArray = [];
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

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return itemsArray.length !== 0 ? (
    <>
      <h1 className="text-center py-2 m-4 roaster-title">{props.title}</h1>
      <Carousel style={{ color: "black" }} interval={null}>
        {itemsArray.map((items) => {
          return (
            <Carousel.Item className="roaster ">
              <div className="roaster row m-auto">
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
      <h2>No Roasters Found</h2>
    </>
  );
};

export default Roasters;
