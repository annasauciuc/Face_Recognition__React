import React from "react";

const FaceRecognition = ({imageUrl}) => {
  return (
    <div className='center'>
    <div className="absolute mt2">
        <img src={imageUrl} width='250px' height="auto" alt="boys"/></div>
    </div>
  );
};
export default FaceRecognition;