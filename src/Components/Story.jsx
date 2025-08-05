// import React, { useState } from "react";

const Story = ({name,img,des,pag,color}) => {
  return (
    <div className="w-[600px] flex justify-center items-center h-[215px] border p-[20px] rounded-md" style={{backgroundColor: `#${color}`}}>
      <div>
        <div className="flex gap-[20px]  mb-[10px] items-center ">
          <img className="w-[80px] rounded-[50%]" src={img} />

          <div className="text-left "> 
          <p className="text-[18px]">{name}</p> 
        
          <p> {des}</p>
          </div>

        </div>
        <div className="italic text-[20px]" >
          {pag}
        </div>
      </div>
    </div>
  );
};

export default Story;
