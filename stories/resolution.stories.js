import React from 'react';
import { storiesOf } from '@storybook/react';

import Resolution from '../components/resolution';

storiesOf('Resolution', module)
  .add('default', () => <Resolution style={{marginTop: "10%"}}/>)
