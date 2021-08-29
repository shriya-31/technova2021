const ProfileCard = ({ dog }) => {
  const { name, personality, pic } = dog;
  console.log(dog);
  return (
    <div className="card">
      <img src={pic} />
      <div className="card__text">
        <h1>{name}</h1>
        {personality.map((p) => {
          return <p>{p}</p>;
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
