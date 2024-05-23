import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (event) => { 
    const { name, value } = event.target; // trong handleChange có adtribute gì thì lấy ra adtribute đó
    setFormData((prevFormData) => ({ // lưu lại data cũ
      ...prevFormData,
      [name]: value     
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type='tel' name='phone' value={formData.phone} onChange={handleChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
