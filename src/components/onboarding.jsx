import { useState } from "react";
import { Link } from "react-router-dom";
const PersonalitySelection = () => {
  const [selected, setSelected] = useState([]);
  const personality = [
    "Shy",
    "Outgoing",
    "Sporty",
    "Adventurous",
    "Laidback",
    "Gentle",
    "Curious",
  ];
  const handleSelection = (p) => setSelected([...selected, p]);
  console.log(selected);
  return (
    <div>
      <h2> What are you like? What traits are you looking for in a dog?</h2>
      {personality.map((p) => {
        return <button onClick={() => handleSelection(p)}>{p}</button>;
      })}
      <Link to="/personality-selection">Back</Link>
      <Link to="/dashboard">Next</Link>
    </div>
  );
};

export default PersonalitySelection;
