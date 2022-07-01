import React from "react";
import { Typography, Stack, Box } from "@mui/material";

import HorizontalScrollBar from "../HorizontalScrollBar/HorizontalScrollBar";
import Loader from "../Loader/Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  console.log(equipmentExercises);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" }, p: "30px" }}>
      <Typography variant="h3" mb="25px">
        Exercises that target the same muscle group
      </Typography>

      <Stack
        direction="row"
        sx={{ p: "2", position: "relative" }}
        justifyContent="center"
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mt="60px" mb="25px">
        Exercises that use same Equipment
      </Typography>

      <Stack
        direction="row"
        sx={{ p: "2", position: "relative" }}
        justifyContent="center"
      >
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
