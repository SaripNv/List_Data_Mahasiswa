import React from "react";
import { useParams, Link } from "react-router-dom";
import "./StudentDetail.css";

const StudentDetail = ({ students }) => {
  const { id } = useParams();
  const studentId = parseInt(id);
  const student = students.find((student) => student.id === studentId);
  if (!student) {
    return <div className="student-detail">Mahasiswa tidak ditemukan</div>;
  }

  return (
    <div className="student-detail">
      <h2>Detail Mahasiswa</h2>
      <div className="student-detail-content">
        <div className="student-photo-container">
          <img
            src={`/assets/${student.photo}`}
            alt={student.name}
            className="student-photo"
          />
        </div>
        <div className="student-info">
          <p>
            <strong>Nama:</strong> {student.name}
          </p>
          <p>
            <strong>Umur:</strong> {student.age}
          </p>
          <p>
            <strong>Jurusan:</strong> {student.major}
          </p>
        </div>
      </div>
      <Link to="/" className="back-button">
        Kembali
      </Link>
    </div>
  );
};

export default StudentDetail;
