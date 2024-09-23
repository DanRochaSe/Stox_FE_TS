import { config } from "../AppConfig"
import axios, { AxiosError, AxiosResponse } from "../../../node_modules/axios/index";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from 'react-router-dom';
import { Post } from '../types/Post'
import { PostDTO } from "../types/PostDTO";

export const useFetchPosts = () => {
    return useQuery<Post[], AxiosError>('posts', () =>
        axios.get(`${config.apiHostUrl}/v1/post`).then(res => res.data)
    );
};


export const useFetchPostDetails = (id: number) => {
    return useQuery<Post, AxiosError>(['post', id], () =>
        axios.get(`${config.apiHostUrl}/v1/post/${id}`).then(res => res.data)
    );
};


export const useAddPost = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, PostDTO>(
        (post) => axios.post(`${config.apiHostUrl}/v1/post`, post),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('posts');
                nav("/Posts");
            }
        }
    );
};

export const useUpdatePost = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Post>(
        (post) => axios.put(`${config.apiHostUrl}/v1/post/${post.postID}`, post),
        {

            onSuccess: (_,post) => {
                queryClient.invalidateQueries('posts');
                nav(`/Posts/${post.postID}`)
            }

        }
    );
};


export const useDeletePost = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Post>((post) => axios.delete(`${config.apiHostUrl}/v1/post/${post.postID}`),
        {

            onSuccess: (_, post) => {
                queryClient.invalidateQueries('posts');
                nav(`/Posts`)
            }

        }
    );
};