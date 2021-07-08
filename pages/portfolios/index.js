import BaseLayout from '@/components/layouts/BaseLayout';
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import { useGetData } from '@/actions';


const Portfolios = () => {

    const { data, error, loading } = useGetData('/api/v1/posts');
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
                    loading &&
                    <p>Loading ...</p>
                }
                {
                    data &&
                    <ul>
                        {renderPosts(data)}
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
