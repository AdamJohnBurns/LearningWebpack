import print from './print.js';
import './css/outputManagement.css'; // css is automatically hot reloaded with the plugin

var btn = document.createElement('button');
btn.innerHTML = 'Click me';
btn.onclick = print;

document.body.appendChild(btn);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated print module!');

    // we need to actually apply the newly updated module now that it's changed
    btn.onclick = print;
  });
}
