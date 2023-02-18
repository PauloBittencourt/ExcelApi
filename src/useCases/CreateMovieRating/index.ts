import { CreateMovieRatingController } from './CreateMovieRatingController';
import { CreateMovieRatingUseCase } from './CreateMovieRatingUseCase';
import { MongoCreateMovieRatingRepository } from './../../repositories/MongoCreateMovieRating';

const mongoCreateMovieRatingRepository = new MongoCreateMovieRatingRepository()
const createMovieRatingUseCase = new CreateMovieRatingUseCase(mongoCreateMovieRatingRepository)
const createMovieRatingController = new CreateMovieRatingController(createMovieRatingUseCase)

export { createMovieRatingUseCase, createMovieRatingController }