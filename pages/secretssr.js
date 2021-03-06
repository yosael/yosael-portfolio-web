import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { authorizeUser, withAuth } from '@/utils/auth';


export const Secretssr = ({ user }) => {
    return (
        <BaseLayout>
            <BasePage>
                <h1>Hello Secretssr {user.name}</h1>
            </BasePage>
        </BaseLayout>
    )
}


/*export const getServerSideProps = async({req,res}) =>{
    const user = await authorizeUser(req,res);
    return {
        props: { user }
    }
}*/

export const getServerSideProps = withAuth();

//export default withAuth(Secretssr);
export default Secretssr;
