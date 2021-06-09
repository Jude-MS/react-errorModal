import React, {useState, Fragment} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
      e.preventDefault();
      if(userName.trim().length === 0 && age.trim().length === 0){
          setError({
              title: "Invalid Input!",
              message: "Please enter a valid name and age (non-empty values)."
          })
        return;
      };
      if(+age < 1){
        setError({
            title: "Invalid Age!",
            message: "Please enter a valid age (> 0)."
        })
          return;
      }
      props.infoSubmit({userName, age})
      setUserName('');
      setAge(0);
  };

  const errorHandler = () => {
      setError(null);
  }

  return (
    <Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Button type="submit" name="Add User" />
        </form>
        </Card>
    </Fragment>
  );
};

export default AddUser;
