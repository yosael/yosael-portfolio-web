import Redirect from "../shared/Redirect";
import { useUser } from '@auth0/nextjs-auth0';

const withAuth = (Component) => {
    return props => {
        const { user, error, isLoading } = useUser();

        if(isLoading){
            return <p>Loading...</p>
        }

        if(!user){
            return <Redirect url="/api/auth/login" />
        }
        else{
            return <Component user={user} isLoading={isLoading} {...props} />
        }
    }
}

export default withAuth;