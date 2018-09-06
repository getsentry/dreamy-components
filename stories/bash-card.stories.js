import React from 'react';
import {storiesOf} from '@storybook/react';

import BashCard from '../components/bash-card';

storiesOf('Bash Card').add('default', () => <BashCard style={{marginTop: '10%'}} />);
