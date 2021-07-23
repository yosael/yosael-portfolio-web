import { getSession } from '@auth0/nextjs-auth0';

export const authorizeUser = async (req, res) => {
    const session = await getSession(req,res);
    if(!session || !session.user){
        res.writeHead(302,{
            Location: '/api/auth/login'
        });
        res.end();
        return null;
    }
    
    return session.user;
}
