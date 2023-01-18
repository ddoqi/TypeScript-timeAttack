import React from "react";
import ReactDOM from "react-dom/client";
// index.css에서 공통으로 다 css 속성 먹이고 있음
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules/index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// store를 persistor에 저장하기(persistor는 컴포넌트내에서 따로 저장되는 함수가 있을거같아)
const store = createStore(rootReducer);
export const persistor = persistStore(store);

// 👀 타입지정
//root는 id가 root라는 애인데, 이건 무조건 HTMLElement야 라고 as로 타입지정을 해줌
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
