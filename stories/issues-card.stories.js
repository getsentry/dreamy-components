import React from 'react';
import { storiesOf } from '@storybook/react';

import IssuesCard from '../components/issues-card';

storiesOf('Issues Card', module)
  .add('Resolved', () => <IssuesCard priority="success"/>)
  .add('New', () => <IssuesCard priority="error"/>)
