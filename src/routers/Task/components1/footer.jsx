import { Link } from "react-router-dom";

export let Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>Our Kitchen 🍛</h3>
          <p>Authentic Indian flavors, made simple at home.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Ambur Town</p>
          <p>📞 +91 98765 43210</p>
          <p>🕒 10:00 AM – 10:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Our Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
};
