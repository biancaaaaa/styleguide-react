import React from 'react';
import PropTypes from 'prop-types';
import { ClockSVG } from '../svgs/ClockSVG';
import { SourceSVG } from '../svgs/SourceSVG';
import '../style/gb-style.css';

export const CardFourList = ({ heading, source, date, image }) => {

  return (

    <li className='gb-card-four-sub-card'>
      <div className='gb-card-four-sub-card-info'>
        <h2 className='gb-title-medium'>{heading}</h2>
        <ul className='posted-info'>
          <li className='posted-by'>
            <SourceSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small" />
            <a className='gb-text-black' href='www.globuzzer.com'>{source}</a>
          </li>
          <li className='posted-at'>
            <ClockSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small" />
            <p>{date}</p>
          </li>
        </ul>
      </div>
      <div className='gb-card-four-sub-card-image'>
        <img src={image} alt='story-one' />
      </div>
    </li>
  );

}

CardFourList.propTypes = {
  heading: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}