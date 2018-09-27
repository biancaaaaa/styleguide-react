import React from 'react';
import PropTypes from 'prop-types';
import { CardFiveList } from './gb-card-5-subcard';
import '../style/gb-style.css';

export const CardFive = ({ data }) => {
  return (

    <div className="gb-card-five-wrapper">
      <ul className="gb-card-five-cards">
        {
          data.map((cardlist) => (
            <CardFiveList
              title={cardlist.title}
              time={cardlist.time}
              topic={cardlist.topic}
              url={cardlist.url}
            />
          ))
        }
      </ul>
    </div>

  );
};

CardFive.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
}