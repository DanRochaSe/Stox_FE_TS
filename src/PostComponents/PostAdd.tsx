import { useAddPost } from '../hooks/PostHooks';
import { Post} from '../types/Post';
import PostForm from './PostForm';


const PostAdd = () => {

    const addPostMutation = useAddPost();

    const newPost: Post = {

        title: "",
        subject: "",
        body: "",
        tickers: "",
        author: "",
        postID: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    return (
        <PostForm
            post={newPost}
            submitted={(p) => addPostMutation.mutate(p)}
        />
    )


}   


export default PostAdd;