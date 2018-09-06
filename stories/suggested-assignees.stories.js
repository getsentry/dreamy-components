import React from 'react';
import {storiesOf} from '@storybook/react';

import SuggestedAssignees from '../components/suggested-assignees';

storiesOf('Suggested Assignees').add('default', () => (
  <SuggestedAssignees style={{marginTop: '25%'}} />
));
