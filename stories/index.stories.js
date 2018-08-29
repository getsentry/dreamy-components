import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Issue from '../components/issue';
import Card from '../components/card';
import CommitLine from '../components/commit-line';
import Avatar from '../components/avatar';
import Badge from '../components/badge';

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

storiesOf('Card', module)
  .add('default', () => (
    <React.Fragment>
      <Card style={{marginBottom: "1em"}}>Default</Card>
      <Card priority="success" style={{marginBottom: "1em"}}>Success</Card>
      <Card priority="error" style={{marginBottom: "1em"}}>Error</Card>
      <Card priority="dark">Dark</Card>
    </React.Fragment>
  ))
  .add('with header', () => (
    <React.Fragment>
      <Card header="default" style={{marginBottom: "1em"}}>Default</Card>
      <Card header="success" priority="success" style={{marginBottom: "1em"}}>Success</Card>
      <Card header="error" priority="error" style={{marginBottom: "1em"}}>Error</Card>
      <Card header="dark" priority="dark">Dark</Card>
    </React.Fragment>
  ))

storiesOf('Commit Line', module)
  .add('default', () => <CommitLine style={{width: "500px", margin: "2em"}}>9956ddd</CommitLine>)

storiesOf('Avatar', module)
  .add('default', () => (
    <React.Fragment>
      <Avatar size="100px" src="https://sentry.io/_assets/people/matte-noble-98626d554cd2dcc6fbf5fba79428eb810c8ed7cb75da65baab550cb7d0d32061.jpg" />
      <Avatar size="50px" src="https://sentry.io/_assets/people/meredith-9530c4a02bc5e6135f3eb4c731f704ae9456637fb98452d1c8b10a1f91f02014.jpg" />
      <Avatar size="25px" src="https://sentry.io/_assets/people/denamwangi-e522c9cae55e1a226b03e57bed5a27a44a92fe870fe2de0a6559a8fb4bdaece5.jpg" />
    </React.Fragment>
  ))
  .add('priorities', () => (
    <React.Fragment>
      <Avatar size="100px" priority="success" src="https://sentry.io/_assets/people/colleenorourke-8b97c40b41b68e31097b8d3dbe21cbb53dd09d7b0034ef5c92c8b951ea6adfc5.jpg" />
      <Avatar size="50px" priority="error" src="https://sentry.io/_assets/people/benvinegar-28a3febe24d6cdac0ea9d896e3c16570b1c7b31083f08fa5d54f46e8df0e2bda.jpg" />
      <Avatar size="25px" src="https://sentry.io/_assets/people/adhiraj-5faa25498fde92382792066aa195c48ec5b4e2f7530ba4bcada1fd332bb86e98.jpg" />
    </React.Fragment>
  ))

storiesOf('Badge', module)
  .add('default', () => (
    <React.Fragment>
      <Badge name="Matte" src="https://sentry.io/_assets/people/matte-noble-98626d554cd2dcc6fbf5fba79428eb810c8ed7cb75da65baab550cb7d0d32061.jpg" style={{marginBottom: "0.5em", fontSize: "1.5em"}} />
      <Badge name="Meredith" src="https://sentry.io/_assets/people/meredith-9530c4a02bc5e6135f3eb4c731f704ae9456637fb98452d1c8b10a1f91f02014.jpg" style={{marginBottom: "0.75em", fontSize: "1em"}} />
      <Badge name="Adhi" src="https://sentry.io/_assets/people/adhiraj-5faa25498fde92382792066aa195c48ec5b4e2f7530ba4bcada1fd332bb86e98.jpg" style={{marginBottom: "0.5em", fontSize: "0.75em"}} />
    </React.Fragment>
  ))
