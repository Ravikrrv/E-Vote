import React, { useState } from 'react';
import './Footer.css'; // Importing CSS for styling
import logo from '../../assets/logoc.png'; // Replace with your logo
import axios from 'axios'; // Import axios for HTTP requests

const Footer = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/message/send', formData);
            console.log(response.data);
            // Handle success (e.g., show a success message, clear form, etc.)
        } catch (error) {
            console.error('Error sending message:', error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    {/* <img src={logo} alt="Organizing Community Logo" className="footer-logo" /> */}
                    <div className="community-info">
                        <h2>Organizing Community</h2>
                        <p>The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India. The body administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies in India, and the offices of the President and Vice President in the country.</p>
                        <h3>Nirvachan Sadan, Ashoka Road, New Delhi 110001</h3>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="query-form">
                        <h3>Send Us a Query</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group2">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="email">Email ID</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button className="footer-button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='hi'>
                <p>© Copyright Election Commission of India 2024</p>
            </div>
        </div>
    );
};

export default Footer;
