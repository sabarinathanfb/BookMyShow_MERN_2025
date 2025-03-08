import jwt from'jsonwebtoken'

const isAdminMiddleware = async function(req, res, next){
    try{

        if(req.user.isAdmin){
            next();
        }else{
            throw new Error("You dont have Permission")
        }
        

    }catch(e){
        res.status(403).send({
            success:false,
            message: e.message
        })
    }
}

export default isAdminMiddleware;