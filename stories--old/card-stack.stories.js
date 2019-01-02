import React from 'react';
import {storiesOf} from '@storybook/react';

import CardStack from '../components/card-stack';
import FilesCard from '../components/files-card';
import ContributorsCard from '../components/contributors-card';

storiesOf('Card Stack').add('example', () => (
  <CardStack style={{marginTop: '10%'}}>
    <FilesCard />
    <ContributorsCard />
  </CardStack>
));
