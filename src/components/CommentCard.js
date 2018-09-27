import React from 'react';
import PropTypes from 'prop-types';
import {ClockSVG} from '../svgs/ClockSVG';
import {HeartSVG} from '../svgs/HearthSVG';

export const CommentCard = ({ authorName, date, time, numHearts, content }) => {
    return (
        <div className='gb-comment-card'>
            <div className='user-avatar-wrapper'>
                <a href='#' className='gb-avatar gb-avatar-large user-avatar'/>
            </div>
            <div className='comment-content-wrapper'>
                <div className='top-content'>
                    <a href='#' className='author-name gb-title-tiny gb-text-black'><b>{authorName}</b></a>
                    <div className="gb-card-label comment-label">
                        <div className="card-label-item">
                            <ClockSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                            <p className="gb-text-black-black-opacity-50-over-tablet gb-label gb-text-bold-over-phone gb-label">{date}, <span className='gb-text-black-opacity-50'>{time}</span></p>
                        </div>
                        <div className="card-label-item">
                            <HeartSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                            <a className="gb-text-black-black-opacity-50-over-tablet gb-label gb-text-bold-over-phone gb-label">{numHearts}</a>
                        </div>
                    </div>
                </div>
                <div className='bottom-content'>
                    <p className='gb-text-black gb-paragraph-small'>{content}</p>
                </div>
            </div>
        </div>
    );
};

CommentCard.propTypes = {
    authorName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    numHearts: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
};