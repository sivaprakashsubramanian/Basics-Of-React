import React from 'react';
import ReactDOM from 'react-dom/client'
const parent=React.createElement('div',{id:"parent"},
React.createElement('div',{id:'child'},
[React.createElement('h1',{id:'head'},"Hello siva"),
React.createElement('h2',{id:'head2'},"Hello prakash")]));
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);