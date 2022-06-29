import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises); // only appear when you serach something
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        flexDirection="row"
        spacing={{ lg: 11, xs: 5 }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
          // <p>{exercises.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
