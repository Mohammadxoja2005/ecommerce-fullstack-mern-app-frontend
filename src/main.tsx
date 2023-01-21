import React from 'react';
import ReactDOM from 'react-dom/client';
// component
import App from './App';
// styles
import './index.css';
// features 
import catalog from "./features/catalog";
import category from './features/category';
// redux-toolkit 
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
// react-redux 
import { Provider } from "react-redux";

const reducer = combineReducers({
  catalog: catalog,
  category: category
})

const store = configureStore({
  reducer: reducer
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
