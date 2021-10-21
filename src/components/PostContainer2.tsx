import React, {FC} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 :FC = () => {
    // const {data,  isLoading} = postAPI.useFetchAllPostsQuery(20);
    const {data,  isLoading, error} = postAPI.endpoints.fetchAllPosts.useQuery(3)

    return (
        <div>
            {isLoading  && <h1>Loading... </h1>}
            {error  && <h1>error</h1>}
            <div className = "post__list">
                {/*{data && data.map(post =>*/}
                {/*<PostItem key ={post.id} post = {post}/>)}*/}
            </div>
        </div>
    );
};

export default PostContainer2;