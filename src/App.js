import Employee from "./Employee";
import "./styles.css";

export default function App() {
  const employees = [
    {
      id: "1",
      firstName: "Bethany",
      lastName: "Liu",
      age: "40"
    },
    {
      id: "2",
      firstName: "Alex",
      lastName: "Kuleshov",
      age: "28"
    },
    {
      id: "3",
      firstName: "Patricia",
      middleName: "Pinto",
      lastName: "Rodrigues",
      age: "25"
    }
  ];
  return (
    <div className="App">
      <h1>Employees</h1>
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          firstName={employee.firstName}
          middleName={employee.middleName}
          lastName={employee.lastName}
          id={employee.id}
        />
      ))}
    </div>
  );
}
