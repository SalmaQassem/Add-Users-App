import styles from "./UserForm.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { useRef } from "react";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      nameInputRef.current.value.trim() === "" ||
      ageInputRef.current.value.trim() === "" ||
      +ageInputRef.current.value <= 0
    ) {
      if (
        nameInputRef.current.value.trim() === "" &&
        (ageInputRef.current.value.trim() === "" ||
          +ageInputRef.current.value <= 0)
      ) {
        props.onFormSubmit(
          false,
          false,
          nameInputRef.current.value.trim(),
          +ageInputRef.current.value
        );
      } else if (nameInputRef.current.value.trim() === "") {
        props.onFormSubmit(
          false,
          true,
          nameInputRef.current.value.trim(),
          +ageInputRef.current.value
        );
      } else if (
        ageInputRef.current.value.trim() === "" ||
        +ageInputRef.current.value <= 0
      ) {
        props.onFormSubmit(
          true,
          false,
          nameInputRef.current.value.trim(),
          +ageInputRef.current.value
        );
      }
      return;
    }
    props.onFormSubmit(
      true,
      true,
      nameInputRef.current.value.trim(),
      +ageInputRef.current.value
    );
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <label>username</label>
        <input className={styles.name} type="text" ref={nameInputRef} />
        <label>age (years)</label>
        <input className={styles.age} type="number" ref={ageInputRef} />
        <Button type="submit">add user</Button>
      </form>
    </Card>
  );
};

export default UserForm;
