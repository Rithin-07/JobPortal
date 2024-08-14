import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './CSS/BecomeTutor.css';
// import BackgroundImage from '../Assets/becomet.png';

const BecomeTutor = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [certificate, setCertificate] = useState(null);
    const [experience, setExperience] = useState('');
    const [expectedSalary, setExpectedSalary] = useState('');
    const [availableHoursStart, setAvailableHoursStart] = useState('');
    const [availableHoursEnd, setAvailableHoursEnd] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (firstName && lastName && experience && expectedSalary && availableHoursStart && availableHoursEnd && department) {
                const formData = new FormData();
                formData.append('firstName', firstName);
                formData.append('lastName', lastName);
                formData.append('certificate', certificate);
                formData.append('experience', experience);
                formData.append('expectedSalary', expectedSalary);
                formData.append('availableHoursStart', availableHoursStart);
                formData.append('availableHoursEnd', availableHoursEnd);
                formData.append('department', department);

                await axios.post('http://localhost:8080/becomet', {
                    firstName,
                    lastName,
                    certificate: certificate ? certificate.name : null,
                    experience,
                    expectedSalary,
                    availableHoursStart,
                    availableHoursEnd,
                    department
                });

                alert('Tutor application submitted successfully');
                navigate('/homepage');
                console.log("in");
            } else {
                alert('Please fill in all the fields.');
            }
        } catch (error) {
            alert('Error submitting tutor application:', error);
        }
    };

    const handleFileChange = (e) => {
        setCertificate(e.target.files[0]);
    };

    return (
        <div className="become-tutor-container">
        <Container maxWidth="sm">
            <Box className="become-tutor-box"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 5,
                    p: 3,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    boxShadow: 2,
                    marginBottom: 3,
                    
                }}
            >
                
                <Typography variant="h4" component="h1" gutterBottom>
                    Apply for Vacancy
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <input
                                accept=".pdf"
                                style={{ display: 'none' }}
                                id="certificate-upload"
                                type="file"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="certificate-upload">
                                <Button
                                    variant="contained"
                                    component="span"
                                    fullWidth
                                >
                                    Upload Certificate (PDF)
                                </Button>
                            </label>
                            {certificate && <Typography variant="body2" align="center" color="textSecondary">{certificate.name}</Typography>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Experience"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Expected Salary"
                                type="number"
                                value={expectedSalary}
                                onChange={(e) => setExpectedSalary(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Available Hours Start (HH:mm)"
                                type="time"
                                value={availableHoursStart}
                                onChange={(e) => setAvailableHoursStart(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Available Hours End (HH:mm)"
                                type="time"
                                value={availableHoursEnd}
                                onChange={(e) => setAvailableHoursEnd(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
        </div>
    );
};

export default BecomeTutor;
