import { Link } from "react-router-dom";
const PersonalitySelection = () => {
  return (
    <div>
      What are you like? What traits are you looking for in a dog?
      <Link to="/personality-selection">Back</Link>
      <Link to="/dashboard">Next</Link>
    </div>
  );
};

export default PersonalitySelection;
