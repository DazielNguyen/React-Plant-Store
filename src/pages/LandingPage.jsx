import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="company-name">GreenRoots Plant Store</h1>
        <p className="description">
          Welcome to GreenRoots — where we bring life into your home with beautiful, easy-care houseplants.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
