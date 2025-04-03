// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
// import * as yup from 'yup'
// import { yupResolver } from "@hookform/resolvers/yup"
// import { toast } from 'react-toastify'

// function TeacherList() {
//     const [teacherList, setTeacherList] = useState([])
//     const [isLoading, setIsLoading] = useState(false)
//     const [department, setDepartMent] = useState([])
//     const [toogleForm, setToogleForm] = useState()
//     const {register, handleSumit, formState:{errors}, reset} = useForm()
//     useEffect(()=>{
//         setIsLoading(true)
//         fetch('https://6774a5b7922222414819afca.mockapi.io/api/v1/abc')
//         .then((response)=>response.json())
//         .then((data)=>{
//             setTeacherList(data)
//             setIsLoading(false)
//         })
//     },[])

//     useEffect(() =>{
//         setIsLoading(true)
//         fetch('https://6774a5b7922222414819afca.mockapi.io/api/v1/department')
//         .then((response) => response.json())
//         .then((data)=>{
//             setDepartMent(data)
//             setIsLoading(false)
//         })

//     },[])
//     const handleAddTeacher = (data) =>{
//         data.department = JSON.parse(data.department)
//         fetch('https://6774a5b7922222414819afca.mockapi.io/api/v1/abc',{
//             method:"POST",
//             headers:{
//                 "Content-Type" : 'application/json'
//             },
//             body: JSON.stringify(data)
//         }).then((res) => res.json()) 
//             .then((result) =>{
//                 toast.success(`TEacher ${result.name} added success!`)
//                 fetch('https://6774a5b7922222414819afca.mockapi.io/api/v1/abc')
//                 .then((response)=>response.json())
//                 .then((data)=>{
//                     setTeacherList(data)
//                     setIsLoading(false)
//                 })
//                 setIsLoading(false)
//             })
//         }
//     }

    
//   return (
//     <>
//     <div>
//         <h3>Teacher list</h3> 
//     </div>
//     <section>
            
//             <div>
//                 <button className="btn btn-sm btn-warning"
//                     onClick={() => setToogleForm(!toogleForm)}
//                 >
//                     Add Teacher
//                 </button>
//             </div>
            
//             <div>
//                 {toogleForm &&(
//                     <form onSubmit={handleSumit(handleAddTeacher)}>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="form-group mb-3">
//                                 <label>Fullname</label>
//                                 <input type="text" className="form-control" placeholder='Fullname' {...register('name')}/>
                                
//                             </div>
//                             <div className="form-group mb-3">
//                                 <label>Email</label>
//                                 <input type="email" className="form-control" placeholder='email' {...register('email')}/>
                                
//                             </div>
//                             <div className="form-group mb-3">
//                                 <label>Dob</label> 
//                                 <input type="date" className="form-control" {...register('date')}/>
                                
//                             </div>

//                             <div className="form-group mb-3">
//                                 <button type="submit" className="btn btn-sm btn-success me-3">Create</button>
//                                 <button type="button" className="btn btn-sm btn-dark" onClick={()=>reset(0)}>Create</button>
                            
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="form-group mb-3">
//                                 <label className="form-lable">Avatar</label>
//                                 <input type="url" className="form-control"  {...register('avatar')}/>
                               
//                             </div>
//                             <div className="form-group mb-3">
                                
//                                 <div className="form-check form-check-inline">
//                                     <input className="form-check-input" type="radio" value="male" {...register('gender')}/>
//                                     <label className="form-check-lable">Mail</label>
//                                 </div>
//                                 <div className="form-check form-check-inline">
//                                     <input className="form-check-input" type="radio" value="female" {...register('gender')}/>
//                                     <label className="form-check-lable">FeMail</label>
//                                 </div>
//                             </div>
//                             <div className="form-group mb-3">
//                                 <label className="form-lable">Department</label>
//                                 <select className="form-control" {...register('department')}>
//                                     {
//                                         department.map((depart)=>(
//                                             <option value={JSON.stringify(depart)}>{depart.name}</option>
//                                         ))
//                                     }
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//                 )}
//             </div>
        
//     </section>
//     <section>
//     {
//         isLoading ? <p>Loading...</p> :(
//             <>
                   
//      <table className="table">
//         <thead>
//             <tr>
//                 <td>#ID</td>
//                 <td>Fullname</td>
//                 <td>DOB</td>
//                 <td>Email</td>
//                 <td>Gender</td>
//                 <td>Department</td>
//                 <td>Actions</td>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 teacherList.map((teacher) =>(
//                     <tr key={teacher.id}>
//                         <td>{teacher.id}</td>

