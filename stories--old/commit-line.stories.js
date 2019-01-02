import React from 'react';
import {storiesOf} from '@storybook/react';

import CommitLine from '../components/commit-line';

storiesOf('Commit Line').add('default', () => (
  <CommitLine style={{width: '500px', margin: '2em'}}>9956ddd</CommitLine>
));
