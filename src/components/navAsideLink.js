import React from 'react';
import PropTypes from 'prop-types';

export const NavAsideLink = ({children , icon}) => (
    <li className="nav-aside-top-list-item">
        <a className="nav-aside-link gb-text-white" href="#">
        {icon}
        <h5 className="gb-text-uppercase gb-text-white gb-title-tiny">{children}</h5>
        </a>
    </li>
)

NavAsideLink.propTypes = {
    children : PropTypes.string.isRequired,
    icon : PropTypes.object.isRequired
}
