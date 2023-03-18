import styles from "./UserForm.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { useState } from "react";

const UserForm = (props) => {
  const [userInput, setUserInput] = useState({
    userName: "",
    age: "",
  });

  const onChangeNameHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setUserInput((prevData) => {
        return { ...prevData, userName: e.target.value.trim() };
      });
    }
  };

  const onChangeAgeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setUserInput((prevData) => {
        return { ...prevData, age: +e.target.value.trim() };
      });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      userInput.userName === "" ||
      userInput.age === "" ||
      +userInput.age <= 0
    ) {
      if (
        userInput.userName === "" &&
        (userInput.age === "" || +userInput.age <= 0)
      ) {
        props.onFormSubmit(false, false, userInput);
      } else if (userInput.userName === "") {
        props.onFormSubmit(false, true, userInput);
      } else if (userInput.age === "" || +userInput.age <= 0) {
        props.onFormSubmit(true, false, userInput);
      }
      return;
    }
    props.onFormSubmit(true, true, userInput);
    setUserInput({ userName: "", age: "" });
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <label>username</label>
        <input
          className={styles.name}
          type="text"
          onChange={onChangeNameHandler}
          value={userInput.userName}
        />
        <label>age (years)</label>
        <input
          className={styles.age}
          type="number"
          onChange={onChangeAgeHandler}
          value={userInput.age}
        />
        <Button type="submit">add user</Button>
      </form>
    </Card>
  );
};

export default UserForm;
