import React from "react";

import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];
  return (
    <Stack
      spacing={6}
      flexDirection={{ lg: "row" }} // stack has default direction of column, so for lg it will be row
      p="20px"
      alignItems="center"
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack spacing={{ lg: 3.5, xs: 2 }} px="50px">
        <Typography
          variant="h3"
          sx={{ color: "#ff2526", textTransform: "capitalize" }}
        >
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> is one of
          the best execises to target your {target}. It will help you improve
          your mood and gain energy.
        </Typography>

        {extraDetail.map((item, index) => (
          <Stack key={index} direction="row" alignItems="center" spacing={2.4}>
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} alt={bodyPart} />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
