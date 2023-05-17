import React, { useState } from 'react';
import { Button } from '@mui/material'

const Generic_Form = () => {
  const [inputFields, setInputFields] = useState([{ value: '' }]);

  const handleChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ value: '' });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields); // Do something with the data

  };

  const renderInputFields = () => {
    return inputFields.map((field, index) => (
      <div key={index}>
        <input
          type="text"
          value={field.value}
          onChange={(event) => handleChange(index, event)}
          style={{ padding: "10px", backgroundColor: '#9E9E9E', margin: '10px', borderRadius: "10px" }}
        />
        <Button type="button" onClick={() => handleRemoveFields(index)}>
          Remove
        </Button>
      </div>
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderInputFields()}
        <Button type="button" onClick={() => handleAddFields()}>
          Add Field
        </Button> <br />
        <Button type="submit" sx={{ width: "200px", mt: 4 }}>Submit</Button>
      </form>
    </div>
  );
};

export default Generic_Form;