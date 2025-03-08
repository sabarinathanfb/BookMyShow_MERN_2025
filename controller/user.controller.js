import User from "../model/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUserDetail = async (req,res) =>{
    const jwtToken = await req.headers['authorization'];

    const userData = jwt.verify(jwtToken,'123456');

    if(userData){
        console.log('Email',userData.email);
        const userInfo = await User.findOne({email:userData.email})
        return res.status(200).send({
            status:true,
            ...userInfo
        })
    }else{
        return res.status(401).send({
            status:false,
            message: "Please Login"
        })
    }
    
    // const userDetails = await User.fin();

    res.status(200).send(userData);


}
export const createUser = async (req,res) =>{
    try{
        const userInput = req.body;
        const newUserData = await User.create(userInput);

        res.status(202).send(newUserData)
    }catch(e){
        res.status(500).send(e.message)
    }
    
}

export const login = async (req, res) => {
    try {
        const userDetails = req.body;

        if (!userDetails.email || !userDetails.password) {
            return res.status(400).send({
                status: false,
                message: "Please enter both email and password",
            });
        }

        const user = await User.findOne({ email: userDetails.email }).select('password email _id');

        if (!user) {
            return res.status(401).send({
                status: false,
                message: "Email or password is incorrect"
            });
        }

        const validPassword = await bcrypt.compare(userDetails.password, user.password);

        if (!validPassword) {
            return res.status(401).send({
                status: false,
                message: "Email or password is incorrect"
            });
        }

        const jwtToken = jwt.sign(
            { id: user._id, email: user.email },
           "123456",
            { expiresIn: '1d' }
        );

        res.setHeader('Authorization', jwtToken);
        return res.status(200).send({
            status: true,
            message: "You are logged in",
            token: jwtToken
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        });
    }
};

export const updateUser = async (req,res) =>{
    const newUserData = req.body;
    const userId = req.params.userId;

    const updatedData = await User.findByIdAndUpdates(
        userId,
        {$set: newUserData},
        {new: true, runValidators: true}

    );

    res.status(200).send(updatedData)

    
}
export const deleteUser = async (req,res) =>{
    const userId = req.param.userId;
    const deletedUser = await User.findByIdAndDelete(userId);

    res.status(200).json({message: "User Deleted Successfully"})
    
}