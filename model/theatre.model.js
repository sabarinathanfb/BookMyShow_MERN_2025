import mongoose, { model, Schema } from "mongoose";

const theatreSchema = new Schema({
    name:{
        type:String,
        required:[true, "Theatre name is Required"]
    },
    location:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase: true,
        unique: true
    },
    isActive:{
        type:Boolean,
        required:true,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'

    }

},{timestamps:true});

const Theatre = model('threatres', theatreSchema);

export default Theatre;