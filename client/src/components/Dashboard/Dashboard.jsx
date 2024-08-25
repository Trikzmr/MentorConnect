import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from local storage

        if (!token) {
          // If no token, redirect to login
          window.location.href = '/login';
          return;
        }

        const response = await fetch('http://localhost:8008/api/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (response.ok) {
          setUser(data);
        } else {
          alert('Failed to fetch user data');
          // Redirect to login if there's an error
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Username: {user.username}</h3>
    </div>
  );
}

export default Dashboard;
