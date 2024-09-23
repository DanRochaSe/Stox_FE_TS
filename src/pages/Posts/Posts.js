import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Post from '../../components/SinglePost';
import { useSearchParams } from "react-router-dom";
import { useFetchPosts } from '../hooks/PostHooks';



export default function Posts(props) {

    const { data } = useFetchPosts();
        
  

    return (

        <>
            <h1>Post</h1>
            {data &&  
                <Posts listPosts={data} limit={1} />
            }
        </>

    )


}