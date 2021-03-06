import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <div className="home-section">
    <h2 className="home-title">Welcome to our page!</h2>
    <p className="home-p">
      In this Single Page Application built with React.js, you can access three
      different sections for you to explore:
    </p>
    <p className="home-p">
      A calculator in which you can execute mathematical operations such as
      sums, subtractions, multiplications, and divisions as well as change one
      number into a negative value and get the percentage of one number. You are
      also able to delete your operations whenever you want!
    </p>
    <p className="home-p">
      A Quote page in which you can find a quote related to the mathematics
      field to inspire you.
    </p>
    <p className="home-p">This home page you are reading right now.</p>
  </div>
);

export default Home;
