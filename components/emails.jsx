import React from 'react';
import CardStack from '../components/card-stack';
import EmailCard from '../components/email-card';

const Emails = props => (
  <CardStack style={{marginTop: '10%'}} horizontalMultiplier={2.5} {...props}>
    <EmailCard hash="7cd0912" />
    <EmailCard hash="3ab7615" alternateHeaderColor="purpleLightest" />
    <EmailCard hash="2dc1209" alternateHeaderColor="purpleDarkest" />
  </CardStack>
);

export default Emails;
