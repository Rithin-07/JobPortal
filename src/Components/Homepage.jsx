import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const jobs = [
    { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications using various technologies.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCcpluLnXTTwm0MibtXIRPKMorXN2AfmEmg&s' },
    { id: 2, title: 'Data Scientist', description: 'Analyze data and build machine learning models to drive business insights.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryewszLlb-L1TT5-E2Ncv2xeR9vOCvWvYNA&s' },
    { id: 3, title: 'AI/ML Engineer', description: 'Focus on AI and machine learning projects, including model building and deployment.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VYDdfdQ-G3SCnKQP7elujhKwr2E3UZTV1g&s' },
    { id: 4, title: 'Web Developer', description: 'Design and develop responsive web applications using modern frameworks and technologies.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWzl1_ddZQbo3jxYX-dO_-lu0_pnFZc0fgQ&s' },
    { id: 5, title: 'Embedded Systems Engineer', description: 'Work on designing and implementing embedded systems for various applications.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0SGb4ahEPiHdwMR4rkwDJI4FGZetin_8Sg&s' },
    { id: 6, title: 'System Administrator', description: 'Manage and maintain IT infrastructure, including servers, networks, and systems.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNeix60FPcWV7umMijC_J2Nee04wllDY0Aw&s' },
    { id: 7, title: 'DevOps Engineer', description: 'Integrate development and operations to improve deployment processes and system reliability.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnw3DymFKuYYlnMZ0W1EkiGa9-IAGhAsSYKA&s' },
    { id: 8, title: 'Cloud Engineer', description: 'Design and manage cloud-based solutions using platforms like AWS, Azure, or Google Cloud.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnOJptUhvB6D1dXB29DW7cfBgG95--B6icA&s' },
    { id: 9, title: 'Cybersecurity Analyst', description: 'Protect systems and data from cyber threats and ensure compliance with security protocols.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYF-PzEE6QCR5NojeRcUDhZUb_KyARD8B-w&s' },
    { id: 10, title: 'Database Administrator', description: 'Manage and optimize databases, including designing schema and performing backups.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNFzL5r8k39rJgUCO9r9VTqZZjBb0WqfqEA&s' },
    { id: 11, title: 'UX/UI Designer', description: 'Create user-centric designs for web and mobile applications, ensuring an intuitive user experience.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUTn5cx0Yi0ion88N0MSvnZTE5xk4dj_a-A&s' },
    { id: 12, title: 'Network Engineer', description: 'Design, implement, and manage network infrastructure to ensure efficient and secure data flow.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68NTGVTejrf3d7KPdyM1DvKQf8H9lLjqNBA&shttps://www.example.com/network_engineer.jpg' },
    // { id: 13, title: 'Business Analyst', description: 'Analyze business needs and requirements to provide data-driven recommendations for improvement.', image: 'https://www.example.com/business_analyst.jpg' },
    // { id: 14, title: 'Product Manager', description: 'Oversee the development and launch of products, managing cross-functional teams to achieve product goals.', image: 'https://www.example.com/product_manager.jpg' },
    // { id: 15, title: 'Marketing Specialist', description: 'Develop and implement marketing strategies to promote products and services effectively.', image: 'https://www.example.com/marketing_specialist.jpg' },
    // { id: 16, title: 'Technical Support Specialist', description: 'Provide technical assistance and support to resolve customer issues with software and hardware products.', image: 'https://www.example.com/technical_support_specialist.jpg' },
    // { id: 17, title: 'Sales Engineer', description: 'Combine technical knowledge with sales skills to provide pre-sales and post-sales support to clients.', image: 'https://www.example.com/sales_engineer.jpg' },
    // { id: 18, title: 'Content Writer', description: 'Create engaging and informative content for websites, blogs, and marketing materials.', image: 'https://www.example.com/content_writer.jpg' },
    // { id: 19, title: 'Data Analyst', description: 'Interpret and analyze complex data sets to help businesses make informed decisions.', image: 'https://www.example.com/data_analyst.jpg' },
    // { id: 20, title: 'Systems Analyst', description: 'Evaluate and improve IT systems to meet business requirements and enhance operational efficiency.', image: 'https://www.example.com/systems_analyst.jpg' },
];

const PageContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
}));

const JobCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[5],
    },
}));

const CardImage = styled(CardMedia)({
    paddingTop: '56.25%', // 16:9 aspect ratio
});

const CardContentStyled = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#2b7a0b',
    color: 'white',
    '&:hover': {
        backgroundColor: '#1e5a07',
    },
}));

const Homepage = () => {
    return (
        <PageContainer maxWidth="lg">
            <Typography variant="h2" gutterBottom align="center">Available Jobs</Typography>
            <Grid container spacing={4}>
                {jobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.id}>
                        <JobCard>
                            <CardImage
                                image={job.image}
                                title={job.title}
                            />
                            <CardContentStyled>
                                <Typography variant="h6" gutterBottom>{job.title}</Typography>
                                <Typography variant="body2" color="textSecondary">{job.description}</Typography>
                            </CardContentStyled>
                            <CardActions>
                                <StyledButton component={Link} to={`/job/${job.id}`} variant="contained" fullWidth>
                                    View Details
                                </StyledButton>
                            </CardActions>
                        </JobCard>
                    </Grid>
                ))}
            </Grid>
        </PageContainer>
    );
};

export default Homepage;
