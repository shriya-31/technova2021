import { Link } from "react-router-dom";
const PetList = ({ dogs }) => {
  return (
    <div>
      Pet list{" "}
      {dogs.map((dog) => {
        return (
          <Link to={`/profile/${dog.id}`}>
            <h1>{dog.name}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default PetList;
