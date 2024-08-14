import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Requesttutor.css';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Grid,
  FormLabel,
  Checkbox,
  FormHelperText
} from '@mui/material';

const industries = ['IT', 'Healthcare', 'Education', 'Finance', 'Marketing'];
const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad'];

const RequestTutor = () => {
  const [step, setStep] = useState(1);
  const [preferredIndustry, setPreferredIndustry] = useState('');
  const [preferredRole, setPreferredRole] = useState('');
  const [bio, setBio] = useState('');
  const [relocation, setRelocation] = useState(false);
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contactVia, setContactVia] = useState('');

  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 3) {
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (step === 3) {
      const requestData = {
        preferredIndustry,
        preferredRole,
        bio,
        relocation,
        city,
        locality,
        address,
        firstName,
        lastName,
        gender,
        yearOfBirth,
        contactNumber,
        email,
        contactVia
      };

      try {
        const response = await fetch('http://localhost:8080/registerjobseeker', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error from server:', errorText);
          throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
        }

        alert('Registration submitted successfully!');
        navigate('/profile');
      } catch (error) {
        console.error('Error submitting the registration:', error);
        alert('Error submitting the registration: ' + error.message);
      }
    }
  };

  return (
    <div className="register-job-seeker">
      <div className="registration-container">
        <div className='image-container'></div>
        {step === 1 && (
          <Box className="form-container">
            <h1>Register as a Job Seeker</h1>
            <p>Submit your details and start applying for jobs</p>

            <FormControl fullWidth margin="normal" error={!preferredIndustry}>
              <InputLabel id="industry-select-label">Preferred Industry</InputLabel>
              <Select
                labelId="industry-select-label"
                id="industry-select"
                value={preferredIndustry}
                onChange={(e) => setPreferredIndustry(e.target.value)}
              >
                {industries.map((industry) => (
                  <MenuItem key={industry} value={industry}>{industry}</MenuItem>
                ))}
              </Select>
              {!preferredIndustry && <FormHelperText>Please select an industry.</FormHelperText>}
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Preferred Role"
              value={preferredRole}
              onChange={(e) => setPreferredRole(e.target.value)}
              placeholder="Enter your preferred job role"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Brief Bio (optional)"
              multiline
              rows={4}
              variant="outlined"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter a brief bio or career summary"
            />

            <FormControlLabel
              control={<Checkbox checked={relocation} onChange={(e) => setRelocation(e.target.checked)} />}
              label="I am willing to relocate."
            />

            <Box className="navigation-links">
              <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: '#009688', color: 'white', '&:hover': { backgroundColor: '#00796b' } }}
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
            </Box>
          </Box>
        )}

        {step === 2 && (
          <Box className="form-container">
            <h1>Register as a Job Seeker</h1>
            <p>Submit your details and start applying for jobs</p>

            <FormControl fullWidth margin="normal">
              <InputLabel id="city-select-label">Select your city</InputLabel>
              <Select
                labelId="city-select-label"
                id="city-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <MenuItem value="" disabled>Select your city</MenuItem>
                {cities.map((cityItem) => (
                  <MenuItem key={cityItem} value={cityItem}>{cityItem}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              multiline
              rows={4}
              placeholder="Enter your address"
            />

            <Box className="navigation-links">
              <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: '#009688', color: 'white', '&:hover': { backgroundColor: '#00796b' } }}
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
              <br/><br/>
              <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: 'white', color: 'teal', '&:hover': { backgroundColor: '#00796b',color:"white" } }}
                variant="contained"
                onClick={handlePrevious}
              >
                Previous
              </Button>
            </Box>
          </Box>
        )}

        {step === 3 && (
          <Box className="form-container">
            <h1>Register as a Job Seeker</h1>
            <p>Submit your details and start applying for jobs</p>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              margin="normal"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Year of Birth"
              value={yearOfBirth}
              onChange={(e) => setYearOfBirth(e.target.value)}
              type="number"
            />

            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="gender-radio-group"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel id="contact-via-label">Preferred Contact Method</InputLabel>
              <Select
                labelId="contact-via-label"
                id="contact-via-select"
                value={contactVia}
                onChange={(e) => setContactVia(e.target.value)}
              >
                <MenuItem value="Phone">Phone</MenuItem>
                <MenuItem value="Email">Email</MenuItem>
              </Select>
            </FormControl>
            
            <Box className="navigation-links">
              <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: '#009688', color: 'white', '&:hover': { backgroundColor: '#00796b' } }}
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <br/><br/>
              <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: 'white', color: 'teal', '&:hover': { backgroundColor: '#00796b',color:"white" } }}
                variant="contained"
                onClick={handlePrevious}
              >
                Previous
              </Button>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default RequestTutor;
