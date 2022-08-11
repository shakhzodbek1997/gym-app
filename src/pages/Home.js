import React, {useState} from 'react'; /*we need the useState -> because there will be some logic */
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [ bodyPart, setBodyPart ] = useState('all')
  const [ exercises, setExercises ] = useState([]);
  return (
    <Box>  {/** Wrap everything with Box */}
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home