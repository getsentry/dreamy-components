import React from 'react';
import {storiesOf} from '@storybook/react';

import Contributors from '../components/contributors';

storiesOf('Contributors').add('default', () => (
  <Contributors style={{marginTop: '10%'}} />
));
