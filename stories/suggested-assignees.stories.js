import React from 'react';
import {storiesOf} from '@storybook/react';

import styles from '../css/animations.css';
import suggestedAssignees from '../svg/suggested-assignees.svg';

storiesOf('Suggested Assignees').add('default', () => ([
  <svg
    viewBox={suggestedAssignees.viewBox}
    width={'20em'}
    height={'20em'}
  >
    <use href={`#${suggestedAssignees.id}`} xlinkHref={`#${suggestedAssignees.id}`} />
  </svg>,
  <svg
    viewBox={suggestedAssignees.viewBox}
    width={'10em'}
    height={'10em'}
  >
    <use href={`#${suggestedAssignees.id}`} xlinkHref={`#${suggestedAssignees.id}`} />
  </svg>,
  <svg
    viewBox={suggestedAssignees.viewBox}
    width={'5em'}
    height={'5em'}
  >
    <use href={`#${suggestedAssignees.id}`} xlinkHref={`#${suggestedAssignees.id}`} />
  </svg>
]
));
