import React from 'react';
import { storiesOf } from '@storybook/react';

import EmailCard from '../components/email-card';

storiesOf('Email Card', module)
  .add('default', () => <EmailCard hash="7cd0912" />)
