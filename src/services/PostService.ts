import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl:
            'http://localhost:4000'
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit = 1) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: "POST",
                body: post
            })
        })
    })
})

