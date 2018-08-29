import React from 'react';
import { storiesOf } from '@storybook/react';

import FilesCard from '../components/files-card';

storiesOf('Files Card', module)
  .add('default', () => <FilesCard />)
