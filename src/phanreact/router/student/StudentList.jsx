import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Rename this array to avoid conflicts with the component name
const students = [
  {
    id: 1,
    fullname: "Khoa Nguyen"
  },
  {
    id: 2,
    fullname: "Nguyen"
  },
  {
    id: 3,
    fullname: "Khoa"
  },
]

function StudentList() {
  useEffect(() => {
    return () => {
      console.log('Unmounted')
    }
  }, [])

  return (
    <>
      <div className="d-flex align-items-center">
        <h1 className="me-3">Student List</h1>
        <Link to="/student/add" className="btn btn-sm btn-primary">
          Create student
        </Link>
      </div>
      <div>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.fullname}
              <Link to={`/student/${student.id}`} className="btn btn-sm btn-info ms-2">
                Detail
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default StudentList
