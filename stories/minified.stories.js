import React from 'react';
import {storiesOf} from '@storybook/react';

import minified from '../svg/minified.svg';

storiesOf('Minified').add('default', () => (
  <object type="image/svg+xml" data={minified}></object>
));
