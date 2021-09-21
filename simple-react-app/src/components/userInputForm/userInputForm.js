import react, { useState } from "react";
import "./UserInputForm.css";

const UserInputForm = (props) => {
  const [userKey, setUserKey] = useState(() => "Please Input Your Key Here!");
  const [userValue, setUserValue] = useState(() => "Please Input Your Value Here!");

  const userKeyChangeHandler = (event) => {
    setUserKey(event.target.value.trim());
    console.log(event.target.value.trim());
  };

  const userValueChangeHandler = (event) => {
    setUserValue(event.target.value.trim());
    console.log(event.target.value.trim());
  };

  const userSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="UserInputForm">
      <div className="UserInputSecton">
        <input type="text" onChange={userKeyChangeHandler} value={userKey} />
        <input
          type="text"
          onChange={userValueChangeHandler}
          value={userValue}
        />
      </div>
      <div className="UserInputControl">
        <button type="submit" onClick={userSubmitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserInputForm;
