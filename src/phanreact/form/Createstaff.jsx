import React, { useState } from 'react'

function Createstaff() {

    const [form, setForm] = useState({
        values: {
            'fullname': '',
            'email': ''
        },
        errors:{
            'fullname': 'asd',
            'email': 'asddddd'
        },
        touch:{
            'fullname': false,
            'email': false
        }
    })

    const handleCancel = () =>{
        setForm({
            ...form,
            values:{
                fullname:'',
                email:''
            },
            errors:{
                'fullname': 'asd',
                'email': 'asddddd'
            }
        })
    }
    const handleInputValue = (e) =>{
        if(e.target.value)
        {
            setForm({
                ...form,
                values: {
                    ...form.values,
                    [e.target.name] : e.target.value
                },
                errors:{
                    ...form.errors,
                    [e.target.name]:''
                },
                touch:{
                    ...form.touch,
                    [e.target.name]: document.activeElement == e.target 
                }
            })
        }
        else{
            setForm({
                ...form,
                values: {
                    ...form.values,
                    [e.target.name] : e.target.value
                },
                errors:{
                    ...form.errors,
                    [e.target.name]:`${e.target.value} sadasd`
                },
                touch:{
                    ...form.touch,
                    [e.target.name]: false
                }
            })
        }
    }
    const handleCreateStaff =(e)=>{
        e.preventDefault()
        if(form.values.fullname && form.values.email){
            console.log(form.values)
        }
    }
    console.log(form)
  return (
    <>
      <h1>Create Staff</h1>
      <form onSubmit={handleCreateStaff}>
        <div className="form-group mb-2">
            <lablle>Fullname</lablle>
            <input type="text" className="form-control"
                name="fullname"
                value={form.values.fullname}
                onInput={handleInputValue}
                
            />
            <span className="text-danger">{form.touch.fullname && form.errors?.fullname}</span>
        </div>
        <div className="form-group mb-2">
            <lablle>Email</lablle>
            <input type="email" className="form-control"
                 name="email"
                 value={form.values.email}
                 onInput={handleInputValue}
                 
            />
            <span className="text-danger">{form.touch.fullname && form.errors?.email}</span>
        </div>
        <div>
            <lablle></lablle>
            <button type="submit" className="btn btn-sm btn-warning">Create</button>
            <button type="cancel" className="btn btn-sm btn-dark"
                onClick={handleCancel}
            >Cancel</button>
        </div>

      </form>

    </>
  )
}

export default Createstaff
