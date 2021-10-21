import React, {FC, useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer :FC = () => {
    const [limit, setLimit] = useState(1)
    // const {data,  isLoading} = postAPI.useFetchAllPostsQuery(20);
    const {data,  isLoading, error, refetch} = postAPI.endpoints.fetchAllPosts.useQuery(limit, /*{pollingInterval: 1000}*/)
    const [createPost, {}] = postAPI.useCreatePostMutation()

    useEffect (() => {
        setTimeout(() => {setLimit(10)},3000)
    },[])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <div>
            <button onClick = {()=>refetch()} style = {{background:"lightblue"}}>
                Refresh
            </button>
            <button onClick = {handleCreate} style = {{background:"lightgreen"}}>
                Add new post
            </button>
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