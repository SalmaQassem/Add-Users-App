import "./App.css";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import Alert from "./components/UI/Alert";
import Button from "./components/UI/Button";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [nameValid, setNameValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);
  const [message, setMessage] = useState("");

  const formSubmitHandler = (isNameValid, isAgeValid, userInput) => {
    if (isNameValid && isAgeValid) {
      const data = {
        id: Math.random().toString(),
        ...userInput,
      };
      setUsers((prevData) => {
        return [...prevData, data];
      });
    } else if (!isNameValid && !isAgeValid) {
      setNameValid(false);
      setAgeValid(false);
      setMessage("Please enter a valid name and age (non-empty values).");
    } else if (!isNameValid) {
      setNameValid(false);
      setAgeValid(true);
      setMessage("Please enter a valid name (non-empty value).");
    } else if (!isAgeValid) {
      setAgeValid(false);
      setNameValid(true);
      setMessage("Please enter a valid age (> 0).");
    }
  };
  const onAlertSubmit = (e) => {
    e.preventDefault();
    setNameValid(true);
    setAgeValid(true);
  }
  return (
    <div className="App">
      <UserForm onFormSubmit={formSubmitHandler} />
      {users.length > 0 ? <UsersList usersData={users} /> : ""}
      {!nameValid || !ageValid ? (
        <Alert onSubmit={onAlertSubmit}>
          <div className="overlay"></div>
          <div className="content">
            <div className="title">Invalid input</div>
            <div className="message-container">
              <div className="message">{message}</div>
              <div className="btn">
                <Button type="submit">okay</Button>
              </div>
            </div>
          </div>
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
