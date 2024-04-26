import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./components/student/StudentList";
import StudentDetail from "./components/student/StudentDetail";

const App = () => {
  const [students] = useState([
    {
      id: 1,
      name: "Alvarez",
      age: 22,
      major: "Sistem Informasi",
      photo: "alvarez.jpg",
    },
    {
      id: 2,
      name: "Bunga",
      age: 22,
      major: "Seni dan Desain",
      photo: "bunga.jpg",
    },
    {
      id: 3,
      name: "Alice",
      age: 20,
      major: "Administrasi",
      photo: "alice.jpg",
    },
    {
      id: 4,
      name: "Alex",
      age: 23,
      major: "Hukum",
      photo: "alex.jpg",
    },
    {
      id: 5,
      name: "Mega",
      age: 21,
      major: "Komunikasi",
      photo: "mega.jpg",
    },
  ]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<StudentList students={students} />} />
          <Route
            path="/detail/:id"
            element={<StudentDetail students={students} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
