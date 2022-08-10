import React from 'react';
import { Box, Typography, Button } from '@mui/material';  /** Typography is a style for texts */

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box 
      sx={{
        mt:{
          lg: '212px', 
          xs: '70px'
        },
        ml: {
          sm: '50px'
        }
      }}
      position="relative"
      p="26px"
    >
      <Typography 
        color="#FF2625"
        fontWeight="600"
        fontSize='26px'
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ 
          fontSize: { 
            lg: '44px', 
            xs: '40px'
          }
        }}
        mb="23px" mt="30px"
      >
        Sweat, Smile <br/> and Repeat
      </Typography>
      
      <Typography 
        fontSize="22px"
        lineHeight="35px"
        mb={4}
      >
        Check out the most Effective exercises personalized to you
      </Typography>
      
      
      <Button 
        href="#exercises"
        variant='contained'
        color="error"
        sx={{
          backgroundColor: '#FF2625',
          padding: "10px"
        }}
      >
        Explore Exercises 
      </Button>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>

      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: {
            lg: 'block',
            xs: 'none'
          }
        }}
      >
        Exercises
      </Typography>

    </Box>
  )
}

export default HeroBanner;

