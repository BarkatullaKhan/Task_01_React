

import "../styles/coffee_card.css";

const CoffeeCards = (props) => {
 
  return (
    <a
      href={props.coffeeCard.pageLink}
      className="mx-5 my-4 col-sm-12 col-md-4 col-lg-3  coffee-card-a"
    >
      <div className="card coffee_Card">
        <img
          className="card-img-top coffee-card-img"
          src={props.coffeeCard.coffeeImg}
          alt="Card  cap"
        />
        <div className="card-body text-center coffee-card-body">
          <h5 className="card-title coffee-card-roaster-name">
            {props.coffeeCard.roasterName}
          </h5>
          <h3 className="card-title coffee-card-item-name">
            {props.coffeeCard.itemName}
          </h3>
          <p className="card-text coffee-card-description">
            {props.coffeeCard.description}
          </p>
          <h4 className="coffee-card-price">$ {props.coffeeCard.itemPrice}</h4>
        </div>
      </div>
    </a>
  );
};

export default CoffeeCards;
