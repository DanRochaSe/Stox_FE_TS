import React, { useState, useEffect} from 'react';
import './Post.css'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFetchPosts } from '../hooks/PostHooks';
export default function Post(props) {

    const [allPosts, setAllPosts] = useState([]);
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const [accessToken, setAccessToken] = useState("");

    //const { data } = useFetchPosts();
    //console.log(data);
    
    //useEffect(() => {

    //    const getPosts = async () => {
    //        try {

    //            const token = await axios.post("https://localhost:44323/api/authentication/authenticate", {
    //                UserName: "d4nielrocha",
    //                Passwrod: "123456"
    //            })

    //            console.log(token);
    //            setAccessToken(token.data);
    //            //const accessToken = await getAccessTokenSilently();
    //            /*https://localhost:44323*/
    //            const posts = await axios.get("https://localhost:44323/api/v1/post", {
    //                headers: {
    //                    authorization: `Bearer ${accessToken === "" ? token.data : accessToken }`
    //                }
    //            })
    //            console.log(posts);

    //            await setAllPosts(Array.from(posts.data));



    //        } catch (e) {
    //            console.log(e.messagae);
    //        }
    //    }
    //        getPosts();

    //},[])

    return (

        <>

            {props.listPosts && props.listPosts.slice(0, props.limit).map(post => {
                console.log(post);
                return (
                    <div key={post.postID}>
                        <Link key={ post.postID} to={`/Posts/${post.postID}`}>{post.title}</Link>
                        <p>{post.subject}</p>
                        <p>{post.body}</p>
                    </div>

                )
            }) }
        
        </>

       



    )
} 