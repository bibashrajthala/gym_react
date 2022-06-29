import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from "../BodyPart/BodyPart";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";
import RightArrowIcon from "../../assets/icons/right-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div style={{ width: "100%" }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {/* {item} */}
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))}
      </ScrollMenu>
    </div>
    // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    //   {data.map((item) => (
    //     <Box
    //       key={item.id || item}
    //       itemId={item.id || item}
    //       title={item.id || item}
    //       m="0 40px"
    //     >
    //       {/* {item} */}
    //       <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    //     </Box>
    //   ))}
    // </ScrollMenu>
  );
};

export default HorizontalScrollBar;