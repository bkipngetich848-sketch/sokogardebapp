import React from "react";
import '../styling/Notfound.css'
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <h1 className="error-code">404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, renamed,
          or is temporarily unavailable.
        </p>

        <Link to="/" className="mylink">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;