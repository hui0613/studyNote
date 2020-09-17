import React from 'react';
import ReactDom from 'react-dom';

import Helloworld from './components/Hello';

ReactDom.render(<Helloworld name='world' />, document.getElementById('app'));
