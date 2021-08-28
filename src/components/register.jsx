import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      Register <Link to="/">Back</Link>
      <Link to="/personality-selection">Next</Link>
    </div>
  );
};

export default Register;
