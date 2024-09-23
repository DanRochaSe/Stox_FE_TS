import React, { useEffect, useState,  Component } from 'react';
import TrendingTable from '../../components/TrendingTable';
import { useAuth0 } from "@auth0/auth0-react";
import { useFetch } from '../../hooks/useFetch';
import * as sysUrl from '../../resources/js/url';
import Charts from '../../components/Charts'
import Profile from '../../components/Profile';
import Posts from '../../components/Post';
import SinglePost from '../../components/SinglePost';
import { useFetchPosts } from '../../hooks/PostHooks';
export default function Home(){


    const [PID, setPID] = useState(null);
  
    console.log("Home page hit");

    const { loading, error, data } = useFetchPosts();
    const [post, setPost] = useState();

    useEffect(() => {
        if (!loading && !error && data) {
            setPost(data);
        }
    }, [data]);

    return (
        <>
            {data &&
                <div className="mt-3">
                    <div className="row">
                        <div className="col-sm-8 p-5">
                            <Posts listPosts={data} limit={1} />
                        </div>
                        <div className="col-md-12 col-lg-4 bg-light p-5" id="side-column">
                            <div className="row g-2" id="sideBar">
                                <div className="col-lg-12 col-sm-12" id="news">
                                    {!PID && <Posts listPosts={data} limt={8} />}
                                    {/*{PID && <SinglePost ID={PID} />}*/}
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            {/*    <Charts />*/}
                        </div>
                    </div>


                </div>
            }
        </>
    )

}