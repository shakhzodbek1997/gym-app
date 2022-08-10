import React, {useState} from 'react'; /*we need the useState -> because there will be some logic */
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  return (
    <Box>  {/** Wrap everything with Box */}
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home