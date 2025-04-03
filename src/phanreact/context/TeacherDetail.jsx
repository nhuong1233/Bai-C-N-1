
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function TeacherDetail() {
  const { teacherId } = useParams()
  const [teacherDetail, setTeacherDetail] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null) // Sử dụng null thay vì false cho error

  useEffect(() => {
    setIsLoading(true)
    setError(null) // Đặt lại error khi bắt đầu tải lại dữ liệu

    fetch(`https://6774a5b7922222414819afca.mockapi.io/api/v1/abc/${teacherId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data") // Ném lỗi nếu response không thành công
        }
        return response.json()
      })
      .then((data) => {
        setTeacherDetail(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setError(error)  // Lưu lỗi vào trạng thái error
        setIsLoading(false)
      })
  }, [teacherId])

  return (
    <>
      <h3>Teacher Detail</h3>
      <Link to="/">Back to teacher list</Link>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error.message}</p> 
      ) : (
        <div>
          <div>Fullname: {teacherDetail.name}</div>
          <div>Email: {teacherDetail.email}</div>
          <div>DOB: {teacherDetail.dob}</div>
          <div>Gender: {teacherDetail.gender ? 'Male' : 'Female'}</div>
        </div>
      )}

    </>
  )
}

export default TeacherDetail

