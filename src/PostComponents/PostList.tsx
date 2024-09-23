import { useFetchPosts } from "../hooks/PostHooks";
import { useAuth0 } from "@auth0/auth0-react";

const PostList = () => {
    const { isAuthenticated, getAccessTokenSilently, getIdTokenClaims } = useAuth0();
    const { data } = useFetchPosts();

    const handleTokens = async () => {

        const accessToken = await getAccessTokenSilently();
        const claims = await getIdTokenClaims();
        console.log(accessToken);
        console.log(claims);
    }


    if (isAuthenticated) {
        handleTokens();
    }
    return (


        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(post => {
                    return (
                        <tr key={post.postID} >
                            <th scope="row">{post.postID}</th>
                            <td>{ post.title}</td>
                            <td>{ post.subject}</td>
                            <td>{ post.body}</td>
                        </tr>
                    );
                })
                }
            </tbody>
        </table>


)

}


export default PostList;