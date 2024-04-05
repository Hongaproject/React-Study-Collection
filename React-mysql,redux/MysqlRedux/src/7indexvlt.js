import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore as createStore } from "redux";
import rootReducer from './VltRedux/modules';
import { Provider } from 'react-redux';

// 루트 리듀서 불러와서 사용하여 Provider을 사용하여 프로젝트에 적용 함.

// 루트 리듀서를 불러와서 새로운 스토어를 만들고 Provider를 사용해서 프로젝트에 적용한다.
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// 이 부분을 index.js부분에 작성하면 코드가 실행된다.
