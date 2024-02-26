import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './redux/Counter';

const store = createStore(Counter); // store은 아까 리듀서를 적어논 함수 이름을 넣어주면 됨.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <Router>
      {/* <React.StrictMode> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </React.StrictMode> */}
    </Router>
  </CookiesProvider>
);

