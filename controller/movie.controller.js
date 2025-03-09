import Movie from '../model/movie.model.js'

export const addMovie = async(req, res)=>{
    try{
        

        const newMovie = new Movie(req.body);
        newMovie.owner = req.user.id;
        const savedMovie = await newMovie.save();

        res.status(200).send({
            success:true,
            ...savedMovie
        })

    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }

}
export const getAllMovie = async(req, res)=>{

    try{
        const ownerId = req.query.ownerId;
        const filter = {};

        const moviesDetails = await Movie.find(filter);
        res.send(moviesDetails);
    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }

}
export const getMovieById = async(req, res)=>{
    try{
        const movieDetails = await Movie.findById(req.params.movieId)
        res.status(200).send({
            success:true,
            movieDetails
        })

    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }
}

export const updateMovie = async(req, res)=>{
    try{
        const movieDetails = await Movie.findByIdAndUpdates(
            req.params.movieId,
            {$set: req.body},
            {new: true, runValidators: true}
        )

        res.send(movieDetails)
    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }
}
export const deleteMovie = async(req, res)=>{
    try{
        const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId);

        res.status(200).send(deletedMovie);
    }catch(e){
        res.status(500).send({
            success:false,
            message: e.message
        })
    }
}