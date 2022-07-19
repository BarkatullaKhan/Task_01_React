import '../styles/cofee_lockdown.css'

const CofeeLockdown = (props) => {
  return (
    <div className="cofee_lockdown">
      <div className="title">
        <h1>Coffee Lowdown</h1>
      </div>
      <div>
        <img
        //   src="${cofeeLockdownModel.cofeeImage}"
          src="https://breville.scene7.com/is/image/brevilleprod/coffee-101?ts=1654878496095&dpr=off"
          alt="pic"
          srcSet=""
          className="cofee_img"
        ></img>
      </div>
      <div className="details_text">
        <div className="left_details">
        
          <h2>{props.cofee_lockdown.leftTitle}</h2>
          <div>
            
            <p>{props.cofee_lockdown.leftDescription}</p>
          </div>
        </div>
        <div className="right_details">
         
          <h2>{props.cofee_lockdown.rightTitle}</h2>
          <div>
            
            <p>{props.cofee_lockdown.rightDescription}</p>
          </div>
        </div>
      </div>
      <div className="quiz_btn_container">
        <a href="https://www.beanz.com/us/en/questionnaire.html" className="qb">
          Learn more about coffee
        </a>
      </div>
    </div>
  );
};

export default CofeeLockdown;
