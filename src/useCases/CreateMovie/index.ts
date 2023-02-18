import { MongoCreateMovieRepository } from '../../repositories/MongoCreateMovie';
import { CreateMovieController } from './CreateMovieController';
import { CreateMovieUseCase } from './CreateMovieUseCase';


const mongoCreateMovieRepository = new MongoCreateMovieRepository();
const createMovieUseCase = new CreateMovieUseCase(mongoCreateMovieRepository);
const createMovieController = new CreateMovieController(createMovieUseCase);

export { createMovieUseCase, createMovieController };