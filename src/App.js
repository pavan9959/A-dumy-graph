import React from 'react';
import Header from './Header';
import LineChart from './LineChart';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto', border: '1px solid #e6e6e6', borderRadius: '10px', overflow: 'hidden' }}>
      <Header />
      <LineChart />
    </div>
  );
};

export default App;
