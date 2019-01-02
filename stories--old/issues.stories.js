import React from 'react';
import {storiesOf} from '@storybook/react';

import Issues from '../components/issues';

storiesOf('Issues').add('default', () => <Issues style={{margin: '10% auto'}} />);
