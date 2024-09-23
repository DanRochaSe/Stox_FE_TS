import { useFetchPostDetails, useUpdatePost } from '../hooks/PostHooks';
import { useParams } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import PostForm from "./PostForm";


const PostUpdate = () => {

    const { id } = useParams();
    console.log("postupdate hit");
    if (!id) throw Error("Id is null");
    const postId = parseInt(id);

    const {data, status, isSuccess } = useFetchPostDetails(postId);
    const updatePostMutation = useUpdatePost();



    if (!isSuccess) return <ApiStatus status={status} />;


    return (
        <PostForm 
            post={data}
            submitted={p => updatePostMutation.mutate(p)}
        />
    )

}


export default PostUpdate;