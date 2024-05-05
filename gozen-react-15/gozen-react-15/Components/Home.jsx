import React from 'react'; 
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <p>Hi, Click on the below button for lazy loading and code splitting UI.</p>
      <Link to="/product">
        <button className='button'>Lazy Loading</button>
      </Link>
    </div>
  );
}

export default Home;
