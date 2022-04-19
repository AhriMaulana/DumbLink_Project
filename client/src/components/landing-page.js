import styleCss from '../style/landing.module.css'
import React from 'react';
import background from "../assets/background.png"
import logo from "../assets/logo.png"
import LoginPop from './login';
import SignUp from './register';

function Landing() { 

    const [loginShow, setLoginShow] = React.useState(false);
    const [popupShow, setPopupShow] = React.useState(false);


    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", height: "100vh", }}>

            <div className={styleCss.head}>
                <div className={styleCss.kiri}>
                    <img src={logo} alt='logo' className={styleCss.logo}/>
                </div>
                <div className={styleCss.kanan}>
                    <button onClick={() => setLoginShow(true)}  className={styleCss.login}>Login</button>
                    <button onClick={() => setPopupShow(true)} className={styleCss.register}>Register</button>
                </div>
            </div>

            <div className={styleCss.content}>
                <p className={styleCss.h1}>
                    The Only Link<br />You'll Ever Need
                </p>
                <p className={styleCss.h2}>
                    Add a link for your Social Bio and optimize your<br />
                    social media traffic.<br /><br />
                    safe, fast and easy to use
                </p>
                <button onClick={() => setPopupShow(true)} className={styleCss.button}>Get Started For Free</button>
            </div>
            <LoginPop
                show={loginShow}
                onHide={() => setLoginShow(false)} />
            <SignUp
                show={popupShow}
                onHide={() => setPopupShow(false)}
            />
        </div>
        
    )
}

export default Landing;