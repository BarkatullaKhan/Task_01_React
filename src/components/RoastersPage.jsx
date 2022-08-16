import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import RoasterItem from "./RoasterItem";
import Form from "react-bootstrap/Form";

const RoastersPage = (props) => {
  const [roasters, setRoasters] = useState([]);
  const [itemsArray, setItemsArray] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  let newItemsArray = [];

  useEffect(() => {
    setRoasters(Object.values(props.roasters.roasterItems));

    if (searchVal === "") {
      setItemsArray(Object.keys(props.roasters.roasterItems));
    }
  }, []);

  const handleSearch = (e) => {
    newItemsArray = [];
    setSearchVal(e.target.value);
    if (e.target.value === "") {
      setItemsArray(Object.keys(props.roasters.roasterItems));
    } else {
      roasters.map((roaster, i) => {
        if (
          roaster.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          roaster.description
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          newItemsArray.push("item" + i);
        }
      });

      setItemsArray(newItemsArray);
    }
  };
  // console.log(roasters);
  return (
    <>
      <NavBar />
      <Form className=" w-50 mx-auto my-5">
        <Form.Control
          type="text"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchVal}
          onChange={handleSearch}
        />
      </Form>
      <div className=" container-fluid my-4 mx-auto p-4 row">
        {itemsArray.length === 0 ? (
          <h3 className="text-center">No result..</h3>
        ) : (
          itemsArray.map((itemm) => {
            return <RoasterItem item={itemm} roasters={props.roasters} />;
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default RoastersPage;
