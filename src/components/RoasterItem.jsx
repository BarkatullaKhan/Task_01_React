import "../styles/roasters.css";

const RoasterItem = (props) => {
    return ( 
        <>
        

          
        <a
          href={props.roasters.roasterItems[props.item].pageLink}
          className="roasterContent"
        >
          <img
            // src={props.roasters.roasterItems[props.item].roasterImg}
            src={props.roasters.roasterItems[props.item].roasterImg}
            alt="none"
            srcset=""
            className="roasterImg"
          />

          <p>{props.roasters.roasterItems[props.item].title}</p>
          <p>{props.roasters.roasterItems[props.item].description}</p>
        </a>
      </>
     );
}
 
export default RoasterItem;