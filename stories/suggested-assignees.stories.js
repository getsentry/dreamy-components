import React from 'react';
import {storiesOf} from '@storybook/react';

import suggestedAssignees from '../dist/suggested-assignees.svg';

storiesOf('Suggested Assignees').add('default', () => (
  <object type="image/svg+xml" data={suggestedAssignees}></object>
));
