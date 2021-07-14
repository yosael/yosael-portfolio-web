import BaseLayout from '@/components/layouts/BaseLayout';
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import { useGetPosts } from '@/actions';


const Portfolios = () => {

    const { data, error, isValidating } = useGetPosts();
    console.log("data received: ",data);
    console.log("error received: ",error);
    console.log("isValidating: ",isValidating);
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
                    (!data && !error) &&
                    <p>Loading ...</p>
                }
                {
                    data &&
                    <ul>
                        {renderPosts(data.payload)}
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
