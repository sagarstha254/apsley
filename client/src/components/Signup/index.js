import React, { useState } from 'react';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., submit it to a server or dispatch a Redux action.
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signupcontainer">
      <div className="signupform">
        <form onSubmit={handleSubmit}>
          <div className="formgroup">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="formgroup">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="formgroup">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="formgroup">
            <label>Role:</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className="submitbutton" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
