import Show from '../model/show.model.js';

export const addShow = async(req,res) =>{

    try{ 
        const showDetail = new Show(req.body); // theatreId, movieId
        await showDetail.save();

        res.send({
            success:true,
            ...showDetail
        })

    }catch(e){
        res.status(500).send({
            success:false,
            message:e.message
        })
    }
}
export const updateShow = async(req,res) =>{

    try{
        const updatedShowDetail = await Show.findByIdAndUpdates(
            req.params.showId,
            {$set: req.body},
            {new: true, runValidators: true}
        )

        res.send(updatedShowDetail)
    }catch(e){
        res.status(500).send({
            success:false,
            message:e.message
        })
    }
}
export const deleteShow = async(req,res) =>{

    try{
        const deletedShow = await Show.findByIdAndDelete(req.params.movieId);

        res.status(200).send({
            message:"Successfully Deleted"
        })
    }catch(e){
        res.status(500).send({
            success:false,
            message:e.message
        })
    }
}
export const getShowById = async(req,res) =>{

    try{
        const showDetail = await Show.findById({ _id: req.params.showId}).populate(['movie','theatre'])
        res.send(showDetail)
    }catch(e){
        res.status(500).send({
            success:false,
            message:e.message
        })
    }
}
export const getShowByFilter = async(req,res) =>{

    try{
        const showDetail = await Show.findById(req.params.showId);
        res.status(200).send({
            success:true,
            showDetail
        })
    }catch(e){
        res.status(500).send({
            success:false,
            message:e.message
        })
    }
}