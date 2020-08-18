import React from 'react';

import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingProfilePanel: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="bg-skeleton" />
        <span>
          <Skeleton className="avatar-skeleton" />
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
        </span>
      </Panel>
    </Container>
  );
};

export default LoadingProfilePanel;
