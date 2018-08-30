import React from 'react';
import { storiesOf } from '@storybook/react';

import BashCard from '../components/bash-card';

storiesOf('Bash Card', module)
  .add('default', () => <BashCard />)
