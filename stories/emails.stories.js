import React from 'react';
import {storiesOf} from '@storybook/react';

import emails from '../svg/emails.svg';

storiesOf('Emails').add('default', () => (
  <object type="image/svg+xml" data={emails}></object>
));
