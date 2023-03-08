import React from "react";
import { useState } from "react";

const Register = () => {

    const [data, setData] = useState({});

    const inputValue = (element) => {
        console.log("element object : ",element);
        setData({...data, [element.target.id] : element.target.value});
    }

    return(
        <>
            <div className="row">
                <h1 className="bg-success text-light text-center">Register Here</h1>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mt-5">
                <div className="col-5 form-bg border border-1 p-5">
                    <div className="input-group my-2">
                        <label className="col-2">First Name</label>
                        <input type="text" id="fname" name="fname" onChange={inputValue} className="col form-control" />
                    </div>
                    <div className="input-group my-2">
                        <label className="col-2">Last Name</label>
                        <input type="text" id="lname" name="lname" onChange={inputValue} className="col form-control" />
                    </div>
                    <div className="input-group my-2">
                        <label className="col-2">Contact</label>
                        <input type="text" id="contact" name="contact" onChange={inputValue} className="col form-control" />
                    </div>
                    <div className="input-group my-2">
                        <label className="col-2">Email</label>
                        <input type="text" id="email" name="email" onChange={inputValue} className="col form-control" />
                    </div>
                    <div className="input-group my-2">
                        <label className="col-2">Address</label>
                        <textarea id="address" name="address" rows="10" columns="2" onChange={inputValue} className="col form-control" />
                    </div>
                </div>
                <div className="col-5 display-bg border border-1 p-5">
                    <p>First Name : {data.fname}</p>
                    <p>Last Name : {data.lname}</p>
                    <p>Contact : {data.contact}</p>
                    <p>Email : {data.email}</p>
                    <p>Address : {data.address}</p>
                </div>
            </div>
        </>
    );
};

export default Register;