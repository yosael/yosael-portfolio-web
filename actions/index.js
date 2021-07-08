import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetPosts = () =>{
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function getPosts (){

            try {

                const res = await axios.get('/api/v1/posts');
                setPosts(res.data.posts);
                
            } catch (error) {
                if (error.response){
                    setError(error.response.data);
                }else if(error.request){
                    console.log("request",error.request) ;
                    setError(error.request.data);
                }else if(error.message){
                    console.log("message",error.message);
                    setError(error.message);
                 }
            }
        
        }

        getPosts();
    }, []);

    return {posts, error}
}