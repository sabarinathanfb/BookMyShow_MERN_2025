import Theatre from '../model/theatre.model.js'

export const addTheatre = async(req, res)=>{
    try{

        const newTheatre = new Theatre(req.body);
        newTheatre.owner = req.user.id;
        const savedTheatre = await newTheatre.save();

        res.status(200).send({
            success:true,
            ...savedTheatre
        })

    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }

}
export const getAllTheatre = async(req, res)=>{

}
export const getTheatreById = async(req, res)=>{

}
export const getTheatreByOwner = async(req, res)=>{

}
export const updateTheatre = async(req, res)=>{

}
export const deleteTheatre = async(req, res)=>{

}