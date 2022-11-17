import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch(`${process.env.REACT_APP_HOST}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/");  
            window.location.reload();

        }
        else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div style={{ marginTop: "100px" }}>
            <h2>Create an account to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="name" className="form-label black">Name</label>
                    <input type="name" className="form-control" onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label black">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label black">Password</label>
                    <input type="password" className="form-control" onChange={onChange} name="password" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label black">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange} name="password" id="cpassword" />
                </div>

                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default Signup
