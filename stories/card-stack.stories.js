import React from 'react';
import { storiesOf } from '@storybook/react';

import FilesCard from '../components/files-card';
import CardStack from '../components/card-stack';
import ContributorsCard from '../components/contributors-card';
import EmailCard from '../components/email-card';

storiesOf('Card Stack', module)
  .add('two', () => (
    <CardStack style={{marginTop: "10%"}}>
      <FilesCard />
      <ContributorsCard />
    </CardStack>
  ))
  .add('three', () => (
    <CardStack style={{marginTop: "10%"}} horizontalMultiplier={2.5}>
      <EmailCard hash="7cd0912" />
      <EmailCard hash="3ab7615" alternateHeaderColor="purpleLightest"/>
      <EmailCard hash="2dc1209" alternateHeaderColor="purpleDarkest" />
    </CardStack>
  ))
