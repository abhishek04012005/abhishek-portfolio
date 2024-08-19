// Footer.js
import React from 'react';
import { Box, Button, IconButton, Link } from '@mui/material';
import Divider from '@mui/material/Divider';
// import { SectionWrapper } from "../hoc";
import { Facebook, Twitter, Instagram, LinkedIn, YouTube, GitHub } from '@mui/icons-material';


const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '',
                padding: 3,
            }}
        >


            <div className='flex flex-col justify-center items-center mt-5'>
                <div sx={{

                }} />
            </div>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: 1200,
                    flexWrap: 'wrap',
                    mb: 3,
                }}
            >


                {/* Buttons */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="contained" color="primary">
                        Download
                    </Button>
                    <Button variant="outlined" color="primary">
                        Contact Me
                    </Button>
                </Box>
                {/* Navigation Links */}
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <Link href="#" color="inherit" sx={{ margin: 1, listStyle: 'none' }}>
                        Wedding 
                    </Link>
                    <Link href="#" color="inherit" sx={{ margin: 1 }}>
                        A
                    </Link>
                    <Link href="#" color="inherit" sx={{ margin: 1 }}>
                        Services
                    </Link>
                    <Link href="#" color="inherit" sx={{ margin: 1 }}>
                        Blog
                    </Link>
                    <Link href="#" color="inherit" sx={{ margin: 1 }}>
                        Contact
                    </Link>
                </Box>



                {/* Social Media Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit">
                        <a href="https://www.canva.com/templates/" target="_blank">
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


        </Box>
    );
};

// export default SectionWrapper(Footer, "");

export default Footer;
