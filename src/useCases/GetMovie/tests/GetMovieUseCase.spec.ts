//@ts-nocheck
import { MongoCreateMovieRepository } from "../../../repositories/MongoCreateMovie";
import { MongoCreateMovieRatingRepository } from "../../../repositories/MongoCreateMovieRating";
import { GetMovieUseCase } from "../GetMovieUseCase";

describe("Get Movie UseCase - Main Flow", () => {

    test("A movie can be caught by UseCase", async () => {

        const mockedMongoGetMovieRatingRepository = {
            code: "A5340",
        };

        const mockedMongoCreateMovieRatingRepository = {
            name: "Karate Kid",
            gender: "Drama",
            score: "10",
            evaluatorName: "Paulo Bittencourt",
            observation: "Um filme que fez parte da minha infância",
            code: "A5340",
        };

        const mockedMongoCreateMovieRepository = {
            name: "Karate Kid",
            gender: "Drama",
            duration: "130",
            director: "John Guilbert Avildsen",
            actors: "Daniel San",
            code: "A5340"
        };

        const mongoCreateMovieRepository = new MongoCreateMovieRepository();
        mongoCreateMovieRepository.get = jest.fn().mockResolvedValue(mockedMongoCreateMovieRepository);

        const mongoCreateMovieRatingRepository = new MongoCreateMovieRatingRepository();
        mongoCreateMovieRatingRepository.get = jest.fn().mockResolvedValue(mockedMongoCreateMovieRatingRepository);

        const sut = new GetMovieUseCase(mongoCreateMovieRatingRepository, mongoCreateMovieRepository);

        const result = await sut.execute(mockedMongoGetMovieRatingRepository);

        expect(result).toMatchObject({
            "getMovie": {
                "code": "A5340",
            },
            "getMovieRating": {
                "code": "A5340",
            }
        });
    });

});
