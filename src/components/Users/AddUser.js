import React, { useState } from "react";
import "../UI/style.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredEmail.trim().length === 0
    ) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onUserList(enteredName, enteredAge, enteredEmail);
    setEnteredName("");
    setEnteredAge("");
    setEnteredEmail("");
  };

  const userNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const userEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  return (
    <div className='container'>
      <form className='form' id='form' onSubmit={addUserHandler}>
        <h2>Register</h2>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            placeholder='Enter name'
            value={enteredName}
            onChange={userNameHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='age'>Date of Birth</label>
          <input
            id='age'
            type='date'
            placeholder='Enter date'
            value={enteredAge}
            onChange={userAgeHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            placeholder='Enter email address'
            value={enteredEmail}
            onChange={userEmailHandler}
          />
        </div>
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
