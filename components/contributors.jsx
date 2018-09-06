import React from 'react';
import CardStack from '../components/card-stack';
import FilesCard from '../components/files-card';
import ContributorsCard from '../components/contributors-card';

const Contributors = props => (
  <CardStack {...props}>
    <FilesCard />
    <ContributorsCard />
  </CardStack>
);

export default Contributors;
