import '../styles/cofee_lockdown.css'

const CofeeLockdown = (props) => {
  return (
    <div class="cofee_lockdown">
      <div class="title">
        <h1>Coffee Lowdown</h1>
      </div>
      <div>
        <img
        //   src="${cofeeLockdownModel.cofeeImage}"
          src="https://picsum.photos/1080/300"
          alt="pic"
          srcset=""
          class="cofee_img"
        ></img>
      </div>
      <div class="details_text">
        <div class="left_details">
        
          <h2>{props.cofee_lockdown.leftTitle}</h2>
          <div>
            
            <p>{props.cofee_lockdown.leftDescription}</p>
          </div>
        </div>
        <div class="right_details">
         
          <h2>{props.cofee_lockdown.rightTitle}</h2>
          <div>
            
            <p>{props.cofee_lockdown.rightDescription}</p>
          </div>
        </div>
      </div>
      <div class="quiz_btn_container">
        <a href="https://www.beanz.com/us/en/questionnaire.html" class="qb">
          Learn more about coffee
        </a>
      </div>
    </div>
  );
};

export default CofeeLockdown;
