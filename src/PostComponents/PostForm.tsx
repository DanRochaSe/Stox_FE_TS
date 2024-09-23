import React, { useState } from "react";
import { Post } from "../types/Post";

type Args = {

    post: Post;
    submitted: (post: Post) => void;

}


const PostForm = ({ post, submitted }: Args) => {

    const [postState, setPostState] = useState<Post>({ ...post });

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        submitted(postState);
    }


    return (

        <form>
            <div className="form-group">
                <label htmlFor="lblTitle">Title</label>
                <input type="text" className="form-control" id="txtTitle" placeholder="Enter Title" value={postState.title} onChange={(e) => setPostState({ ...postState, title: e.target.value })} />
            </div>
            <div className="form-group">
                <label htmlFor="lblSubject">Subject</label>
                <input type="text" className="form-control" id="txtSubject" placeholder="Enter Subject" value={postState.subject} onChange={(e) => setPostState({ ...postState, subject: e.target.value })} />
            </div>
            <div className="form-group">
                <label htmlFor="lblBody">Content</label>
                <input type="text" className="form-control" id="txtBody" placeholder="Enter Post Content" value={postState.body} onChange={(e) => setPostState({ ...postState, body: e.target.value })} />
            </div>
            <div className="form-group">
                <label htmlFor="lblTickers">Tickers</label>
                <input type="text" className="form-control" id="txtTickers" placeholder="Enter Tickers" value={postState.tickers} onChange={(e) => setPostState({ ...postState, tickers: e.target.value })} />
            </div>
            <div className="form-group">
                <label htmlFor="lblAuthor">Author</label>
                <input type="text" className="form-control" id="txtAuthor" placeholder="Enter Author" value={postState.author} onChange={(e) => setPostState({ ...postState, author: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={ onSubmit} >Submit</button>
        </form>

    )

}
    export default PostForm;
 