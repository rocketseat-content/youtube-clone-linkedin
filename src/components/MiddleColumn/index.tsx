import React from 'react';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container } from './styles';

const MiddleColumn: React.FC = () => {
  return (
    <Container className="middle-column">
      <FeedShare />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </Container>
  );
};

export default MiddleColumn;
