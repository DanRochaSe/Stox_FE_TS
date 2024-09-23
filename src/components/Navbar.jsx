import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink} from 'react-router-dom'
import './Navbar.css'
import { config } from "../AppConfig"
import { AuthBody } from '../types/AuthBody';
import axios from "../../../node_modules/axios/index";
import useFetchUser from '../hooks/UserHooks';


function Navbar() {

    const [ isAdmin, setIsAdmin ] = useState(false);
    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
    const { isSuccess, data: userClaims } = useFetchUser();
    if (isSuccess) {
        console.log(userClaims);
    }
    

        async function HandleSubmit(e) {
            e.preventDefault();

            const newAuthBody = {
                UserName: "d4nielrocha",
                Password: "test"

            };

            console.log(JSON.stringify(newAuthBody));
            try {
                const response = await fetch(`${config.apiHostUrl}/authentication/authenticate`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": "*",
                    },
                    //cache: "default",
                    body: (JSON.stringify(newAuthBody))
                });



                return true;



            }
            catch (err) {
                console.log(err);
                return err;
            }




        }
    



    //useEffect(() => {

    //    const setAdminUser = () => {

        
    //    if (user !== undefined && isAuthenticated) {
    //        user.email === "dantest@test.ie" ? setIsAdmin(true) : setIsAdmin(false); 
    //    }

    //    console.log(isAdmin);
    //    console.log(user);
    //    }


    //    setAdminUser();
    //}, [user, isAuthenticated])


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <li><NavLink to="/" className="navbar-brand" href="#">Sto<span>X</span></NavLink></li>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end bg-dark" id="navbarNav">
                    <ul className="navbar-nav bg-dark navbar-dark">
                        <li className="nav-item mx-3">
                            <NavLink to="/" className="nav-link active">Home</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/ManagePost" className="nav-link">Add Post</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/Faceoff" className="nav-link">FaceOff</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/Account" className="nav-link">MyStox</NavLink>
                        </li>

                        {isAdmin &&
                            <li className="nav-item mx-3">
                                <NavLink to="/Admin" className="nav-link" id="adminButton">Admin Section</NavLink>
                            </li>
                        }
                        {!isSuccess && 
                            <li className="nav-item mx-3">
                                {/*<button type="button" onClick={() => loginWithRedirect()} className="nav-item btn btn-warning mt-1" href="#" id="loginBtn">Login</button>*/}
                                <button type="button" onClick={HandleSubmit} className="nav-item btn btn-warning mt-1" href="#" id="loginBtn">Login</button>
                            </li>
                        }
                        {isSuccess &&
                            <li className="nav-item mx-3 my-1">
                                <button type="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="nav-item btn btn-danger">Logout</button>
                            </li>
                        }
                        {isSuccess && userClaims.length > 0  && 
                        <li className="nav-item mx-3" style={{ color: 'white', fontSize: '10px', marginTop: '20px' } }>
                            {/*<Profile/>*/}                                
                                <p>You are logged in as {userClaims.find(c => c.type === "username").value}</p>                          
                            </li>
                        }
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default Navbar;



//<Ticker />