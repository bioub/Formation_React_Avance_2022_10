import './index.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { StrictMode } from 'react';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';
import { getAllUsers } from './users/actions';

const root = createRoot(document.getElementById('root'));

const rootReducer = {
  todos: todosReducer,
  users: usersReducer,
};

root.render(
  // <StrictMode>
    <Provider store={configureStore({reducer: rootReducer, devTools: {
      // actionCreators: {
      //   getAllUsers
      // },
      // maxAge: 5
    }})}>
      <App />
    </Provider>
  // </StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
