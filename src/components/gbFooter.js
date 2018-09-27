import React from "react";
import PropTypes from 'prop-types'
import {TwitterSVG} from '../svgs/TwitterSVG';
import {InstagramSVG} from '../svgs/InstagramSVG';
import {FacebookSVG} from '../svgs/FacebookSVG';

/* links = [{'txt' : 'About us' , 'link' : '#'}] */
export const GbFooter = ({links}) => ( 
  <div className="gb-footer gb-background-black-opacity-5">
    <div className="footer-wrapper">
      <ul className="footer-nav">
        {links.map((el,idx)=>(
          <li key={idx} className="footer-nav-item">
            <a className="gb-text-black-opacity-30 gb-subtitle-medium" href={el.link}>
              <b>{el.txt}</b>
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-social-media-list">
      <li className="footer-social-media-item">
        <a href="#">
          <FacebookSVG classes='gb-icon-fill-black-opacity-30 gb-icon-small'/>
        </a>
      </li>
      <li className="footer-social-media-item">
        <a href="#">
          <InstagramSVG classes='gb-icon-fill-black-opacity-30 gb-icon-small'/>
        </a>
      </li>
      <li className="footer-social-media-item">
        <a href="#">
          <TwitterSVG classes='gb-icon-fill-black-opacity-30 gb-icon-small'/>
        </a>
      </li>
      </ul>
      <div className="footer-rights-reserved">
        <p className="gb-label gb-text-black-opacity-30">
          © 2018 All rights reserved.
        </p>
      </div>
    </div>
  </div>
); 


GbFooter.propTypes = {
  links : PropTypes.arrayOf(PropTypes.object).isRequired
}