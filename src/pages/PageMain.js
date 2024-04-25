import React, { useEffect, useState } from 'react';
//import axios from 'axios';

export const PageMain = () => {

    const [records, setRecords] = useState([]);
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState(Date.now());
    const [file, setFile] = useState(null);

    // useEffect(() => {
    //     axios.get(process.env.REACT_APP_WEB_API_BASE_URL + "/users").then(response => setRecords(response.data)).catch(exception => console.log(exception));
    // }, []);
    
    const handleAdd = (event) => {
        event.preventDefault();

        console.log('Name:', name);
        console.log('Birthday:', birthday);
        console.log('File:', file);

        let user = {
            name: name, 
            birthday: birthday
        };

        //axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/users", user).catch(exception => console.log(exception));
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <>
            <h1 className="w-25 mx-auto bg-dark text-warning mt-5 mb-5">TEST</h1>
            <div className="container">
                <div className="row g-2">
                    <div className="col-lg-6 col-sm-12">
                        <input type="email" className="form-control" id="floatingName" placeholder="Name" maxLength={100} value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <input type="date" className="form-control" id="floatingDate" placeholder="Birthday" min="1753-01-01" max="9999-12-31" value={birthday} onChange={e => setBirthday(e.target.value)}/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <input className="form-control" type="file" id="formFile" onChange={handleFileChange}/>
                    </div>
                    <div className="col-lg-1 col-sm-12 d-grid">
                        <button type="button" className="btn btn-dark" onClick={handleAdd}>Add</button>
                    </div>
                </div>
                <hr className="border-5 border-light"/>
            </div>
            <div className="container mt-2">
                <div className="row g-2 vertical-align">
                    <div className="col-lg-6 col-sm-12">
                        <h5 className="text-white">Example name</h5>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <h5 className="text-white">2001-09-11</h5>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View image</button>
                        <div className="modal modal-xl fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content modal-background">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Example image name.png</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img src="/img/marieke-douma-gloomwood.jpg" alt="..." className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                { records.map(e => (
                    <div className="row g-2 mt-2 vertical-align">
                        <div className="col-lg-6 col-sm-12">
                            <h5 className="text-white">{e.name}</h5>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <h5 className="text-white">{e.birthday}</h5>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View image</button>
                            <div className="modal modal-xl fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Example image name.png</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src="e.imageUrl" alt={e.imageUrl} className="img-responsive"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                ))}
            </div>
        </>
    );
}