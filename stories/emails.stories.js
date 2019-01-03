import React from 'react';
import {storiesOf} from '@storybook/react';

import emails from '../svg/emails.svg';

storiesOf('Emails').add('default', () => ([
  <object data={emails} type="image/svg+xml"></object>,
  <object data={emails} type="image/svg+xml" style={{width: "10em", height: "10em", marginLeft: "6em"}}></object>,
  <object data={emails} type="image/svg+xml" style={{width: "5em", height: "5em", marginLeft: "6em"}}></object>
]));
