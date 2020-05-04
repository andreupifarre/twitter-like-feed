import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../Tweet/Tweet';
import './List.scss';

const List = ({ tweets }) => (
  <div className="list">
    <ul className="list__list">
      {tweets.length <= 0 && <span className="list__loading">Loading...</span>}
      {tweets.map((tweet, i) => (
        <Tweet
          key={i}
          username={tweet.username}
          text={tweet.text}
          image={tweet.image}
        />
      ))}
    </ul>
  </div>
);

List.defaultProps = {
  tweets: [],
};

List.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default List;
