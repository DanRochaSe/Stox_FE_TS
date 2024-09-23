import React, { Component, useState } from 'react';
import { PostModel }  from '../../Models/PostModel'

export default function ManagePost() {

    let date = new Date().getDate();

    const [Title, setTitle] = useState("");
    const [Subject, setSubject] = useState("");
    const [Body, setBody] = useState("");
    const [Tickers, setTickers] = useState("");
    const [Author, setAuthor] = useState("");

    let fetchInit = (httpMethod = 'GET', bodyContent = '') => {

        let init = {
            method: httpMethod,
            credentials: 'omit',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Accept",
            },
            mode: 'cors',
            cache: 'default'
        };

        if (bodyContent != '') {
            init.body = bodyContent;
        };

        return init;

    };


    async function HandleSubmit(e) {
        e.preventDefault();

        const newPost = new PostModel(Title, Subject, Body, Tickers, Author);


        console.log(JSON.stringify(newPost));
        try {
            const response = await fetch('https://localhost:7294/Post', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": "*",
                },
                //cache: "default",
                body:JSON.stringify(newPost)
            });
            const json = await response.json();
            console.log(json);
            return true;

        }
        catch (err) {
            console.log(err);
            return err;
        }

    }

    

    let getHeaders = () => {

        return new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Accept",
            //"Authorization": "Bearer " + sessionStorage.getItem('accessToken')
        });
    };


    return (
        <form>
            <div className="form-group">
                <label htmlFor="lblTitle">Title</label>
                <input type="text" className="form-control" id="txtTitle" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="lblSubject">Subject</label>
                <input type="text" className="form-control" id="txtSubject" placeholder="Enter Subject" onChange={(e) => setSubject(e.target.value) } />
            </div>
            <div className="form-group">
                <label htmlFor="lblBody">Content</label>
                <input type="text" className="form-control" id="txtBody" placeholder="Enter Post Content" onChange={(e) => setBody(e.target.value) } />
            </div>
            <div className="form-group">
                <label htmlFor="lblTickers">Tickers</label>
                <input type="text" className="form-control" id="txtTickers" placeholder="Enter Tickers"  onChange={(e) => setTickers(e.target.value) } />
            </div>
            <div className="form-group">
                <label htmlFor="lblAuthor">Author</label>
                <input type="text" className="form-control" id="txtAuthor" placeholder="Enter Author"  onChange={(e) => setAuthor(e.target.value) } />
            </div>
            <input type="hidden" value={{date}}/>
            <button type="submit" className="btn btn-primary" onClick={ HandleSubmit } >Submit</button>
        </form>
    )

}