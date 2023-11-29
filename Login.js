import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const formStyle = {
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const inputContainerStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

 
  const loggedInContainerStyle = {
    textAlign: 'center',
  };

  const loggedInHeadingStyle = {
    color: '#4caf50',
  };

  const logoutButtonStyle = {
    backgroundColor: '#f44336',
  };

  const logoutButtonHoverStyle = {
    backgroundColor: '#d32f2f',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleLogout = () => {
  
  };

  if (loggedIn) {
    return (
      <div style={loggedInContainerStyle}>
        <h2 style={loggedInHeadingStyle}>Welcome, {username}!</h2>
        <button
          style={{ ...buttonStyle, ...logoutButtonStyle }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <form style={formStyle} onSubmit={handleLogin}>
      <h2 style={headingStyle}>Login</h2>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>username:</label>
        <input
          type="text"
          value={username}
          style={inputStyle}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Password:</label>
        <input
          type="password"
          value={password}
          style={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        style={{ ...buttonStyle, ...buttonHoverStyle }}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
