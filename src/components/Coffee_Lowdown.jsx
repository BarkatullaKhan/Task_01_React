/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import '../styles/cofee_lockdown.css'

const CoffeeLowdown = (props) => {
  const navigate = useNavigate();
  return (
    <div className="cofee_lockdown">
      <div className="title ">
        <h1 className='bold-title'>{props.coffee_lowdown.title}</h1>
      </div>
      <div className='row'>
        <img
        //   src="${cofeeLockdownModel.cofeeImage}"
          src={process.env.REACT_APP_HOST+":"+process.env.REACT_APP_PORT+props.coffee_lowdown.cofeeImage}
          alt="pic"
          srcSet=""
          className="cofee_img col-10 m-auto"
        ></img>
      </div>
      <div className="details_text">
        <div className="left_details">
        
          <h2 className='bold-title'>{props.coffee_lowdown.leftTitle}</h2>
          <div>
            
            <p>{props.coffee_lowdown.leftDescription}</p>
          </div>
        </div>
        <div className="right_details">
         
          <h2 className='bold-title'>{props.coffee_lowdown.rightTitle}</h2>
          <div>
            
            <p>{props.coffee_lowdown.rightDescription}</p>
          </div>
        </div>
      </div>
      <div className="quiz_btn_container">
        <a onClick={()=>navigate(props.coffee_lowdown.coffeeLockBtnLink)} className="qb">
        {props.coffee_lowdown.coffeeLockBtnText}
        </a>
      </div>
    </div>
  );
};

export default CoffeeLowdown;
