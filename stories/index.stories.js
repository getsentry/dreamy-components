import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Test from '../components/test';


storiesOf('Test', module)
  .add('default', () => <Test />)
