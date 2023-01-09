import React from "react";

const ImgCard = ({ img }) => {
  return (
    <div>
      <img src={img.imgThumb} alt="" />
    </div>
  );
};

export default ImgCard;
