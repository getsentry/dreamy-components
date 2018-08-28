import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Issue from '../components/issue';
import Card from '../components/card';


storiesOf('Issue', module)
  .add('default', () => <Issue />)
  .add('success', () => <Issue priority="success"/>)

storiesOf('Card', module)
  .add('default', () => <Card />)
  .add('success', () => <Card priority="success"/>)
  .add('error', () => <Card priority="error"/>)
