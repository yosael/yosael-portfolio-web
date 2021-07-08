import axios from 'axios';

export default async (req,res) => {
    
    try {
        const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = apiResponse.data;
        res.status(200).json({ posts: posts.slice(0,10)});
    } catch (error) {
        console.log("error status",error);
        //res.status(error.status || 400).json({message:'Api Error!'});
        res.status(error.status || 400).json({message:'Api Error!'});
        
    }

}
