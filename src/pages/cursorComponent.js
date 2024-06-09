import React from "react";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";


const Cursor = () => {
  return (
    <CustomCursor
      targets={["a"]}
      customClass="custom-cursor"
      dimensions={50}
      fill="#4bffa5"
      smoothness={{
        movement: 0.2,
        scale: 0.1,
        opacity: 0.2,
      }}
      targetOpacity={0.2}
      targetScale={3}
    />
  );
};
export default Cursor;
