import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from '../components/badge';

storiesOf('Badge', module)
  .add('default', () => (
    <React.Fragment>
      <Badge name="Matte" src="https://sentry.io/_assets/people/matte-noble-98626d554cd2dcc6fbf5fba79428eb810c8ed7cb75da65baab550cb7d0d32061.jpg" style={{marginBottom: "0.5em", fontSize: "1.5em"}} />
      <Badge name="Meredith" src="https://sentry.io/_assets/people/meredith-9530c4a02bc5e6135f3eb4c731f704ae9456637fb98452d1c8b10a1f91f02014.jpg" style={{marginBottom: "0.75em", fontSize: "1em"}} />
      <Badge name="Adhi" src="https://sentry.io/_assets/people/adhiraj-5faa25498fde92382792066aa195c48ec5b4e2f7530ba4bcada1fd332bb86e98.jpg" style={{marginBottom: "0.5em", fontSize: "0.75em"}} />
    </React.Fragment>
  ))
