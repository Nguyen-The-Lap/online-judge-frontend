import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../css/Home.css";

const Home = () => {
  const { auth } = useContext(AuthContext);

  const renderCard = (title, description, linkText, to) => (
    <div className="home-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={to} className="home-link">
        {linkText}
      </Link>
    </div>
  );

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Online Judge</h1>
      <div className="home-grid">
        {auth.isAdmin ? (
          <>
            {renderCard(
              "Create Problems",
              "Ready to add new problems?",
              "Create a new problem",
              "/problem"
            )}
            {renderCard(
              "Problemset",
              "Problems can be edited now.",
              "Go to problems",
              "/problemset"
            )}
            {renderCard(
              "Leaderboard",
              "Observe the competition!",
              "Check the leaderboard",
              "/leaderboard"
            )}
          </>
        ) : auth.isAuthenticated ? (
          <>
            {renderCard(
              "Start Solving",
              "Start solving problems now!",
              "Go to problems",
              "/problemset"
            )}
            {renderCard(
              "Leaderboard",
              "Join the competition!",
              "Check the leaderboard",
              "/leaderboard"
            )}
            {renderCard(
              "My Submissions",
              "View your submissions anytime.",
              "View submissions",
              "/submissions"
            )}
          </>
        ) : (
          <>
            {renderCard(
              "Login",
              "Welcome! Please log in to get started.",
              "Log in",
              "/login"
            )}
            {renderCard(
              "Browse Problems",
              "Check out available problems.",
              "Go to problems",
              "/problemset"
            )}
            {renderCard(
              "Leaderboard",
              "Observe the competition leaderboard.",
              "Check the leaderboard",
              "/leaderboard"
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
