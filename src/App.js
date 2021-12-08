import React, { Suspense } from 'react';

import './App.css';

const OtherComponent = React.lazy(() => {
  // Using Promise + setTimeout to simulate a longer delay,
  // normally we just return the import
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./OtherComponent'));
    }, 1000);
  });
});

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<img src="/loading-icon.svg" className="App-logo" alt="logo" />}>
        <OtherComponent />
      </Suspense>
    </div>
  );
};

export default App;
