import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Issue from '../components/issue';


storiesOf('Issue', module)
  .add('default', () => <Issue />)
