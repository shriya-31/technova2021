import { Link } from "react-router-dom";
const Profile = ({ dog }) => {
  const { pic, name, desc, loc, company, personality } = dog;
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile__container">
        <img src={pic} />
        <div className="right">
          <h1>{name}</h1>
          <h2>{company}</h2>
          <div className="buttons">
            <i class="far fa-heart"></i>
            <Link to="/select-meeting-time" style={{ textDecoration: "none" }}>
              <div>Meet with me</div>
            </Link>
          </div>
          <p>{desc}</p>
          <p className="loc">
            <span>Location: </span>
            {loc}
          </p>
          <h2 className="personality">Personality</h2>
          {personality.map((p) => (
            <div className="trait">{p}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
