import React from 'react';
import {storiesOf} from '@storybook/react';

import issues from '../svg/issues.svg';

storiesOf('Issues').add('default', () => ([
  <object data={issues} type="image/svg+xml"></object>,
  <object data={issues} type="image/svg+xml" style={{width: "10em", height: "10em", marginLeft: "6em"}}></object>,
  <object data={issues} type="image/svg+xml" style={{width: "5em", height: "5em", marginLeft: "6em"}}></object>
]));
