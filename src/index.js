import React from 'react';
import ReactDOM from 'react-dom';
import { registerApplication, start } from 'single-spa';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


async function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  })
}

// single spa 的缺点 样式不隔离 没有js沙箱 手动加载script
registerApplication('myVueApp',
  async () => {
    // 推荐使用system.js
    await loadScript('http://localhost:10000/js/chunk-vendors.js');
    await loadScript('http://localhost:10000/js/app.js');
    return window.singleVue;
  },
  location => location.pathname.startsWith('/vue'),
);
start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
