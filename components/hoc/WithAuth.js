import Redirect from "../shared/Redirect";
import { useUser } from '@auth0/nextjs-auth0';
import { isAuthorized } from "../../utils/auth";

const withAuth = (Component) => (role) =>{
    return props => {
        const { user, error, isLoading } = useUser();

        if(isLoading){
            return <p>Loading...</p>
        }

        if(!user){
            return <Redirect url="/api/auth/login" />
        }
        else{

            if(role && !isAuthorized(user,role)){
                return <Redirect url="/api/auth/login" />
            }

            return <Component user={user} isLoading={isLoading} {...props} />
        }
    }
}

export default withAuth;