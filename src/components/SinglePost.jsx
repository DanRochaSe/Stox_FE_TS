/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useFetchPostDetails } from "../hooks/PostHooks";



export default function SinglePost() {

    const [Post, setPost] = useState([]);
    const { getAccessTokenSilently } = useAuth0();
    //const [postID, setPostID] = useState(null);
    const { id } = useParams();
    if (!id) throw Error("Id is required");
    const postId = parseInt(id);
    const { data } = useFetchPostDetails(postId);
    console.log("this is the data in the details component, ", data)

    //useEffect(() => {

    //    //const params = URLSearchParams(props.ID);
    //    //setPostID(params.get('ID'));


    //    const getPosts = async () => {


    //        try {
    //            const accessToken = await getAccessTokenSilently();

    //            const post = await axios.get(`https://localhost:7294/post/${postId}`, {
    //                headers: {
    //                    authorization: `Bearer ${accessToken}`
    //                }
    //            })
    //            console.log(post);
    //            setPost(post.data[0]);


    //        } catch (e) {
    //            console.log(e.messagae);
    //        }
    //    }



    //    getPosts();

    //})





    return (

        <>
            <h1>All Posts</h1>
            

            {data && <div className="card" style={{ width: '18rem' }} >
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.subject}</p>
                    <p className="card-text">{data.body}</p>
                </div>
                <Link to={`/Posts/${data.postID}/update`} className="btn btn-primary">Edit</Link>
            </div>
            }

           
        </>

    )


}