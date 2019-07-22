import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {

    }
  }

  render() {
    return (
      <div> 
        <h1>Welcome to The Traffic Data</h1>
        <section>
        <p> This app shows the a heatmap of the traffic area around Los Angeles.</p>
        <p> The more traffic there is in a certain region, the more red hot the area is.</p>
        <p>The less traffic there is, the less intense of the color</p>
        <br/>
        <strong>Key:</strong> 
          <p>Red: The most amout of traffic</p>
          <p>Yellow: Still a bit of traffic</p>
          <p>Green: A little or no traffic at all</p>
        </section>
        <br/>
        <h2>If you click on the logo, it will show you the heatmap of LA</h2>
        <p>You are currently on the <strong>Home</strong> page</p>
        <br/>
        <h2>##Future Updates##</h2>
        <p>There is a Log In/Sign up form in the left hand corner. 
          Due to time constraints, I couldn't implement a user sign up page</p>
          <p>There will be a Sign up page coming, I promise!</p>
      </div>
    );
  }
}
export default Home;