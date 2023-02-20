import mongoose from "mongoose";

const CreateMovieRatingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
    evaluatorName: {
        type: String,
        required: true,
    },
    observation: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    }

});

const CreateMovieRatingModel = mongoose.models?.CreateMovieRating || mongoose.model("CreateMovieRating", CreateMovieRatingSchema);

export default CreateMovieRatingModel;