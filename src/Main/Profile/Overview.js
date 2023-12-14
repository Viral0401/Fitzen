// Overview.jsx

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Select } from '@mui/material';

const Overview = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    email: '',
    height: '',
    weight: '',
    diseasesHistory: '',
    injuries: '',
    weightLoss: '',
    weightGain: '',
  });

  const handleFieldChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const saveDetails = () => {
    // Access formData and send it to the backend
    console.log(formData);
  };

  return (
    <div className="justify-center">
      <div className="px-10 flex items-center justify-around">
        <div className="flex flex-col items-center justify-around gap-16">
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
          <TextField
            id="Age"
            label="Age"
            variant="outlined"
            type="number"
            onChange={(e) => handleFieldChange('age', e.target.value)}
          />
          <TextField
            id="PhoneNumber"
            label="Phone Number"
            variant="outlined"
            type="number"
            onChange={(e) => handleFieldChange('phoneNumber', e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center justify-around gap-16">
          <TextField
            id="Email"
            label="Email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
          <TextField
            id="Height"
            label="Height"
            variant="outlined"
            onChange={(e) => handleFieldChange('height', e.target.value)}
          />
          <TextField
            id="Weight"
            label="Weight"
            variant="outlined"
            onChange={(e) => handleFieldChange('weight', e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center justify-around gap-16">
          <FormControl sx={{ minWidth: 225 }}>
            <InputLabel id="WeightLoss">Weight Loss</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="WeightLoss"
              value={formData.weightLoss}
              label="Weight Loss"
              onChange={(e) => handleFieldChange('weightLoss', e.target.value)}
            >
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 225 }}>
            <InputLabel id="WeightGain">Weight Gain</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="WeightGain"
              value={formData.weightGain}
              label="Weight Gain"
              onChange={(e) => handleFieldChange('weightGain', e.target.value)}
            >
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="w-full flex items-center justify-center my-10">
        <Button
          style={{
            paddingLeft: '36px',
            paddingRight: '36px',
            paddingTop: '12px',
            paddingBottom: '12px',
          }}
          className="text-white text-xl font-bold flex items-center justify-center gap-5 group"
          variant="contained"
          onClick={saveDetails}
        >
          Save Details
        </Button>
      </div>
    </div>
  );
};

export default Overview;