//                         <td>
//                             <div>
//                                 <img className="rouneded-circle w-25" src={teacher.avatar}/>
//                                 {teacher.name}
//                             </div>
//                             {teacher.name}
//                         </td>
//                         <td>{teacher.dob}</td>
//                         <td>{teacher.email}</td>
//                         <td>{teacher.gender? 'Male' :'Female'}</td>
//                         <td>{teacher.department.name}</td>
//                         <td>
//                             <Link to={`/teacher/${teacher.id}`}className="btn btn-sm btn-link">Detail</Link>
//                         </td>
//                     </tr>
//                 ))
//             }
//         </tbody>
//      </table>
//             </>
//         )
//      }
//     </section>
//     </>
//   )
// }

// export default TeacherList


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Validation Schema
const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    dob: yup.date().required().typeError('dob is a required field'),
    avatar: yup.string().required().url()
})

function TeacherList() {
    const [teacherList, setTeacherList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [department, setDepartment] = useState([])
    const [toggleForm, setToggleForm] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    // Fetch teachers and departments
    useEffect(() => {
        setIsLoading(true)
        fetch('https://6774a5b7922222414819afca.mockapi.io/api/v1/abc')
            .then((response) => response.json())
            .then((data) => {
                setTeacherList(data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching teacher list:', error)
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://6774a5b7922222414819afca.mockapi.io/api/v1/department')
            .then((response) => response.json())
            .then((data) => {
                setDepartment(data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching departments:', error)
                setIsLoading(false)
            })
    }, [])

    const handleAddTeacher = (data) => {
        data.department = JSON.parse(data.department)

        // Add loading state for POST request
        setIsLoading(true)
        fetch('https://6774a5b7922222414819afca.mockapi.io/api/v1/abc', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success(`Teacher ${result.name} added successfully!`)
                reset() // Reset the form after successful submission

                // Fetch updated teacher list after adding new teacher
                fetch('https://6774a5b7922222414819afca.mockapi.io/api/v1/abc')
                    .then((response) => response.json())
                    .then((data) => {
                        setTeacherList(data)
                        setIsLoading(false)
                    })
            })
            .catch((error) => {
                console.error('Error adding teacher:', error)
                setIsLoading(false)
            })
    }

    return (
        <>
            <div>
                <h3>Teacher List</h3>
            </div>
            <section>
                <div>
                    <button className="btn btn-sm btn-warning" onClick={() => setToggleForm(!toggleForm)}>
                        {toggleForm ? 'Hide Form' : 'Add Teacher'}
                    </button>
                </div>

                {toggleForm && (
                    <form onSubmit={handleSubmit(handleAddTeacher)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Fullname<span className="text-danger">(*)</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Fullname'
                                        {...register('name')}
                                    />
                                    {errors.name && <span className="text-danger">{errors.name?.message}</span>}
                                </div>

                                <div className="form-group mb-3">
                                    <label>Email<span className="text-danger">(*)</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder='email'
                                        {...register('email')}
                                    />
                                    {errors.email && <span className="text-danger">{errors.email?.message}</span>}
                                </div>

                                <div className="form-group mb-3">
                                    <label>Dob<span className="text-danger">(*)</span></label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        {...register('dob')}
                                    />
                                    {errors.dob && <span className="text-danger">{errors.dob?.message}</span>}
                                </div>

                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-sm btn-success me-3" disabled={isLoading}>Create</button>
                                    <button type="button" className="btn btn-sm btn-dark" onClick={() => reset()}>Reset</button>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className="form-label">Avatar<span className="text-danger">(*)</span></label>
                                    <input type="url" className="form-control" {...register('avatar')} />
                                    {errors.avatar && <span className="text-danger">{errors.avatar?.message}</span>}
                                </div>

                                <div className="form-group mb-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" defaultValue={"male"} value="male" {...register('gender')} />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" value="female" {...register('gender')} />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label">Department</label>
                                    <select className="form-control" {...register('department')}>
                                        {department.map((depart) => (
                                            <option key={depart.id} value={JSON.stringify(depart)}>
                                                {depart.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </section>

            <section>
                {isLoading ? <p>Loading...</p> : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Fullname</th>
                                <th>DOB</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teacherList.map((teacher) => (
                                <tr key={teacher.id}>
                                    <td>{teacher.id}</td>
                                    <td>
                                        <div>
                                            {teacher.avatar && <img className="rounded-circle w-25" src={teacher.avatar} alt="avatar" />}
                                            {teacher.name}
                                        </div>
                                    </td>
                                    <td>{teacher.dob}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.gender ? 'Male' : 'Female'}</td>
                                    <td>{teacher.department ? teacher.department.name : 'N/A'}</td>
                                    <td>
                                        <Link to={`/teacher/${teacher.id}`} className="btn btn-sm btn-link">Detail</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </>
    )
}

export default TeacherList
