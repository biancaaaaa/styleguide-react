import React from 'react';
import PropTypes from 'prop-types';
import { CardFourList } from './gb-card-4-subcard';
import '../style/gb-style.css';

export const CardFour = ({ data }) => {
  return (

    <div className='component-to-copy gb-card-four-wrapper'>
      <ul className='gb-card-four-sub-cards'>
        {
          data.map((cardlist) => (
            <CardFourList
              heading={cardlist.heading}
              source={cardlist.source}
              date={cardlist.date}
              image={cardlist.image}
            />
          ))
        }
      </ul>
    </div>

  );
};

CardFour.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
}