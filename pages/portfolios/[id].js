import BaseLayout from '@/components/layouts/BaseLayout';
import router, { useRouter } from 'next/router'
import axios from 'axios';
import BasePage from '@/components/BasePage';
import { useGetPostById } from '../../actions';

const Portfolio = () =>{

    const router = useRouter();

    console.log(router.query.id);
    const {data, error, isValidating } = useGetPostById(router.query.id);
    console.log("data",data);
    const portfolio = data?data.payload:null;

    return (
        <BaseLayout>
            <BasePage>
                { ( !portfolio && !error) && <p>Loading Data</p>}
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