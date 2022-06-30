import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // console.log(exercises); // only appear when you serach something

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: "1800px", behavior: "smooth" });
  };
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px" ml="50px">
        Showing Results
      </Typography>
      <Stack
        flexDirection="row"
        spacing={{ lg: 11, xs: 5 }}
        flexWrap="wrap"
        justifyContent={{ xs: "center", sm: "space-between" }}
        px="50px"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
          // <p>{exercises.name}</p>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
