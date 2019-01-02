import React from 'react';
import {storiesOf} from '@storybook/react';

import SuggestedAssignees from '../svg/suggested-assignees.svg';

storiesOf('Suggested Assignees').add('default', () => ([
  <img src={SuggestedAssignees} style={{width: "20em", height: "20em"}}/>,
  <img src={SuggestedAssignees} style={{width: "10em", height: "10em", marginLeft: "6em"}}/>,
  <img src={SuggestedAssignees} style={{width: "5em", height: "5em", marginLeft: "6em"}}/>,
]));
