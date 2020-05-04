import React from 'react';
import PropTypes from 'prop-types';
import './Tweet.scss';

const Tweet = ({ username, text, image }) => (
  <li className="item">
    <div className="item__image">
      <img className="item__img" src={image} alt={username} />
    </div>
    <div className="item__body">
      <span className="item__username">{username}</span>
      <span className="item__text">{text}</span>
    </div>
  </li>
);

Tweet.defaultProps = {
  username: '',
  text: '',
  image: '',
};

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Tweet;
