import React from 'react'

const styles={
  outerContainer : {
    position: 'fixed',
    height: '50vh',
    width: '50vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  innerContainer : {
    height: '60%',
    width: '60%',
    backgroundColor: 'white'
  }
}
function SubmitPrompt(props) {
  return <div style = {styles.outerContainer}>
    <div style = {styles.innerContainer}>
      test
   </div></div>
} 
export default SubmitPrompt;