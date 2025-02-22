import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <nav style={{ backgroundColor: '#1E3A8A', color: 'white', padding: '16px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Logo */}
        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>
          Food Hub
        </Link>
        
        {/* Search Bar */}
        <div style={{ flexGrow: 1, maxWidth: '300px', margin: '0 16px' }}>
          <input
            type="text"
            placeholder="Search..."
            style={{ width: '100%', padding: '8px', borderRadius: '8px', border: 'none', outline: 'none', color: 'black' }}
          />
        </div>
        
        {/* Authentication Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ padding: '8px 16px', backgroundColor: 'white', color: '#1E3A8A', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            Login
          </button>
          <button style={{ padding: '8px 16px', backgroundColor: '#2563EB', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;