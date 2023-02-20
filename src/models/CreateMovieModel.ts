import mongoose from "mongoose";

const CreateMovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    actors: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    }

});

const CreateMovieModel = mongoose.models?.CreateMovie || mongoose.model("CreateMovie", CreateMovieSchema);

export default CreateMovieModel;