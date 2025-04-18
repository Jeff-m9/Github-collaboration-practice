import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const handleFetch = () => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
  };

  useEffect(() => {
    handleFetch()
  }, []);

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <h1>{student.name}</h1>
          <p>{student.stream}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
