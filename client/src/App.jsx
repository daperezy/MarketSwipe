import './App.css';
import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';

const App = () => {
  // Sets up routes
  let element = useRoutes([
    {
      path: "/login",
      element: (
        <div className="fullPage">
          <Login />
        </div>
      ),
    },
    {
      path: "/new",
      element: (
        <div className="fullPage">
          <CreateUser />
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div className="App">
          <div className="header">
            <h1 className='mainHeader'>WELCOME TO <span>MARKET SWIPE</span></h1>
            <h2 className="slogan">Swipe Your Way to Smarter Shopping</h2>
          </div>
          <div className="description">
            <p>
              Market Swipe is the ultimate platform for savvy shoppers. Discover, compare, and shop for the best products with ease. 
              Whether you're looking for daily essentials or unique finds, Market Swipe helps you make informed decisions with a swipe.
            </p>
          </div>
          <Link to="/login">
            <button className="centerButton">Start Shopping Now!</button>
          </Link>
        </div>
      ),
    },
  ]);

  return element;
};

export default App;
