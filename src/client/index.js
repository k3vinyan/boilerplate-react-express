import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Layout from './components/Layout';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

console.log(ReactDOM)

ReactDOM.render(<div>Hello</div>, document.getElementById('app'));
