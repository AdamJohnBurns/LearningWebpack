import print from './print.js';

var btn = document.createElement('button');
btn.innerHTML = 'Click me';
btn.onclick = print;

document.body.appendChild(btn);
