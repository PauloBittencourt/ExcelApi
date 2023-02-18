import { MongoCreateMovieRepository } from '../../repositories/MongoCreateMovie';
import { MongoCreateMovieRatingRepository } from './../../repositories/MongoCreateMovieRating';
import { GetMovieController } from './GetMovieController';
import { GetMovieUseCase } from './GetMovieUseCase';

const mongoCreateMovieRepository= new MongoCreateMovieRepository()
const mongoCreateMovieRatingRepository = new MongoCreateMovieRatingRepository()
const getMovieUseCase = new GetMovieUseCase( mongoCreateMovieRatingRepository, mongoCreateMovieRepository);
const getMovieController = new GetMovieController(getMovieUseCase);

export { getMovieUseCase, getMovieController };