import React from 'react';

const Header = () => {
  return (
    <div style={{ padding: '20px', borderBottom: '1px solid #e6e6e6' }}>
      <h1 style={{ fontSize: '48px', margin: 0 }}>63,179.71 USD</h1>
      <p style={{ color: '#4caf50', fontSize: '18px', margin: 0 }}>+2,161.42 (3.54%)</p>
      <nav style={{ marginTop: '10px', display: 'flex', gap: '20px', fontSize: '18px', color: '#7e7e7e' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#7e7e7e' }}>Summary</a>
        <a href="#" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Chart</a>
        <a href="#" style={{ textDecoration: 'none', color: '#7e7e7e' }}>Statistics</a>
        <a href="#" style={{ textDecoration: 'none', color: '#7e7e7e' }}>Analysis</a>
        <a href="#" style={{ textDecoration: 'none', color: '#7e7e7e' }}>Settings</a>
      </nav>
    </div>
  );
};

export default Header;
