import styleCss from "../style/popup.module.css";
import React from 'react';
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from '../config/api'
import { Alert } from "react-bootstrap";
import { useState } from "react";


function SignUp(props) {

    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: ""
    })

    const { fullname, email, password } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // Create Configuration Content-type here ...
            // Content-type: application/json
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            // Convert form data to string here ...
            const body = JSON.stringify(form)

            // Insert data user to database here ...
            const response = await API.post('/register', body, config)
            console.log(response);

            // Notification
            if (response.data.status == "success...") {
                const alert = (
                    <Alert variant="success" className="py-1">
                        Success
                    </Alert>
                );
                setMessage(alert);
            } else {
                const alert = (
                    <Alert variant="danger" className="py-1">
                        Failed
                    </Alert>
                );
                setMessage(alert);
            }
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            setMessage(alert);
            console.log(error);
        }
    };
 

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <div>
                {message && message}
                <form onSubmit={handleSubmit} className={styleCss.form}>
                    <div className={styleCss.formGroup}>
                        <h1 className={styleCss.header}>Register</h1>
                        <input
                            className={styleCss.inputGroup}
                            name="fullname"
                            placeholder="Full Name"
                            onChange={handleChange}
                            type="text"
                            value={fullname}
                        />

                        <input
                            className={styleCss.inputGroup1}
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            type="email"
                            value={email}
                        />

                        <input
                            className={styleCss.inputGroup1}
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            type="password"
                            value={password}
                        />


                        <button type="submit" className={styleCss.button} >Register</button>
                        <p className={styleCss.text}>Already have an account ? Klik Here</p>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default SignUp;