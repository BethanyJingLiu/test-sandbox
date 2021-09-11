const Employee = (props) => {
  const { firstName, middleName, lastName, id } = props;
  return (
    <div>
      <h2>
        {firstName} {middleName} {lastName} ID: {id}
      </h2>
    </div>
  );
};

export default Employee;
