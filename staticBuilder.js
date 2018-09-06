import React from 'react';
import ReactDOM from 'react-dom/server';
import {renderStylesToString} from 'emotion-server';
import fs from 'fs';

import Test from './components/test.jsx';

const testHtml = renderStylesToString(ReactDOM.renderToString(<Test />));
fs.writeFileSync('./test.html', testHtml);
