import { CreateMovieRating } from "../entities/CreateMovieRatingEntity";

type MovieRatingCsv = {
    name: string;
    gender: string;
    score: string;
    evaluatorName: string;
    observation: string;
    code: string;
}

const adapt = (data: MovieRatingCsv) => {
const createMovieRating = new CreateMovieRating()
} 