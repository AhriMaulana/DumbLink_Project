import styleCss from "../style/popup.module.css";
import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import { API } from '../config/api'
import { Alert } from "react-bootstrap";
import { UserContext } from "../contex/userContext";


function LoginPop(props) {

    const [state, dispatch] = useContext(UserContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);

    // Store data with useState here ...
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const { email, password } = form;

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

            // Insert data user for login process here ...
            const response = await API.post('/login', body, config)
            console.log(response.data.data)

            // Checking process
            if (response?.status == 200) {
                //Send data to useContext
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data,
                });
                const alert = (
                    <Alert variant="success" className="py-1">
                        Login success
                    </Alert>
                );
                setMessage(alert);
            }
        navigate("/home");
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Login failed
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
                        <h1 className={styleCss.header}>Sign In</h1>
                        <input
                            className={styleCss.inputGroup}
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={handleChange}
                            type="email"
                        />

                        <input
                            className={styleCss.inputGroup1}
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={handleChange}
                            type="password"
                        />

                        <button onClick={handleSubmit} className={styleCss.button} >Sign In</button>
                        <p className={styleCss.text}>Don't have an account? Klik Here</p>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default LoginPop;