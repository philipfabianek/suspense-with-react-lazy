import React, { Suspense } from 'react';

import logo from './logo.svg';
import './App.css';

const ComponentToLoad = React.lazy(() => {
  // Using Promise + setTimeout to simulate a longer delay,
  // normally we just return the import
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./ComponentToLoad'));
    }, 1200);
  });
});

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<img src={logo} className="App-logo" alt="logo" />}>
        <ComponentToLoad />
      </Suspense>
    </div>
  );
};

export default App;
