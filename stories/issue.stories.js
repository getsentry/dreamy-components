import React from 'react';
import { storiesOf } from '@storybook/react';

import Issue from '../components/issue';

storiesOf('Issue', module)
  .add('default', () => (
    <React.Fragment>
      <Issue name="TypeError" description="/api/0/projects/" style={{marginRight: "1em"}}/>
      <Issue name="DoesNotExist" description="/extensions/github/web/" priority="success" style={{fontSize: "0.9em", marginRight: "1em"}}/>
      <Issue name="ValueTooLarge" description="/api/{project_id}/store/" priority="dark" style={{fontSize: "1em"}}/>
    </React.Fragment>
  ))
  .add('triangleUp', () => (
    <React.Fragment>
      <Issue description="E3fc2x" priority="dark" triangleUp={true} style={{fontSize: "0.875em", marginRight: "1em"}}/>
      <Issue description="DoesNotExist" triangleUp={true} style={{fontSize: "0.9em", marginRight: "1em"}}/>
      <Issue description="E3fc2x" priority="success" triangleUp={true} style={{fontSize: "1em"}}/>
    </React.Fragment>
  ))
