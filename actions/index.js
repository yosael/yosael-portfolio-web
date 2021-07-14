import { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

//const fetcher = (url)=> fetch(url).then(res => res.json());
const fetcher = url => axios.get(url).then(res => res.data);

export const useGetPosts = () =>{
    return useSWR('/api/v1/posts',fetcher);
}

export const useGetPostById = (id) =>{
    return useSWR(id?  `/api/v1/posts/${id}`: null,fetcher);
}
