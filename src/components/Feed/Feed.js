import React from 'react';
import List from '../List/List';
import useFetchData from '../../hooks/useFetchData';
import useInterval from '../../hooks/useInterval';
import './Feed.scss';

const Feed = () => {
  const tweets = useFetchData(useInterval(2000));

  return (
    <div className="feed">
      <h2 className="feed__title">Twitter-like feed</h2>
      <List tweets={tweets} />
    </div>
  );
};

export default Feed;
