import React from 'react';
import PropTypes from 'prop-types';
import { GbCardLabel } from "./gbCardLabel";

export const GBCard11 = ({ backgroundImg, title, source, time, category }) => {
    return (
        <div className='gb-card-11' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className='card-11-content'>
                <h1 className='card-title gb-title-large gb-text-white'>{title}</h1>
                <GbCardLabel
                    txtColor='gb-text-white'
                    iconColor='gb-icon-white-opacity-50'
                    source={source}
                    time={time}
                    category={category}
                />
            </div>
        </div>
    );
};

GBCard11.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
};