const Profile = (props) => {
  const { dog } = props;
  return (
    <div>
      {dog.name} Profile <img src={dog.pic} />
    </div>
  );
};

export default Profile;
