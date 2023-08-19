import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, Store } from "redux";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const store: Store<ContactState, ContactAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
