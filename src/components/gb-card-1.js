import React from 'react';
import PropTypes from 'prop-types';
import { CardOneLi } from './gb-card-1-subcard';
import '../style/gb-style.css';

export const CardOne = ({ card }) => {

  return (
    <div className="gb-card-one-wrapper">
      <ul className="gb-card-one">
        {
          card.map((cardlist) => (
            <CardOneLi
              follower={cardlist.follower}
              category={cardlist.category}
              background={cardlist.background}
            />
          ))
        }
      </ul>
    </div>

  );
};

CardOne.propTypes = {
  card: PropTypes.arrayOf(PropTypes.array).isRequired
}