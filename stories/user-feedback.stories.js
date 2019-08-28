import React from 'react';
import {storiesOf} from '@storybook/react';

import userFeedback from '../dist/user-feedback.svg';

storiesOf('User Feedback').add('default', () => (
  <object type="image/svg+xml" data={userFeedback}></object>
));
