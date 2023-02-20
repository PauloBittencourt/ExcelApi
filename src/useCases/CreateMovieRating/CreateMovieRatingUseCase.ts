import { MongoCreateMovieRatingRepository } from '../../repositories/MongoCreateMovieRating';
import { CreateMovieRatingDTO } from './CreateMovieRatingDTO';

export class CreateMovieRatingUseCase {
    constructor(private mongoCreateMovieRatingRepository: MongoCreateMovieRatingRepository) { }

    async execute(data: CreateMovieRatingDTO) {
        try {    
            return await this.mongoCreateMovieRatingRepository.save(data)
        } catch (error) {
            throw new Error(error.message);
        }

    }
}
