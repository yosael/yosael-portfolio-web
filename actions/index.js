import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetData = (url) =>{
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData (){

            try {

                const res = await axios.get(url);
                setData(res.data.payload);
                setLoading(false);
                
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

                 setLoading(false);
            }

        
        }

        url && getData();
    }, [url]);

    return {data, error, loading}
}