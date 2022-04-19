import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API } from '../config/api'
import styleCss from "../style/list.module.css"
import profile from "../assets/profilepic.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"
import whatsapp from "../assets/whatsapp.png"

function ListLink() {

    let { id } = useParams();

    const [link, setlink] = useState({});

    const getlink = async (id) => {
        try {
            const response = await API.get("/getlink/" + id);
            console.log(response.data.data)
            setlink(response.data.data.link);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getlink(id);
    }, []);

    return (
        <div className={styleCss.back}>
            <div className={styleCss.pp}>
                <img src={profile} alt=";(" className={styleCss.profile} />
            </div>
            <p className={styleCss.p1}>
                {link.title}
            </p>
            <p className={styleCss.p2}>
                {link.description}
            </p>

            <a href={link?.urlfacebook} target='_blank' style={{textDecoration: 'none'}}>
                <div className={styleCss.sosmed}>
                    <img src={facebook} alt=";(" className={styleCss.facebook} />
                    <p className={styleCss.t1}>{link.titlefacebook}</p>

                </div>
            </a>
            
            <a href={link?.urlinstagram} target='_blank' style={{ textDecoration: 'none' }}>
                <div className={styleCss.sosmed}>
                    <img src={instagram} alt=";(" className={styleCss.instagram} />
                    <p className={styleCss.t2}>{link.titleinstagram}</p>
                </div> 
            </a>
            

            <a href={link?.urltwitter} target='_blank' style={{ textDecoration: 'none' }}>
                <div className={styleCss.sosmed}>
                    <img src={twitter} alt=";(" className={styleCss.twitter} />
                    <p className={styleCss.t3}>{link.titletwitter}</p>
                </div>
            </a>
            

            <a href={link?.urlyoutube} target='_blank' style={{ textDecoration: 'none' }}>
                <div className={styleCss.sosmed}>
                    <img src={youtube} alt=";(" className={styleCss.youtube} />
                    <p className={styleCss.t4}>{link.titleyoutube}</p>
                </div>
            </a>
            

            <a href={link?.urlwhatsapp} target='_blank' style={{ textDecoration: 'none' }}>
                <div className={styleCss.sosmed}>
                    <img src={whatsapp} alt=";(" className={styleCss.whatsapp} />
                    <p className={styleCss.t5}>{link.titlewhatsapp}</p>
                </div>
            </a>
            
        </div>
    )
}
export default ListLink;