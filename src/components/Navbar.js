import React from 'react';
import logo from './logo.png';



const styles ={
  container: {
    width: '100vw',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center'
  },
  
  image :{
    height: '4rem',
    width: 'auto',
  }
  

}

const Navbar = () => {
  return <div style={styles.container}> 
    <img src={logo} style={styles.image}></img>
  </div>
}

export default Navbar;