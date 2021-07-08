import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  return (
    <div className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <figure className="cards-item-pic-wrap" data-category={props.label}>
            <img
              className="cards-item-img"
              alt="travel"
              src={props.src}
            />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </Link>
      </div>
  );
};

export default CardItem;
