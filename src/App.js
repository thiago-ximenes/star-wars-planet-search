import React from 'react';
import './App.css';
import MyProvider from './context/MyProvider';
import Index from './page/Index';

function App() {
  return (
    <MyProvider>
      <Index />
    </MyProvider>
  );
}

export default App;
