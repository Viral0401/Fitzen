import React, { useState } from "react";
import Button from "@mui/material/Button";


const Personal = () => {
  const [formData, setFormData] = useState({
    diseasesHistory: "",
    injuries: "",
  });

  const handleFieldChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };


  const saveDetails = () => {

    console.log(formData);
  };

  return (
    <div className="justify-center">
      <div className="px-10 flex items-center justify-around">
        <div className="flex items-start justify-around gap-16 w-full">

          <div>
            <p className='md:text-xl mt-10 text-lg font-semibold text-center md:text-left p-2'>Please enter any previous diseases...</p>
            <textarea className='resize rounded-md border-2 border-black md:p-5 p-2' name="" id="" cols="50" rows="5"
            onChange={(e) => handleFieldChange('diseasesHistory', e.target.value)}></textarea>
          </div>
          <div>
            <p className='md:text-xl mt-10  text-lg font-semibold text-center md:text-left p-2'>Please enter any previous injuries...</p>
            <textarea className='resize rounded-md border-2 border-black md:p-5 p-2' name="" id="" cols="50" rows="5"
            onChange={(e) => handleFieldChange('injuries', e.target.value)} ></textarea>
          </div>
        </div>
      </div>


      <div className="w-full flex items-center justify-center mt-20">
        <Button
          style={{paddingLeft: "36px", paddingRight: "36px", paddingTop: "12px", paddingBottom: "12px"}}
          className=" text-white text-xl font-bold flex items-center justify-center gap-5  group "
          variant="contained"
          onClick={saveDetails}
        >
          Save Details
        </Button>
      </div>
    </div>
  );
};

export default Personal;
