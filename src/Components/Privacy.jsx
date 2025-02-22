import React, { useState } from 'react';
import './CSS/Privacy.css'; // Ensure to import the CSS file
// import Footer from '../Footer/Footer';
import { Info as InfoIcon, AccountCircle as AccountCircleIcon, CalendarToday as CalendarTodayIcon, Payment as PaymentIcon, Security as SecurityIcon, PrivacyTip as PrivacyTipIcon, Work as WorkIcon, Warning as WarningIcon, Edit as EditIcon, Gavel as GavelIcon, ContactSupport as ContactSupportIcon } from '@mui/icons-material';
// import Navbar from '../Navbar/Navbar';

const termsData = [
  {
    header: 'Introduction',
    icon: <InfoIcon className="terms-icon" />,
    content: `Welcome to JobPortal, your go-to platform for job search and recruitment. By using our services, you agree to abide by the following Terms and Conditions. If you do not agree with these terms, please refrain from using our platform.`,
  },
  {
    header: 'Account Registration',
    icon: <AccountCircleIcon className="terms-icon" />,
    content: `To use JobPortal, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.`,
  },
  {
    header: 'User Responsibilities',
    icon: <WorkIcon className="terms-icon" />,
    content: `
      - **Job Seekers**: You agree to provide accurate information regarding your qualifications and to use the platform in a manner that respects other users.
      - **Employers**: You agree to provide accurate information about job listings and to conduct the recruitment process professionally and respectfully.
    `,
  },
  {
    header: 'Job Applications and Interviews',
    icon: <CalendarTodayIcon className="terms-icon" />,
    content: `
      - **Application**: Job seekers can apply for jobs listed on the platform by submitting their resumes and other required documents.
      - **Interview Scheduling**: Employers can schedule interviews through the platform. Both parties are responsible for timely communication.
      - **Rescheduling**: Job seekers and employers can reschedule interviews subject to mutual agreement. Please update the scheduling details on the platform.
    `,
  },
  {
    header: 'Payment',
    icon: <PaymentIcon className="terms-icon" />,
    content: `
      - **Fees**: Payments for premium services on the platform are handled through JobPortal. The platform charges a service fee for certain features.
      - **Refunds**: Refunds are available for cancellations made in accordance with the cancellation policy. Refund requests are subject to review and approval.
    `,
  },
  {
    header: 'Conduct and Behavior',
    icon: <SecurityIcon className="terms-icon" />,
    content: `
      - **Professionalism**: All interactions on JobPortal must be conducted professionally. Harassment, abuse, or any form of inappropriate behavior will not be tolerated.
      - **Content**: You are responsible for the content you share on the platform. JobPortal reserves the right to remove any content that violates our policies.
    `,
  },
  {
    header: 'Privacy',
    icon: <PrivacyTipIcon className="terms-icon" />,
    content: `
      - **Data Collection**: We collect and use personal information as described in our Privacy Policy. By using JobPortal, you consent to our data collection practices.
      - **Confidentiality**: Personal information shared during the job application process is confidential and should not be disclosed without consent.
    `,
  },
  {
    header: 'Intellectual Property',
    icon: <EditIcon className="terms-icon" />,
    content: `All content, trademarks, and other intellectual property on JobPortal are the property of JobPortal or its licensors. You may not use, reproduce, or distribute any content without prior written permission.`,
  },
  {
    header: 'Limitation of Liability',
    icon: <WarningIcon className="terms-icon" />,
    content: `JobPortal is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our liability is limited to the maximum extent permitted by law.`,
  },
  {
    header: 'Changes to Terms',
    icon: <EditIcon className="terms-icon" />,
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective when posted on the platform. Your continued use of JobPortal constitutes acceptance of the updated terms.`,
  },
  {
    header: 'Termination',
    icon: <GavelIcon className="terms-icon" />,
    content: `We may suspend or terminate your access to JobPortal if you violate these Terms and Conditions or engage in behavior that disrupts the platform.`,
  },
  {
    header: 'Governing Law',
    icon: <GavelIcon className="terms-icon" />,
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from the use of JobPortal will be resolved in the courts of [Your Country/State].`,
  },
  {
    header: 'Contact Us',
    icon: <ContactSupportIcon className="terms-icon" />,
    content: `For any questions or concerns regarding these Terms and Conditions, please contact us at [Your Contact Information].`,
  },
];

const Privacy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div>
      {/* <Navbar/> */}
    <div className="terms-container">
      {termsData.map((section, index) => (
        <div key={index} className="terms-section">
          <div className="terms-header" onClick={() => toggleSection(index)}>
            {section.icon}
            {section.header}
          </div>
          <div className={`terms-content ${activeSection === index ? 'show' : ''}`}>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
      {/* <Footer/> */}
      </div>
  );
};

export default Privacy;
