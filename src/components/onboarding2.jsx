const AccountDetails = () => {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        className="image__input"
        onChange={changeFile}
      ></input>
    </div>
  );
};
