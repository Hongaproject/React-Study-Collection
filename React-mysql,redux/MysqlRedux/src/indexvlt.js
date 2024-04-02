import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, createStoreHook } from 'react-redux';
import rootReducer from './VltRedux/modules';

// 루트 리듀서 불러와서 사용하여 Provider을 사용하여 프로젝트에 적용 함.

// 루트 리듀서를 불러와서 새로운 스토어를 만들고 Provider를 사용해서 프로젝트에 적용한다.
const store = createStoreHook(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);