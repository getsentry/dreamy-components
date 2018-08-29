import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../components/card';

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
