import styleCss from '../style/creat.module.css'
import { useNavigate } from 'react-router-dom';
import { API } from '../config/api'
import React, {useState} from 'react';
import logo from "../assets/logo.png"
import tem from "../assets/template.png"
import pro from "../assets/profileoff.png"
import lin from "../assets/linkoff.png"
import out from "../assets/out.png"
import kotak from "../assets/kotakkotak.png"
import phone from "../assets/Phone 1.png"


function CreatLink() {

    console.clear();
    let navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        titlefacebook: "",
        urlfacebook: "",
        titletwitter: "",
        urltwitter: "",
        titleinstagram: "",
        urlinstagram: "",
        titleyoutube: "",
        urlyoutube: "",
        titlewhatsapp: "",
        urlwhatsapp: ""
    })

    const { title,
            description,
            titlefacebook,
            urlfacebook,
            titletwitter,
            urltwitter,
            titleinstagram,
            urlinstagram,
            titleyoutube,
            urlyoutube,
            titlewhatsapp,
            urlwhatsapp,
    } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

        // Create image url for preview
        // if (e.target.type === "file") {
        //     let url = URL.createObjectURL(e.target.files[0]);
        //     setPreview(url);
        // }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // Create Configuration Content-type here ...
            // Content-type: multipart/form-data
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const body = JSON.stringify(form)

            // Create store data with FormData as object here ...
            

            // Insert product data here ...
            const response = await API.post('/addlink', body, config)

            console.log(response);

            navigate("/mylink");
        } catch (error) {
            console.log(error);
        }
    };


    const navigasi = useNavigate()
    const handleClick = () => {
        navigasi("/")
    }

    const profile = useNavigate()
    const handleProfile = () => {
        profile("/profile")
    }

    const mylink = useNavigate()
    const handleMylink = () => {
        mylink("/mylink")
    }


    return (
        <div>

            <div className={styleCss.head}>
                <div className={styleCss.kiri}>
                    <img src={logo} alt='logo' className={styleCss.logo} />
                </div>
                <div className={styleCss.kanan}>
                    <p style={{ fontSize: 30, fontWeight: 'bold' }}>Template</p>
                </div>
            </div>

            <div className={styleCss.container}>
                <div className={styleCss.sidebar}>
                    <div className={styleCss.button1}>
                        <img src={tem} alt='logo' className={styleCss.tem} />
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

                <form onSubmit={handleSubmit} className={styleCss.content}>
                    <div className={styleCss.atas}>
                        <p className={styleCss.p1}>Create Link</p>
                        <button type='submit' className={styleCss.publish}>Publish Link</button>
                    </div>

                    <div className={styleCss.isi}>
                        <form className={styleCss.isikiri}>
                            <form>
                                <div className={styleCss.atas1}>
                                    <img src={kotak} alt="icon" className={styleCss.pp} />
                                    <div>
                                        <button className={styleCss.upload}>Upload</button>
                                    </div>
                                </div>
                                <input className={styleCss.ppinput} type="file" hidden/>
                            </form>
                           
                            <div className={styleCss.fomtit}>
                                <labe className={styleCss.label}>Title</labe>
                                <input className={styleCss.title}
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="ex. Your Title"
                                    name="title"
                                    value={title}
                                />
                                <hr className={styleCss.garis}/>

                                <labe className={styleCss.label}>Description</labe>
                                <input className={styleCss.title}
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="ex.Description Here"
                                    name="description"
                                    value={description}
                                />
                                <hr className={styleCss.garis}/>
                            </div>

                            <div className={styleCss.divutama}>
                                <div className={styleCss.div1}>
                                    <img src={kotak} alt=";(" className={styleCss.f1}/>
                                </div>

                                <div className={styleCss.div2}>
                                    <label className={styleCss.tili}>Title Link</label><br/><br/>
                                    <input className={styleCss.somed} onChange={handleChange} value={titlefacebook} name="titlefacebook" type="text" placeholder="Facebook"/>
                                    <hr className={styleCss.garis1} />
                                    
                                    <labe className={styleCss.lalin}>Link</labe><br/><br/>
                                    <input className={styleCss.inlin}
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="https://facebook.com/...."
                                        name="urlfacebook"
                                        value={urlfacebook}
                                    />
                                    <hr className={styleCss.garis1} />
                                </div>
                            </div>

                            <div className={styleCss.divutama}>
                                <div className={styleCss.div1}>
                                    <img src={kotak} alt=";(" className={styleCss.f1} />
                                </div>

                                <div className={styleCss.div2}>
                                    <label className={styleCss.tili}>Title Link</label><br /><br />
                                    <input className={styleCss.somed} onChange={handleChange} value={titleinstagram} name="titleinstagram" type="text" placeholder="Instagram" />
                                    <hr className={styleCss.garis1} />

                                    <labe className={styleCss.lalin}>Link</labe><br /><br />
                                    <input className={styleCss.inlin}
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="https://instagram.com/...."
                                        name="urlinstagram"
                                        value={urlinstagram}
                                    />
                                    <hr className={styleCss.garis1} />
                                </div>
                            </div>

                            <div className={styleCss.divutama}>
                                <div className={styleCss.div1}>
                                    <img src={kotak} alt=";(" className={styleCss.f1} />
                                </div>

                                <div className={styleCss.div2}>
                                    <label className={styleCss.tili}>Title Link</label><br /><br />
                                    <input className={styleCss.somed} onChange={handleChange} name="titletwitter" type="text" placeholder="Twitter" />
                                    <hr className={styleCss.garis1} />

                                    <labe className={styleCss.lalin}>Link</labe><br /><br />
                                    <input className={styleCss.inlin}
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="https://twitter.com/...."
                                        name="urltwitter"
                                    />
                                    <hr className={styleCss.garis1} />
                                </div>
                            </div>

                            <div className={styleCss.divutama}>
                                <div className={styleCss.div1}>
                                    <img src={kotak} alt=";(" className={styleCss.f1} />
                                </div>

                                <div className={styleCss.div2}>
                                    <label className={styleCss.tili}>Title Link</label><br /><br />
                                    <input className={styleCss.somed} onChange={handleChange} name="titleyoutube" type="text" placeholder="Youtube" />
                                    <hr className={styleCss.garis1} />

                                    <labe className={styleCss.lalin}>Link</labe><br /><br />
                                    <input className={styleCss.inlin}
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="https://youtube.com/...."
                                        name="urlyoutube"
                                    />
                                    <hr className={styleCss.garis1} />
                                </div>
                            </div>

                            <div className={styleCss.divutama}>
                                <div className={styleCss.div1}>
                                    <img src={kotak} alt=";(" className={styleCss.f1} />
                                </div>

                                <div className={styleCss.div2}>
                                    <label className={styleCss.tili}>Title Link</label><br /><br />
                                    <input className={styleCss.somed} onChange={handleChange} name="titlewhatsapp" type="text" placeholder="WhatsApp" />
                                    <hr className={styleCss.garis1} />

                                    <labe className={styleCss.lalin}>Link</labe><br /><br />
                                    <input className={styleCss.inlin}
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="https://whatsapp.com/...."
                                        name="urlwhatsapp"
                                    />
                                    <hr className={styleCss.garis1} />
                                </div>
                            </div>
                        </form>

                        <div className={styleCss.isikanan}>
                            <img src={phone} alt=";(" className={styleCss.phone} />
                        </div>
                    </div>
                </form>

            </div>

        </div>

    )
}

export default CreatLink;