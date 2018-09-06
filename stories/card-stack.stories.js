import React from 'react';
import {storiesOf} from '@storybook/react';

import FilesCard from '../components/files-card';
import CardStack from '../components/card-stack';
import ContributorsCard from '../components/contributors-card';
import EmailCard from '../components/email-card';
import IssuesCard from '../components/issues-card';

storiesOf('Card Stack')
  .add('Files and Contributors', () => (
    <CardStack style={{marginTop: '10%'}}>
      <FilesCard />
      <ContributorsCard />
    </CardStack>
  ))
  .add('Emails', () => (
    <CardStack style={{marginTop: '10%'}} horizontalMultiplier={2.5}>
      <EmailCard hash="7cd0912" />
      <EmailCard hash="3ab7615" alternateHeaderColor="purpleLightest" />
      <EmailCard hash="2dc1209" alternateHeaderColor="purpleDarkest" />
    </CardStack>
  ))
  .add('Issues and Files', () => (
    <CardStack
      style={{marginTop: '10%'}}
      verticalMultiplier={2.5}
      horizontalMultiplier={1.5}
    >
      <FilesCard style={{fontSize: '0.875em'}} />
      <IssuesCard priority="error" />
      <IssuesCard priority="success" />
    </CardStack>
  ));
