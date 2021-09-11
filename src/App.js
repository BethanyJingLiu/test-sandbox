import { useState } from "react";
import Employee from "./Employee";
import "./styles.css";

export default function App() {
  const employeesGroup1 = [
    {
      id: "1-1",
      firstName: "Bethany",
      lastName: "Liu",
      age: "40"
    },
    {
      id: "1-2",
      firstName: "Alex",
      lastName: "Kuleshov",
      age: "28"
    },
    {
      id: "1-3",
      firstName: "Patricia",
      middleName: "Pinto",
      lastName: "Rodrigues",
      age: "25"
    },
    {
      id: "1-4",
      firstName: "George",
      lastName: "Min",
      age: "60"
    }
  ];

  const employeesGroup2 = [
    {
      id: "2-1",
      firstName: "Victoria",
      lastName: "Thomas",
      age: "26"
    },
    {
      id: "2-2",
      firstName: "Bram",
      lastName: "Jansen",
      age: "26"
    },
    {
      id: "2-3",
      firstName: "Romy",
      lastName: "Snel",
      age: "25"
    },
    {
      id: "2-4",
      firstName: "Lisa",
      lastName: "Bass",
      age: "28"
    }
  ];

  const employees = [...employeesGroup1, ...employeesGroup2];

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to the App</h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log out" : "Log in"}
      </button>
      {loggedIn ? (
        <>
          {employees.map((employee) => (
            <Employee
              key={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              id={employee.id}
            />
          ))}
        </>
      ) : (
        <h2>Sorry the employees are at home now</h2>
      )}
    </div>
  );
}
