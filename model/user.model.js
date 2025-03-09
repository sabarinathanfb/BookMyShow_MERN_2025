import { model,Schema } from "mongoose";
import bcrypt from 'bcrypt'
const userScheme = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        lowercase: true,
        unique: true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength: [3,'Min 2 chars'],
        maxLenght:[10, 'Max 10 chars'],
        select: false
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false

    }
});


userScheme.pre('save', async function(next) {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword
    next();
});
// userScheme.post('save', function(next) {
//     const user = this;
//     console.log('Post hook');
//     console.log(user);
   
    
//     next(user)
// });


const User = model('users', userScheme);

export default User;