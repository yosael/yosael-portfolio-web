import BaseLayout from '../../components/layouts/BaseLayout';
import router, { useRouter } from 'next/router'
import axios from 'axios';
import BasePage from '../../components/BasePage';

const Portfolio = ({post}) =>{

    const router = useRouter();

    return (
        <BaseLayout>
            <BasePage>
                <h1>This is portfolio new</h1>
                <h1>{post.title}</h1>
                <p>BODY: {post.body}</p>
                <p>ID: {post.id}</p>
            </BasePage>
        </BaseLayout>
    );
}


Portfolio.getInitialProps = async ( {query} )=>{

    let post = {};
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);    
        post = res.data;
        console.log("post found,",post);
    } catch (error) {
        console.log(error);
    }

    return { post };
}

export default Portfolio;