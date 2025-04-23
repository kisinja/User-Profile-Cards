import React, { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import { users as defaultUsers } from './users';

const App = () => {

  const [users, setUsers] = useState([]);

  // This effect runs only once when the component mounts
  // and sets the initial users in local storage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(defaultUsers));

    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      setUsers(defaultUsers);
    }
  }, []);


  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Users Management App</h1>

        <UserForm setUsers={setUsers} />
        <UsersList users={users} />
      </div>
    </div>
  );
};

export default App;