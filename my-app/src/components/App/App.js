import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Todos from '../../todos/components/Todos/Todos';
import Users from '../../users/components/Users/Users';
import TopBar from '../TopBar/TopBar';
import Home from '../Home/Home';
import { lazy, Suspense } from 'react';

const ReactTable = lazy(() => import( '../ReactTable/ReactTable'));

export default function App() {
  console.log('App render');
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <div className="App-Route-Container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="users/*" element={<Users />} />
            <Route path="/demo-xlsx" element={<Suspense fallback={<div>Loading...</div>}><ReactTable /></Suspense>} />
          </Routes></div>
      </BrowserRouter>
    </div>
  );
}
