import mongoose, { model, Schema } from "mongoose";

const showSceme = new Schema({
    name:{
        type:String,
        required:[true, "Theatre name is Required"]
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'movies',
        required:true
    },
    theatre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'theatres',
        required:true
    },
    totalSeats:{
        type:Number,
        required:true
    },
    bookedSeats:{
        type:[String],
        default:[]
    },
    ticketPrice:{
        type:Number,
        required:true
    }
    

},{timestamps:true});

const Show = model('shows', showSceme);

export default Show;