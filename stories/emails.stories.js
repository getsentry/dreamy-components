import React from 'react';
import {storiesOf} from '@storybook/react';

import emails from '../dist/emails.svg';

storiesOf('Emails').add('default', () => (
  <object type="image/svg+xml" data={emails}></object>
));
