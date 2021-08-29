import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home <Link to="/login">Login</Link>
      <Link to="/account-creation">Get Started</Link>
    </div>
  );
};

export default Home;
