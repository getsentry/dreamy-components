import React from 'react';
import {storiesOf} from '@storybook/react';

import Emails from '../components/emails';

storiesOf('Emails').add('default', () => <Emails style={{margin: '10% auto'}} />);
