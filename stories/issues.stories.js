import React from 'react';
import {storiesOf} from '@storybook/react';

import issues from '../dist/issues.svg';

storiesOf('Issues').add('default', () => (
  <object type="image/svg+xml" data={issues}></object>
));
