import React from 'react';
import PropTypes from 'prop-types';
import '../style/gb-style.css';

export const CardOneLi = ({ follower, category, background }) => {

  return (

    <li className="gb-card-one-image" style={{ backgroundImage: `url(${background})` }}>
      <div className="gb-card-one-info">
        <p className="gb-phone-title-tiny gb-title-large">{category}</p>
        <div className="gb-card-one-btn-wrapper">
          <input className="gb-btn gb-btn-small gb-btn-white" value="following" type="button" /> </div>

      </div>

      <div className="gb-card-one-avatars-wrapper">
        <div className="gb-title-small">
          <p> followers</p>
        </div>
        <div className="gb-card-one-follower-avatar">
          <div className="gb-card-one-avatars-container">
            {
              follower.map((item, index) => (
                <img src={item.url} alt={item.alt} key={index} className="gb-avatar gb-avatar-small" />
              ))
            }
          </div>
        </div>
      </div>
    </li>
  );
}

CardOneLi.propTypes = {
  follower: PropTypes.arrayOf(PropTypes.array).isRequired,
  category: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
}