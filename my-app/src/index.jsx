import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import thunk from "redux-thunk" 
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reduces/rootReducer';

import Home from './pages/Home';
import About from './pages/About';
import Destination from './pages/Destination';
import Account from './pages/User';
import App from './App.jsx';

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const reduxStore = createStore(rootReducer, enhancers
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
        <Router>
          <Routes>
            <Route path="/" element={<App />} >
                <Route path="about" element={<About />} />
                <Route path="destination" element={<Destination />} />
                <Route path="/users/:id" element={<Account />} />
            </Route>
            <Route index element={<Home />} />
          </Routes>
        </Router>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
    </Provider>
     
  </React.StrictMode>
);


reportWebVitals();
