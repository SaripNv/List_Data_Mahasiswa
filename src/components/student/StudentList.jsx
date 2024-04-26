import React from "react";
import { Link } from "react-router-dom";
import "./StudentList.css";

const StudentList = ({ students }) => {
  return (
    <div className="student-list-container">
      <h2 className="student-list-title">Daftar Mahasiswa</h2>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <img
              src={`/assets/${student.photo}`}
              alt={student.name}
              className="student-photo"
            />
            <div className="student-info">
              <div className="student-name">{student.name}</div>
              <div className="student-major">{student.major}</div>
              <Link to={`/detail/${student.id}`} className="student-detail-btn">
                Detail
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
