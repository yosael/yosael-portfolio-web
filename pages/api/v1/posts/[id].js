import axios from 'axios';

export default async (req,res) => {
    
    try {
        const apiResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);
        const post = apiResponse.data;
        res.status(200).json({ payload: post});
    } catch (error) {
        console.log("error status",error);
        //res.status(error.status || 400).json({message:'Api Error!'});
        res.status(error.status || 400).json({message:'Api Error!'});
        
    }

}