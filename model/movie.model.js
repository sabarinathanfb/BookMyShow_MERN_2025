import { model,Schema } from "mongoose"

const movieSchema = new Schema({
    title:{
        type: String,
        required:[true, "Title is required"],
        trim: true,
        minLength:[10,'Min 10 characters are required']
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    genre:{
        type:String,
        enum:["Action","Thriller","Fantasy"],
        required:true,
    },
    language:{
        type:String,
        enum: ["English","Hindi"],  
        required:true,
    },
    realeaseData:{
        type:Date,
        require:true
    },
    poster:{
        type:String,
        required:true
    }
},
{timestamps:true}
);

const Movie = model('movies', movieSchema);

export default Movie;