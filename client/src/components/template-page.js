import styleCss from '../style/template.module.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from "../assets/logo.png"
import tem from "../assets/template.png"
import pro from "../assets/profileoff.png"
import lin from "../assets/linkoff.png"
import out from "../assets/out.png"
import Phone1 from "../assets/Phone 1.png"
import Phone2 from "../assets/Phone2.png"
import Phone3 from "../assets/Phone3.png"
import Phone4 from "../assets/Phone4.png"

function Home() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }

    const profile = useNavigate()
    const handleProfile = () => {
        profile("/profile")
    }

    const mylink = useNavigate()
    const handleMylink = () => {
        mylink("/mylink")
    }

    const usetemplate = useNavigate()
    const handleUseTemplate = () => {
        usetemplate("/creatlink")
    }


    return (
        <div>

            <div className={styleCss.head}>
                <div className={styleCss.kiri}>
                    <img src={logo} alt='logo' className={styleCss.logo} />
                </div>
                <div className={styleCss.kanan}>
                    <p style={{fontSize: 30, fontWeight: 'bold'}}>Template</p>
                </div>
            </div>

            <div className={styleCss.container}>
                <div className={styleCss.sidebar}>
                    <div className={styleCss.button1}>
                        <img src={tem} alt='logo' className={styleCss.tem}/>
                        <button className={styleCss.text}>Template</button>
                    </div>
                    <div className={styleCss.button2}>
                        <img onClick={handleProfile} src={pro} alt='logo' className={styleCss.pro} />
                        <button onClick={handleProfile} className={styleCss.text1}>Profile</button>
                    </div>
                    <div className={styleCss.button3}>
                        <img onClick={handleMylink} src={lin} alt='logo' className={styleCss.lin} />
                        <button onClick={handleMylink} className={styleCss.text2}>My Link</button>
                    </div>
                    <div className={styleCss.button4}>
                        <img onClick={handleClick} src={out} alt='logo' className={styleCss.out} />
                        <button onClick={handleClick} className={styleCss.text3}>Logout</button>
                    </div>
                </div>
                
                <div className={styleCss.content}>
                    <img onClick={handleUseTemplate} src={Phone1} alt="logo" className={styleCss.phone} />
                    <img onClick={handleUseTemplate} src={Phone2} alt="logo" className={styleCss.phone} />
                    <img onClick={handleUseTemplate} src={Phone3} alt="logo" className={styleCss.phone} />
                    <img onClick={handleUseTemplate} src={Phone4} alt="logo" className={styleCss.phone} />
                </div>
               
            </div>
            
        </div>

    )
}

export default Home;