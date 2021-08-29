import { Link } from "react-router-dom";
import ProfileCard from "./profile-card";
import profilePic from "../assets/profile.jpg";
const Dashboard = ({ dogs }) => {
  return (
    <div className="dashboard">
      <div className="dashboard__details">
        <div>
          <div className="dashboard__nav">
            <h1>Dashboard</h1>
            <div>
              <i class="far fa-heart"></i>
              <i class="far fa-calendar"></i>
              <img src={profilePic} />
            </div>
          </div>
          <p>
            Gain positivity and emotional support by booking a session with
            animals from credible non-profit organizations today.
          </p>
        </div>
        <div className="dashboard__inputs">
          <div className="dashboard__input">
            <i class="far fa-clock input__icon"></i>
            <input type="text" placeholder="      Availability" />
            <i class="fas fa-chevron-down"></i>
          </div>

          <div className="dashboard__input">
            <i class="fas fa-map-marker-alt input__icon"></i>
            <input type="text" placeholder="      Location" />
            <i class="fas fa-chevron-down"></i>
          </div>

          <div className="dashboard__input">
            <i class="far fa-smile input__icon"></i>
            <input type="text" placeholder="      Interests" />
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="dashboard__dogs">
        {dogs.map((dog) => {
          return (
            <Link to={`/profile/${dog.id}`}>
              <ProfileCard dog={dog} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
