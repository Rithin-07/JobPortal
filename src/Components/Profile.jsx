import React, { useState, useEffect } from 'react';
import './CSS/Profile.css'; // Assuming you have a CSS file for styling
import { TextField, Button, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual login check
  const navigate = useNavigate();

  // Fetch the profile data from the backend when the component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        console.log(storedUser);
        const user = JSON.parse(storedUser);

        const response = await axios.get('http://localhost:8080/api/all');

        const currentUser = response.data.find(student=>student.email===user.email);
        console.log(currentUser)
        if (currentUser) {
          setProfileData({
            id: currentUser.id,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            username: currentUser.username,
            email: currentUser.email,
            password: currentUser.password,
          });
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoggedIn(false);
      }
    };

    if (isLoggedIn) {
      fetchProfileData();
    }
  }, [isLoggedIn]);

  // Handle changes in the profile form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle save button click, sending updated profile data to the backend
  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      console.log('Updating profile data:', profileData);
      const updateResponse = await axios.put(
        `http://localhost:8080/student/updatestudent/${profileData.id}`,
        profileData
      );

      if (updateResponse.status === 200) {
        console.log('Profile data saved:', profileData);
        localStorage.setItem('user', JSON.stringify(profileData));
      } else {
        console.error('Error updating profile:', updateResponse.statusText);
      }
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  // Handle logout button click
  const handleLogout = () => {
    localStorage.removeItem('user');
    setProfileData({
      id: '',
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
    setIsLoggedIn(false);
    alert("Logged out of account!");
    navigate('/login');
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-banner"></div>
        <div className="profile-background">
          <div className="profile-content">
            <div className="profile-details">
              {isLoggedIn ? (
                <>
                  <div className="profile-header">
                    <PersonIcon fontSize="large" className="profile-avatar" />
                    <IconButton onClick={handleEditClick} color="primary">
                      <EditIcon />
                    </IconButton>
                    <div className="profile-header-text">
                      <Typography variant="h4" gutterBottom>
                        Hi {profileData.firstName} {profileData.lastName}!
                      </Typography>
                    </div>
                  </div>
                  <div className="profile-info">
                    <TextField
                      label="First Name"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Username"
                      name="username"
                      value={profileData.username}
                      onChange={handleChange}
                      disabled={!isEditing}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Password"
                      name="password"
                      value={profileData.password}
                      onChange={handleChange}
                      disabled={!isEditing}
                      type={isEditing ? "text" : "password"}
                      fullWidth
                      margin="normal"
                    />
                  </div>
                  {isEditing && (
                    <div className="profile-actions">
                      <Button
                        onClick={handleSaveClick}
                        variant="contained"
                        color="primary"
                        startIcon={<SaveIcon />}
                        className="action-button"
                      >
                        Save
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <Typography variant="h6" align="center">
                  Please log in to view your profile.
                </Typography>
              )}
              <div className="profile-actions">
                {isLoggedIn && (
                  <Button
                    onClick={handleLogout}
                    variant="outlined"
                    color="secondary"
                    startIcon={<LogoutIcon />}
                    className="action-button"
                  >
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
