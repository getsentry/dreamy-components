import React from 'react';
import CardStack from '../components/card-stack';
import FilesCard from '../components/files-card';
import IssuesCard from '../components/issues-card';

const Issues = props => (
  <CardStack verticalMultiplier={2.5} horizontalMultiplier={1.5} {...props}>
    <FilesCard style={{fontSize: '0.875em'}} />
    <IssuesCard priority="error" />
    <IssuesCard priority="success" />
  </CardStack>
);

export default Issues;
