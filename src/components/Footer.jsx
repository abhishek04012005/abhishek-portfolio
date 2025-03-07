
import React from 'react';
// import { useState } from 'react'
import { Box, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, YouTube, GitHub } from '@mui/icons-material';
import '../App.css';
import { SectionWrapper } from '../hoc';


const Footer = () => {

    // const [menu, setMenu] = useState("portfolio");

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '',
                paddingTop: 3,
            }}
        >





            {/* Navigation Links */}
            <Box className="footer-link">
                <ul>
                    <li > <Link to="/portfolio" >
                        Portfolio
                    </Link> </li>
                    <li > <Link to="/weddingwebsite">
                        Wedding Website
                    </Link> </li>
                    <li ><Link to="/birthdaywebsite">
                        Birthday Website
                    </Link> </li>
                    <li ><Link to="/birthdaytemplate">
                        Birthday Template
                    </Link> </li>
                    <li ><Link to="/weddingtemplate">
                        Wedding Template
                    </Link></li>
                </ul>
            </Box>



            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton color="inherit">
                    <a href="https://facebook.com/" target="_blank">
                        <Facebook />
                    </a>
                </IconButton>
                <IconButton color="inherit">
                    <a href="https://twitter.com/" target="_blank">
                        <GitHub />
                    </a>
                </IconButton>
                <IconButton color="inherit">
                    <a href="https://www.instagram.com/" target="_blank">
                        <Instagram />
                    </a>
                </IconButton>
                <IconButton color="inherit">
                    <a href="https://www.linkedin.com/" target="_blank">
                        <LinkedIn />
                    </a>
                </IconButton>
                <IconButton color="inherit">
                    <a href="https://www.youtube.com/" target="_blank">
                        <YouTube />
                    </a>
                </IconButton>
            </Box>



        </Box>
    );
};

export default SectionWrapper(Footer, "");

// export default Footer;
