import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Components/Home';

const Lazyproduct = lazy(() => import('../Components/Product/Product'));

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Lazyproduct />
            </Suspense>
          }
        />
      </Routes>
   
  );
}

export default App;
