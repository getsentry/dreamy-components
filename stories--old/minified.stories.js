import React from 'react';
import {storiesOf} from '@storybook/react';

import Minified from '../components/minified';

storiesOf('Minified').add('default', () => <Minified style={{marginTop: '10%'}} />);
