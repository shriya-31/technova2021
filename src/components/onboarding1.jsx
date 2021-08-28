import { Link } from "react-router-dom";

const AnimalSelection = () => {
  const animals = ["Dogs", "Cats", "Bunnies"];
  return (
    <div>
      <h1>What type of animals are you comfortable with?</h1>
      {animals.map((animal) => {
        return (
          <button className={`animal__button animal__button--${animal}`}>
            {animal}
          </button>
        );
      })}
      <Link to="/animal-selection">Back</Link>
      <Link to="/personality-selection">Next</Link>
    </div>
  );
};

export default AnimalSelection;
