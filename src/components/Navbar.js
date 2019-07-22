import React from 'react';
import logo from './logo.png';

const styles ={
  container: {
    width: '100vw',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    height: '4rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  logInContainer: {
    display: 'flex',
    justifyContent: 'end'
  },
  homeContainer: {
    display: 'flex',
    justifyContent: 'start'
  },
  image :{
    height: '4rem',
    width: 'auto',
  }
}

const Navbar = ({ toggleMapPage }) => {
  return (
    <div style={styles.container}>
      <div style={styles.homeContainer}> 
        <button onClick={() => toggleMapPage(false)}><h2>Home</h2></button>
        <button onClick={() => toggleMapPage(true)}>
          <img src={logo} style={styles.image} />
        </button>
      </div>
      <div style={styles.logInContainer}>
        <button><h2>Log In/Sign Up</h2></button>
      </div>
    </div>
)
}

export default Navbar;