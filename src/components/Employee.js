import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [employee, setEmployee] = useState({
    name: '',
    location: '',
    salary: ''
  });

  function EmployeeData(e) {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h1>Welcome to Employee Component</h1>
      <p>
        <label>
          Employee name :
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={EmployeeData}
          />
        </label>
      </p>
      <p>
        <label>
          Employee location :
          <input
            type="text"
            name="location"
            value={employee.location}
            onChange={EmployeeData}
          />
        </label>
      </p>
      <p>
        <label>
          Employee Salary :
          <input
            type="text"
            name="salary"
            value={employee.salary}
            onChange={EmployeeData}
          />
        </label>
      </p>
      <p>
        Entered name is : <b>{employee.name}</b>
      </p>
      <br />
      <p>
        Entered location is : <b>{employee.location}</b>
      </p>
      <br />
      <p>
        Entered Salary is : <b>{employee.salary}</b>
      </p>
      <NavLink to="/home">go back</NavLink>
    </div>
  );
}

export default Home;
