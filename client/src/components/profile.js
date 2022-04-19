import styleCss from '../style/profile.module.css'
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect, useContext} from 'react';
import logo from "../assets/logo.png"
import tem from "../assets/templateoff.png"
import pro from "../assets/profile.png"
import lin from "../assets/linkoff.png"
import out from "../assets/out.png"
import { API } from '../config/api';
import { Alert } from "react-bootstrap";
import {UserContext} from '../contex/userContext'


function Profile() {

    const navigate = useNavigate()
    const [, dispatch] = useContext(UserContext);

    const mylink = useNavigate()
    const handleMylink = () => {
        mylink("/mylink")
    }

    const template = useNavigate()
    const handleTemplate = () => {
        template("/home")
    }

    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        fullname: "",
        email: "",
    });

    const {fullname, email} = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleAccount = async () => {
        try {
            const getAccount = await API.get(`/getuser`);
            setForm(getAccount.data.data.accountId);
            console.log(getAccount.data.data.accountId)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleAccount();
    }, []);

    const handleOnSubmit = async (e) => {
        try {
            // e.preventDefault();

            const config = {
                headers: {
                    "Content-type": "application/json"
                },
            };

            const body = JSON.stringify(form)

            const response = await API.patch("/update", body, config);

            if (response.data.status === "success") {
                const alert = (
                    <Alert
                        variant="success"
                        className="py-1 d-flex justify-content-center"
                    >
                        Success
                    </Alert>
                );
                setMessage(alert);
            } else {
                const alert = (
                    <Alert
                        variant="danger"
                        className="py-1 d-flex justify-content-center"
                    >
                        Failed
                    </Alert>
                );
                setMessage(alert);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        });
        navigate('/')
    };

    return (
        <div>

            <div className={styleCss.head}>
                <div className={styleCss.kiri}>
                    <img src={logo} alt='logo' className={styleCss.logo} />
                </div>
                <div className={styleCss.kanan}>
                    <p style={{ fontSize: 30, fontWeight: 'bold' }}>My Account</p>
                </div>
            </div>

            <div className={styleCss.container}>
                <div className={styleCss.sidebar}>
                    <div className={styleCss.button}>
                        <img onClick={handleTemplate} src={tem} alt='logo' className={styleCss.tem} />
                        <button onClick={handleTemplate} className={styleCss.text}>Template</button>
                    </div>
                    <div className={styleCss.button2}>
                        <img src={pro} alt='logo' className={styleCss.pro} />
                        <button className={styleCss.text1}>Profile</button>
                    </div>
                    <div className={styleCss.button3}>
                        <img onClick={handleMylink} src={lin} alt='logo' className={styleCss.lin} />
                        <button onClick={handleMylink} className={styleCss.text2}>My Link</button>
                    </div>
                    <div className={styleCss.button4}>
                        <img onClick={handleLogout} src={out} alt='logo' className={styleCss.out} />
                        <button onClick={handleLogout} className={styleCss.text3}>Logout</button>
                    </div>
                </div>

                <div className={styleCss.content}>
                    <p className={styleCss.info}>My Information</p>
                    <form onSubmit={handleOnSubmit} className={styleCss.form}>
                        {message && message}
                        <label className={styleCss.label}>Name</label>
                        <input className={styleCss.name}
                            type="text" id="Name" name="fullname" placeholder="Andi Dirgantara"
                            onChange={handleChange}
                            value={fullname}
                        />
                        <hr/>

                        <label className={styleCss.label1}>Email</label>
                        <input className={styleCss.email}
                            type="email" id="Email" name="email" placeholder="dirgantarandi@gmail.com"
                            onChange={handleChange}
                            value={email}
                        />
                        <hr />
                        <div className={styleCss.button1}>
                            <button onClick={handleOnSubmit} className={styleCss.save}>Save Account</button>
                            <button className={styleCss.delet}>Delete Account</button>
                        </div>
                    </form>
                    
                </div>

            </div>

        </div>

    )
}

export default Profile;