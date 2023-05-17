import React, { useState } from 'react';
import { Button } from '@mui/material';

const Generic_Form = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: '', secondName: '' },
  ]);
  const [showMaxFieldsMessage, setShowMaxFieldsMessage] = useState(false);

  const handleChange = (index, fieldName, event) => {
    const values = [...inputFields];
    values[index][fieldName] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    if (inputFields.length < 4) {
      const values = [...inputFields];
      values.push({ firstName: '', secondName: '' });
      setInputFields(values);
    } else {
      setShowMaxFieldsMessage(true);
    }
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setShowMaxFieldsMessage(false); // Reset the message when removing a field
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
          value={field.firstName}
          onChange={(event) => handleChange(index, 'firstName', event)}
          placeholder="First Name"
          style={{ padding: "10px", backgroundColor: '#9E9E9E', margin: '10px', borderRadius: "10px" }}
        />
        <input
          type="text"
          value={field.secondName}
          onChange={(event) => handleChange(index, 'secondName', event)}
          placeholder="Second Name"
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
        {inputFields.length < 4 && !showMaxFieldsMessage && (
          <Button type="button" onClick={() => handleAddFields()}>
            Add Field
          </Button>
        )}
        {showMaxFieldsMessage && <p>You cannot add more fields</p>}
        <br />
        <Button type="submit" sx={{ width: "200px", mt: 4 }}>Submit</Button>
      </form>
    </div>
  );
};

export default Generic_Form;