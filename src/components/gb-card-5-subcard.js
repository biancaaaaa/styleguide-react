import React from 'react';
import PropTypes from 'prop-types';
import { BookMarksSVG } from '../svgs/BookMarksSVG';
import '../style/gb-style.css';

export const CardFiveList = ({ title, time, topic, url }) => {

  return (

    <li className="gb-card-five-card">
      <div className="gb-card-five-card-icon">
        <BookMarksSVG classes="gb-card-five-card-bookmark-icon" />
      </div>
      <div className="gb-card-five-card-content">
        <div className="gb-card-five-card-title-time">
          <h3 className="gb-title-tiny gb-text-red gb-text-capitalize">{title}</h3>
          <p className="gb-subtitle-small gb-text-dark-blue">{time}</p>
        </div>
        <div className="article-title">
          <h4 className="gb-title-medium">{topic}</h4>
        </div>
      </div>
      <div className="gb-card-five-wrapper-article-image">
        <img src={url} alt="article" />
      </div>
    </li>

  );

}

CardFiveList.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}