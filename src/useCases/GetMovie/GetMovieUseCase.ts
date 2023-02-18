import { MongoCreateMovieRatingRepository } from './../../repositories/MongoCreateMovieRating';
import { GetMovieDTO } from './GetMovieDTO';
import { MongoCreateMovieRepository } from '../../repositories/MongoCreateMovie';

export class GetMovieUseCase {
    constructor(
        private mongoCreateMovieRepository: MongoCreateMovieRepository,
        private mongoCreateMovieRatingRepository: MongoCreateMovieRatingRepository
    ) { }

    async execute(data: GetMovieDTO) {
        try {
            const getMovie = await this.mongoCreateMovieRepository.get(data)
            const getMovieRating = await this.mongoCreateMovieRatingRepository.get(data)

            return {getMovie , getMovieRating}
        } catch (error) {
            throw new Error(error.message);
        };
    };
};