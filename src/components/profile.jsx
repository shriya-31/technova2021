const Profile = (props) => {
  const { dog } = props;
  return (
    <div>
      {dog.name} Profile <img src={dog.picture} />
    </div>
  );
};

export default Profile;
