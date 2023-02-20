import { MongoCreateMovieRepository } from "../../../repositories/MongoCreateMovie";
import { CreateMovieUseCase } from "../CreateMovieUseCase";

describe("Create Movie UseCase - Main Flow", () => {

    test("Movie can be created successfully by UseCase", async () => {

        const mockedMongoCreateMovieRepository = {
            name: "Karate Kid",
            gender: "Drama",
            duration: "130",
            director: "John Guilbert Avildsen",
            actors: "Daniel San",
            code: "A5340"
        };

        const mongoCreateMovieRepository = new MongoCreateMovieRepository();
        mongoCreateMovieRepository.save = jest.fn().mockResolvedValue(mockedMongoCreateMovieRepository)

        const sut = new CreateMovieUseCase(mongoCreateMovieRepository);

        const result = await sut.execute(mockedMongoCreateMovieRepository)

        expect(result).toMatchObject({
            name: "Karate Kid",
            gender: "Drama",
            duration: "130",
            director: "John Guilbert Avildsen",
            actors: "Daniel San",
            code: "A5340"
        })
    })

})
