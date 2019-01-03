import React from 'react';
import {storiesOf} from '@storybook/react';

import suggestedAssignees from '../svg/suggested-assignees.svg';

storiesOf('Suggested Assignees').add('default', () => ([
  <object data={suggestedAssignees} type="image/svg+xml"></object>,
  <object data={suggestedAssignees} type="image/svg+xml" style={{width: "10em", height: "10em", marginLeft: "6em"}}></object>,
  <object data={suggestedAssignees} type="image/svg+xml" style={{width: "5em", height: "5em", marginLeft: "6em"}}></object>
]));
