import React from 'react';
import PropTypes from 'prop-types';

export const GbSwitcher = ({classes}) => (
    <label className={`gb-switcher ${classes}`}>
        <input className="gb-swithcer-checkbox" type="checkbox" />
        <div className="gb-switcher-slider"></div>
    </label>
)

GbSwitcher.propTypes = {
    classes : PropTypes.string.isRequired
}