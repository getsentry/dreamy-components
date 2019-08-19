import React from 'react';
import {storiesOf} from '@storybook/react';

import resolution from '../dist/resolution.svg';

storiesOf('Resolution').add('default', () => (
  <object type="image/svg+xml" data={resolution}></object>
));
