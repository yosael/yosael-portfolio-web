import BaseLayout from '@/components/layouts/BaseLayout';
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import { useGetPosts } from '@/actions';


const Portfolios = () => {

    const { posts, error } = useGetPosts();

    const renderPosts = (posts)=>{
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
            <BasePage>
                <h1>Hello Portfolios</h1>
                {
                    posts &&
                    <ul>
                        {renderPosts(posts)}
                    </ul>
                }
                {
                    error && 
                    <div className="alert alert-danger" >{error.message}</div>
                }
            </BasePage>
        </BaseLayout>
    )
}


export default Portfolios;
