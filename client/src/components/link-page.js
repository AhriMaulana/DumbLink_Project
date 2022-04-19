import styleCss from '../style/link.module.css'
import {Link, useNavigate } from 'react-router-dom';
import { API } from '../config/api'
import Delete from './delete-popup';
import React, {useState,useEffect} from 'react';
import logo from "../assets/logo.png"
import tem from "../assets/templateoff.png"
import pro from "../assets/profileoff.png"
import lin from "../assets/link.png"
import out from "../assets/out.png"
import find from "../assets/search.png"
import ways from "../assets/ways.png"
import view from "../assets/View.png"
import edit from "../assets/Edit.png"
import delet from "../assets/Delete.png"

function MyLink() {

    const [link, setLink] = useState([]);
    const loadLink = async () => {
        try {
            const response = await API.get("/getlinks");
            setLink(response.data.data.links);
            console.log(response.data.data.links)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadLink();
    }, []);

    
    const [idDelete, setIdDelete] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (id) => {
        setIdDelete(id);
        handleShow();
    };
    const deleteById = async (id) => {
        try {
            await API.delete(`/deletelink/${id}`);
            loadLink();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (confirmDelete) {
            // Close modal confirm delete data
            handleClose();
            // execute delete data by id function
            deleteById(idDelete);
            setConfirmDelete(null);
        }
    }, [confirmDelete]);

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }

    const profile = useNavigate()
    const handleProfile = () => {
        profile("/profile")
    }

    const template = useNavigate()
    const handleTemplate = () => {
        template("/home")
    }

    const usetemplate = useNavigate()
    const handleUseTemplate = () => {
        usetemplate("/editlink")
    }

    const viewlink = useNavigate()
    const handleViewlink = () => {
        viewlink("/view")
    }

    return (
        <div>

            <div className={styleCss.head}>
                <div className={styleCss.kiri}>
                    <img src={logo} alt='logo' className={styleCss.logo} />
                </div>
                <div className={styleCss.kanan}>
                    <p style={{ fontSize: 30, fontWeight: 'bold' }}>My Link</p>
                </div>
            </div>

            <div className={styleCss.container}>
                <div className={styleCss.sidebar}>
                    <div className={styleCss.button1}>
                        <img onClick={handleTemplate} src={tem} alt='logo' className={styleCss.tem} />
                        <button onClick={handleTemplate} className={styleCss.text}>Template</button>
                    </div>
                    <div className={styleCss.button2}>
                        <img onClick={handleProfile} src={pro} alt='logo' className={styleCss.pro} />
                        <button onClick={handleProfile} className={styleCss.text1}>Profile</button>
                    </div>
                    <div className={styleCss.button3}>
                        <img src={lin} alt='logo' className={styleCss.lin} />
                        <button className={styleCss.text2}>My Link</button>
                    </div>
                    <div className={styleCss.button4}>
                        <img onClick={handleClick} src={out} alt='logo' className={styleCss.out} />
                        <button onClick={handleClick} className={styleCss.text3}>Logout</button>
                    </div>
                </div>

                <div className={styleCss.content}>
                    <div className={styleCss.go}> 
                        <p className={styleCss.tag}>All Link</p>
                        <p className={styleCss.num}>1</p>
                        <div className={styleCss.group}>
                            <form className={styleCss.foca}>
                                <img src={find} alt="icon" className={styleCss.find}/>
                                <input className={styleCss.search}
                                    type="search"
                                    id="search"
                                    placeholder="Find your link"
                                />
                                <button className={styleCss.butsea}>Search</button>
                            </form>

                            <hr className={styleCss.garis}/>
                        </div>
                    </div>
                    
                    {link.map((data) => (
                        <div className={styleCss.viwer} key={data.id}>
                            <div className={styleCss.viwer4}>
                                <div className={styleCss.viwer1}>
                                    <img src={ways} alt="logo" className={styleCss.ways} />
                                    <p className={styleCss.p1}>{data.title}</p>
                                    <p className={styleCss.p2}>10</p>
                                </div>
                                <div className={styleCss.viwer2}>
                                    <img src={ways} alt="logo" className={styleCss.ways} />
                                    <p className={styleCss.p3}>Localhost:3000/waysfood</p>
                                    <p className={styleCss.p4}>Visit</p>
                                </div>
                            </div>

                            <div className={styleCss.viwer3}>
                                <Link to={{ pathname: `/view/${data.id}` }}>
                                    <img src={view} alt="icon" className={styleCss.view} />
                                </Link>
                                <Link to={`/editlink/${data.id}`}>
                                    <img src={edit} alt="icon" className={styleCss.edit} />
                                </Link>
                                
                                <img onClick={() => {handleDelete(data.id);}} src={delet} alt="icon" className={styleCss.delet} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Delete
                setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose}/>
        </div>

    )
}

export default MyLink;