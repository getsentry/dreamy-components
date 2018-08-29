import React from 'react';
import { storiesOf } from '@storybook/react';

import IssuesCard from '../components/issues-card';

storiesOf('Issues Card', module)
  .add('resolved', () => <IssuesCard priority="success"/>)
  .add('new', () => <IssuesCard priority="error"/>)
