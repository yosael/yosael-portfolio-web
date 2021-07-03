import BaseLayout from '../../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/link';

const Portfolios = ({posts}) => {

    console.log(posts);
    const renderPosts = ()=>{
        return posts.map( post => 
            <li key={post.id}>
                <Link href={`/portfolios/${post.id}`}>
                    <a>{post.title}</a>
                </Link>
            </li>
        )
    }
    return (
        <BaseLayout>
            <h1>Hello Portfolios</h1>
            <ul>
                {renderPosts()}
            </ul>
        </BaseLayout>
    )
}

Portfolios.getInitialProps = async () =>{
    let posts = [];
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts = res.data;


    } catch (error) {
        console.log("Cannot fetch posts");
    }

    return { posts: posts.slice(0,10)};

}

export default Portfolios;
