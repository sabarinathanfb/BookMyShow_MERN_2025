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

    try{
        const ownerId = req.query.ownerId;
        const filter = {};
        if(ownerId){
            filter.ownerId = ownerId
        }
        const theatresDetails = await Theatre.find(filter);
        res.send(theatresDetails);
    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }

}
export const getTheatreById = async(req, res)=>{
    try{
        const theatreDetails = await Theatre.findById(req.params.theatreId)
        res.status(200).send({
            success:true,
            theatreDetails
        })

    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }
}

export const updateTheatre = async(req, res)=>{
    try{
        const theatreDetails = await Theatre.findByIdAndUpdates(
            req.params.theatreId,
            {$set: req.body},
            {new: true, runValidators: true}
        )
    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }
}
export const deleteTheatre = async(req, res)=>{
    try{
        const deletedTheatre = await Theatre.findByIdAndDelete(req.params.theatreId);

        res.status(200).send(deletedTheatre);
    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }
}