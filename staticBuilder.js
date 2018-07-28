import React from 'react';
import ReactDOM from 'react-dom/server';
import { renderStylesToString } from 'emotion-server'

import Test from './components/test.jsx';

const testHtml = renderStylesToString(ReactDOM.renderToString(<Test/>));
console.log(testHtml);
