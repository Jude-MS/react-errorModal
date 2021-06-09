import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [info, setInfo] = useState([]);

  const userInfoHandler = ({userName, age}) => {
    setInfo((prevInfo) => {
      return [
        ...prevInfo,
        {
          id: Math.random(),
          userName,
          age,
        }
      ]
    });
  }

  console.log({info})

  return (
    <div className="App">
      <AddUser infoSubmit={userInfoHandler} />
      <UsersList users={info} />
    </div>
  );
}

export default App;
