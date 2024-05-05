import React, { useState } from "react";
import "./Form.css";

const Form = () => {
    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        gender: "",
        country: ""
    });

    const [errorFields, setErrorFields] = useState({
        firstName: false,
        email: false,
        gender: false,
        country: false
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFields((prev) => ({
            ...prev,
            [name]: value
        }));
       
        setErrorFields((prev) => ({
            ...prev,
            [name]: false
        }));
    };

    const isFormValidOnBlur = (event) => {
        const { name, value } = event.target;
        let error = false;

        if (name === "firstName" && value === "") {
            error = true;
        } else if (
            name === "email" &&
            (value === "" ||
            !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value))
        ) {
            error = true;
        } else if (name === "gender" && value === "") {
            error = true;
        } else if (name === "country" && value === "") {
            error = true;
        }

        setErrorFields((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted:", fields);
    };

    return (
        <div className="form-container">
        <h3>Form Handling and Validation</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-form">
                    <label className="label">
                        Please Enter Your Name
                        <br />
                        <input
                            type="text"
                            name="firstName"
                            value={fields.firstName}
                            placeholder="Please Enter Your Name"
                            onChange={handleChange}
                            onBlur={isFormValidOnBlur}
                        />
                    </label>
                    {errorFields.firstName && <p className = 'error'>Please enter a valid first name</p>}
                </div>
                <div className="input-form">
                    <label className="label">Please Enter Your Email</label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        value={fields.email}
                        placeholder="Please Enter Your Email"
                        onChange={handleChange}
                        onBlur={isFormValidOnBlur}
                    />
                    {errorFields.email && <p className ='error'>Please enter a valid email</p>}
                </div>
                <div className="input-form">
                    <label className="label">Please Select Your Gender</label>
                    <br />
                    <select
                        name="gender"
                        value={fields.gender}
                        onChange={handleChange}
                        onBlur={isFormValidOnBlur}
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errorFields.gender && <p className = 'error'>Please select a valid gender</p>}
                </div>
                <div className="input-form">
                    <label className="Country">Please Select Your Country</label>
                    <br />
                    <select
                        name="country"
                        value={fields.country}
                        onChange={handleChange}
                        onBlur={isFormValidOnBlur}
                    >
                        <option value="">Select</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="China">China</option>
                        <option value="Japan">Japan</option>
                    </select>
                    {errorFields.country && <p className = 'error'>Please select a valid country</p>}
                </div>
                <div className="input-form">
                    <br />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
