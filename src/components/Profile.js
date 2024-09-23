import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Profile = (props) => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const { userMetadata, setUserMetadata } = useState(null);


    useEffect(() => {
        const getUserMetadata = async () => {

            try {
                const accessToken = await getAccessTokenSilently();
                const allStoxs = await axios.get("https://localhost:7294/post", {
                    headers: {
                        authorization: `Bearer ${accessToken}`
                    }
                })
                console.log(allStoxs);
                
                console.log(accessToken);

             

            } catch (e) {
                console.log(e.messagae);
            }
        };
        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);


    const getPosts = async () => {
        try {
            const accessToken = await getAccessTokenSilently();
            console.log(accessToken);
            console.log(user);

            const allStoxs = await axios.get("https://localhost:7294/post", {
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            })
            console.log(allStoxs);


        } catch (e) {
            console.log(e.messagae);
        }
    }



    if (isLoading) {
        return <div>Loading ...</div>;
    }

   

    return (


        isAuthenticated && (
            <div style={{ height: '50px', position: "relative"}}>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {userMetadata ? (
                    <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : ("No user metada defined")}
                <button onClick={() => getPosts()}>Log In</button>;
            </div>
            
        )
    );
};

export default Profile;