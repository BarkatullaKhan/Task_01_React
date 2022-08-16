/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import "../styles/perfect_bean.css";

const PerfectBean = (props) => {
  const navigate = useNavigate();
  return (
    <div className="perfect_bean_container">
      <div className="perfect_bean_title">
        <h1 className="bold-title m-4">{props.perfect_bean.title}</h1>
      </div>
      <div className="perfect_bean_details row">
        <div className="col-sm-10 col-md-2 col-lg-2">
          <img
            src={
              process.env.REACT_APP_HOST +
              ":" +
              process.env.REACT_APP_PORT +
              props.perfect_bean.leftImage
            }
            alt="Left "
            srcSet=""
            className="left_image "
          ></img>
        </div>
        <div className="perfect_bean_texts col-sm-10 col-md-8 col-lg-8 ">
          <div className="row text-center">
            <div className="left text-center col-sm-12 col-md-5 col-lg-5">
              <h2 className="bold-title">{props.perfect_bean.leftTitle}</h2>
              <div>
                <p>{props.perfect_bean.leftDescription}</p>
              </div>
            </div>

            <div className="or_text text-center col-sm-12 col-md-1 col-lg-1">
              <h1 className="bold-title">OR</h1>
            </div>

            <div className="right text-center col-sm-12 col-md-4 col-lg-5">
              <h2 className="bold-title">{props.perfect_bean.rightTitle}</h2>

              <div>
                <p>{props.perfect_bean.rightDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-10 col-md-2 col-lg-2">
          <img
            src={
              process.env.REACT_APP_HOST +
              ":" +
              process.env.REACT_APP_PORT +
              props.perfect_bean.rightImage
            }
            alt="Right "
            srcSet=""
            className="right_image"
          ></img>
        </div>
      </div>
      <div className="quiz_btn_container">
        <a
          onClick={() => navigate(props.perfect_bean.quizBtnLink)}
          className="qb"
        >
          {props.perfect_bean.quizBtnText}
        </a>
      </div>
    </div>
  );
};

export default PerfectBean;
