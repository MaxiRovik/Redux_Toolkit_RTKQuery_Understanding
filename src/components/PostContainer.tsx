import React, {FC, useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer :FC = () => {
    const [limit, setLimit] = useState(1)
    const {data,  isLoading, error, refetch} = postAPI.useFetchAllPostsQuery(limit, /*{pollingInterval: 1000}*/)
    const [createPost, {error: postError, isLoading: postIsLoading}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    useEffect (() => {
        setTimeout(() => {setLimit(25)},3000)
    },[])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const removeItem = (post:IPost) => {
         deletePost(post)
        }

    const updateItem = (post:IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <button onClick = {() => refetch()} style = {{background:"lightblue"}}>
                Refresh
            </button>
            <button onClick = {handleCreate} style = {{background:"lightgreen"}}>
                Add new post
            </button>
            {isLoading  && <h1>Loading... </h1>}
            {error  && <h1>error</h1>}
            <div className = "post__list">

                {data && data.map(post =>
                <PostItem   key = {post.id} post = {post} remove={removeItem} update={updateItem}/>)}
            </div>
        </div>
    );
};

export default PostContainer;