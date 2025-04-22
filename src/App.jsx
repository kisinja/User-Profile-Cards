import React from 'react';
import UserCard from './components/UserCard';

const App = () => {

  const users = [
    {
      name: "Pooja Dutt",
      email: "pooja@gmail.com",
      bio: " I am a software engineer with 5 years of experience in web development. I love coding and learning new technologies.",
      avatar: "https://i.pinimg.com/474x/41/b5/c5/41b5c5f32aeab94530e52fcca99c289f.jpg",
      skills: ["Javascript", "HTML", "CSS", "React JS", "Next JS"],
    },
    {
      name: "Telusko",
      email: "telusko@gmail.com",
      bio: "I am a Java Developer specializing in Cloud technologies.",
      avatar: "https://i.pinimg.com/474x/04/b0/59/04b0591d7402691ad4f766df004119d3.jpg",
      skills: ["Java SE", "Spring Boot", "Maven"],
    },
  ];

  return (
    <div className='text-5xl'>
      <h1>User Profile Cards</h1>

      <UserCard users={users} />
    </div>
  );
};

export default App;