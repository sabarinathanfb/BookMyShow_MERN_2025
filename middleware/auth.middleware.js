import jwt from'jsonwebtoken'

const AuthMiddleware= async function(req, res, next){
    try{

        const jwtToken = await req.headers['authorization'];
        

        const userData = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);

        console.log(userData);
        if(userData){
            req.user = userData;
            next();
        }else{
            throw new Error("User token is not Valid!!")
        }
        

    }catch(e){
        res.status(401).send({
            success:false,
            message: e.message
        })
    }
}

export default AuthMiddleware;