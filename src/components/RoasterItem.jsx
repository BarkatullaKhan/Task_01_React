import "../styles/roasters.css";

const RoasterItem = (props) => {
  // console.log(props.item);
  return (
    <>
      <a
        href={props.roasters.roasterItems[props.item].pageLink}
        className="roasterContent col-sm-8 col-md-5 col-lg-2"
      >
        <img
          src={props.roasters.roasterItems[props.item].roasterImg}
          alt="none"
          srcSet=""
          className="roasterImg"
        />

        <p style={{ color: "#A25E41", fontWeight: "bold", marginTop: "10px" }}>
          {props.roasters.roasterItems[props.item].title}
        </p>
        <p className="text-black">
          {props.roasters.roasterItems[props.item].description}
        </p>
      </a>
    </>
  );
};

export default RoasterItem;
