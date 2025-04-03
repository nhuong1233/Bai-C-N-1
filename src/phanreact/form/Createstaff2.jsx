import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// Validation Schema with Yup
const schema = yup.object({
    fullname: yup.string().required("Ban can cung cap ho va ten"),
    age: yup.number()
        .integer()
        .min(18, "Tuoi lon hon hoac bang 18")
        .max(30)
        .required("Ban can cung cap tuoi")
        .typeError("Ban can cung cap tuoi"),
    gender: yup.string().required("Please select gender"),
    city: yup.string().required("Please select a city"),
    email: yup.string().email("Invalid email").required("Ban can cung cap email"),
    password: yup.string().length(8, "Password must be exactly 8 characters").required("Password is required")
        .test('len', 'Password must be between 8 and 10 characters', val => val.length >= 8 && val.length <= 10),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Confirm password does not match"),
    dob: yup.date().required()
    .typeError('dob is a required field')
});

// City List
const cityList = [
    { id: 1, name: "TT Hue" },
    { id: 2, name: "Da Nang" },
    { id: 3, name: "Quang Tri" }
]

function Createstaff2() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const handleCreateStaff = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>Create Staff</h1>
            <form onSubmit={handleSubmit(handleCreateStaff)} className="needs-validation">
                {/* Fullname Field */}
                <div className="form-group mb-3 has-validation">
                    <label className="form-label">Fullname</label>
                    <input
                        type="text"
                        className={`form-control ${errors?.fullname ? 'is-invalid' : ''}`}
                        {...register('fullname')}
                    />
                    <span className="invalid-feedback">{errors?.fullname?.message}</span>
                </div>

                {/* Email Field */}
                <div className="form-group mb-3 has-validation">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors?.email ? 'is-invalid' : ''}`}
                        {...register('email')}
                    />
                    <span className="invalid-feedback">{errors?.email?.message}</span>
                </div>

                {/* Password Field */}
                <div className="form-group mb-3 has-validation">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors?.password ? 'is-invalid' : ''}`}
                        {...register('password')}
                    />
                    <span className="invalid-feedback">{errors?.password?.message}</span>
                </div>

                {/* Confirm Password Field */}
                <div className="form-group mb-3 has-validation">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors?.confirmPassword ? 'is-invalid' : ''}`}
                        {...register('confirmPassword')}
                    />
                    <span className="invalid-feedback">{errors?.confirmPassword?.message}</span>
                </div>
                <div className="form-group mb-3 has-validation">
                    <label className="form-label">Date</label>
                    <input
                        type="date"
                        className={`form-control ${errors?.dob ? 'is-invalid' : ''}`}
                        {...register('dob')}
                    />
                    <span className="invalid-feedback">{errors?.dob?.message}</span>
                </div>

                {/* Age Field */}
                <div className="form-group mb-3 has-validation">
                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        className={`form-control ${errors?.age ? 'is-invalid' : ''}`}
                        {...register('age')}
                    />
                    <span className="invalid-feedback">{errors?.age?.message}</span>
                </div>

                {/* City Field */}
                <div className="form-group mb-3 has-validation">
                    <label className="form-label">City</label>
                    <select
                        className={`form-control ${errors?.city ? 'is-invalid' : ''}`}
                        {...register('city')}
                    >
                        <option value="">Please select a city</option>
                        {cityList.map((city) => (
                            <option value={city.name} key={city.id}>{city.name}</option>
                        ))}
                    </select>
                    <span className="invalid-feedback">{errors?.city?.message}</span>
                </div>

                {/* Gender Field */}
                <div className="form-group mb-3 has-validation">
                    <label>Gender</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                value="male"
                                className={`form-check-input ${errors?.gender ? 'is-invalid' : ''}`}
                                {...register('gender')}
                            />
                            <label>Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                value="female"
                                className={`form-check-input ${errors?.gender ? 'is-invalid' : ''}`}
                                {...register('gender')}
                            />
                            <label>Female</label>
                        </div>
                    </div>
                    <span className="invalid-feedback">{errors?.gender?.message}</span>
                </div>

                {/* Submit Buttons */}
                <div>
                    <button type="submit" className="btn btn-success me-3">Create</button>
                    <button type="button" className="btn btn-dark" onClick={() => reset()}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Createstaff2;
