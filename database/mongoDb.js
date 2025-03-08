import mongoose from "mongoose"

const connectToDB = async() => {
    try{
        const{connection} = await mongoose.connect('mongodb://localhost:27017/BookMyshow');
        if(connection){
            console.log(`Connected to database: ${connection.host}`);
        }
    }catch(e){
        console.log('Error Connecting');
    }
}

export default connectToDB