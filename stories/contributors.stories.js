import React from 'react';
import {storiesOf} from '@storybook/react';

import contributors from '../svg/contributors.svg';

storiesOf('Contributors').add('default', () => (
  <object type="image/svg+xml" data={contributors}></object>
));
