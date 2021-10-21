import React, {FC, useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer :FC = () => {
    const [limit, setLimit] = useState(1)
    // const {data,  isLoading} = postAPI.useFetchAllPostsQuery(20);
    const {data,  isLoading, error, refetch} = postAPI.endpoints.fetchAllPosts.useQuery(limit, /*{pollingInterval: 1000}*/)

    useEffect (() => {
        setTimeout(() => {setLimit(10)},3000)
    },[])

    return (
        <div>
            <button onClick = {()=>refetch()}> Refresh </button>

            {isLoading  && <h1>Loading... </h1>}
            {error  && <h1>error</h1>}
            <div className = "post__list">

                {data && data.map(post =>
                <PostItem key ={post.id} post = {post}/>)}
            </div>
        </div>
    );
};

export default PostContainer;