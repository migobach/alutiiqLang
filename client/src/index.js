import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();


// could use the below: this will allow a global font 

// import { injectGlobal } from 'styled-components'
// injectGlobal`
//   @font-face{
//     font-family: 'notoSans', sans-serif;
//     src: (google font)
//   }
// `

// html * not(i) {
//   font-family: 'notoSants, sans-serif;
// }

//the not(i) would exclude the icons, which are fonts

// couls also refactor the colors using the theme provider from styled component and then just call props.theme.blue, for example. 