import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('data/employeesdata.json')
      .then(res => res.json())
      .then(abc => {
        setEmployees(abc);
      });
  }, []);

  return (
    <div>
      <ul>
        <li className="right">
          <NavLink to="/login">Logout</NavLink>
        </li>
        <li>
          <NavLink to="/employee">Employee</NavLink>
        </li>
      </ul>
      <h1 className="mt-10 textCenter">Welcome to Home Component</h1>
      <table className="table table-hover mt-10">
        <thead>
          <tr className="ml-10 textCenter table-dark">
            <th>userId</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>region</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {employees.map(emp => (
            <tr key={emp.userId}>
              <td>{emp.userId}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
