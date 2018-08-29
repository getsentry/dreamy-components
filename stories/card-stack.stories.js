import React from 'react';
import { storiesOf } from '@storybook/react';

import FilesCard from '../components/files-card';
import CardStack from '../components/card-stack';
import ContributorsCard from '../components/contributors-card';

storiesOf('Card Stack', module)
  .add('two', () => (
    <CardStack style={{marginTop: "10%"}}>
      <FilesCard />
      <ContributorsCard />
    </CardStack>
  ))
