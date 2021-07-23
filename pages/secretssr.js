import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from "../components/hoc/WithAuth";
import { getSession } from '@auth0/nextjs-auth0';


export const Secretssr = ({ user }) => {
    return (
        <BaseLayout>
            <BasePage>
                <h1>Hello Secretssr {user}</h1>
            </BasePage>
        </BaseLayout>
    )
}

export const getServerSideProps = async({req,res}) =>{
    //const session = await auth0.getSession(req);
    const session = await getSession(req,res);
    if(!session || !session.user){
        res.writeHead(302,{
            Location: '/api/auth/login'
        });
        res.end();
        return {props: {}};
    }
    return {
        props: { user: session.user.name}
    }
}

//export default withAuth(Secretssr);
export default Secretssr;
