import "../styles/perfect_bean.css";

const PerfectBean = (props) => {
  return (
    <div className="perfect_bean_container">
      <div className="perfect_bean_title">
        <h1>Find your perfect beans</h1>
      </div>
      <div className="perfect_bean_details">
        <div>
          <img
            src="https://picsum.photos/200/300"
            alt="Left "
            srcset=""
            className="left_image"
          ></img>
        </div>
        <div className="perfect_bean_texts">
          <div className="left">
            <h1>{props.perfect_bean.leftTitle}</h1>
            <div>
              <p>{props.perfect_bean.leftDescription}</p>
            </div>
          </div>

          <div className="or_text">
            <h1>OR</h1>
          </div>

          <div className="right">
            <h1>{props.perfect_bean.rightTitle}</h1>

            <div>
              <p>{props.perfect_bean.rightDescription}</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://picsum.photos/200/300"
            alt="Right "
            srcset=""
            className="right_image"
          ></img>
        </div>
      </div>
      <div className="quiz_btn_container">
        <a href="https://www.beanz.com/us/en/questionnaire.html" className="qb">
          Take Our Quiz
        </a>
      </div>
    </div>
  );
};

export default PerfectBean;
