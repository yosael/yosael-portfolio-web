import BaseLayout from '@/components/layouts/BaseLayout';
import router, { useRouter } from 'next/router'
import axios from 'axios';
import BasePage from '@/components/BasePage';
import { useGetData } from '../../actions';

const Portfolio = () =>{

    const router = useRouter();

    const {data: portfolio, error, loading } = useGetData(router.query.id? `/api/v1/posts/${router.query.id}`:null);

    return (
        <BaseLayout>
            <BasePage>
                { loading && <p>Loading Data</p>}
                { error && <div className="alert alert-danger">{error.message}</div>  }
                { portfolio &&
                    <>
                        <h1>This is portfolio new</h1>
                        <h1>{portfolio.title}</h1>
                        <p>BODY: {portfolio.body}</p>
                        <p>ID: {portfolio.id}</p>
                    </>
                }
            </BasePage>
        </BaseLayout>
    );
}



export default Portfolio;