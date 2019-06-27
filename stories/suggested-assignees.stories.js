import React from 'react';
import {storiesOf} from '@storybook/react';

import "../styles/styles.css";
import suggestedAssignees from '../svg/suggested-assignees.svg';

storiesOf('Suggested Assignees').add('default', () => (
  <object type="image/svg+xml" data={suggestedAssignees}></object>
));
