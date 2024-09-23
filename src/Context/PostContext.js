import React, { useContext, useState } from "react"

const PostContext = React.createContext();


export function usePost() {
    return useContext(PostContext);
}

export function PostProvider({ children }) {

    const [postId, setPostId] = useState(0);


    return (
        <PostContext.Provider value={{ postId, setPostId }}>
            { children }
        </PostContext.Provider>
    )
}