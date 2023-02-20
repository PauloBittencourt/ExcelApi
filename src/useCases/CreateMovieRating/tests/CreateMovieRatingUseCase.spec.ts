import { MongoCreateMovieRatingRepository } from "../../../repositories/MongoCreateMovieRating";
import { CreateMovieRatingUseCase } from "../CreateMovieRatingUseCase";

describe("Create Movie UseCase - Main Flow", () => {

    test("Movie can be created successfully by UseCase", async () => {

        const mockedMongoCreateMovieRatingRepository = {
            name: "Karate Kid",
            gender: "Drama",
            score: "10",
            evaluatorName: "Paulo Bittencourt",
            observation: "Um filme que fez parte da minha infância",
            code: "A5340",
        };

        const mongoCreateMovieRatingRepository = new MongoCreateMovieRatingRepository();
        mongoCreateMovieRatingRepository.save = jest.fn().mockResolvedValue(mockedMongoCreateMovieRatingRepository)

        const sut = new CreateMovieRatingUseCase(mongoCreateMovieRatingRepository);

        const result = await sut.execute(mockedMongoCreateMovieRatingRepository);

        expect(result).toMatchObject({
            name: "Karate Kid",
            gender: "Drama",
            score: "10",
            evaluatorName: "Paulo Bittencourt",
            observation: "Um filme que fez parte da minha infância",
            code: "A5340",
        });
    });

});
