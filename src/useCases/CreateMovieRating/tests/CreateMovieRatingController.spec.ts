import request from 'supertest';
import express from "express";
import { MongoCreateMovieRatingRepository } from '../../../repositories/MongoCreateMovieRating';
import { CreateMovieRatingUseCase } from '../CreateMovieRatingUseCase';
import { CreateMovieRatingController } from '../CreateMovieRatingController';

describe("Create Movie Rating Controller - Main Flow", () => {

    test("Movie Rating can be created successfully by Controller", async () => {
        const mockedMongoCreateMovieRatingRepository = {
            name: "Karate Kid",
            gender: "Drama",
            score: "10",
            evaluatorName: "Paulo Bittencourt",
            observation: "Um filme que fez parte da minha infância",
            code: "A5340",
        };

        const mongoCreateMovieRatingRepository = new MongoCreateMovieRatingRepository();
        mongoCreateMovieRatingRepository.save = jest.fn().mockResolvedValue(mockedMongoCreateMovieRatingRepository);

        const createMovieRatingUseCase = new CreateMovieRatingUseCase(mongoCreateMovieRatingRepository);
        createMovieRatingUseCase.execute = jest.fn().mockResolvedValue(mockedMongoCreateMovieRatingRepository);

        const sut = new CreateMovieRatingController(createMovieRatingUseCase);

        const app = express();
        app.use(express.json());
        app.post('/test', async (request, response) => { sut.handle(request, response) });

        const response = await request(app).post('/test').send(mockedMongoCreateMovieRatingRepository);

        expect(response.status).toBe(201);

    });
});

describe("Create Movie Rating Controller - Alternative flow", () => {

    test("It should not be possible to create a movie rating from the controller", async () => {
        const mockedMongoCreateMovieRatingRepository = {
            name: "Karate Kid",
            gender: "Drama",
            score: "10",
            evaluatorName: "Paulo Bittencourt",
            observation: "Um filme que fez parte da minha infância",
            code: "A5340",
        };

        const mongoCreateMovieRatingRepository = new MongoCreateMovieRatingRepository();
        mongoCreateMovieRatingRepository.save = jest.fn().mockResolvedValue(mockedMongoCreateMovieRatingRepository);

        const createMovieRatingUseCase = new CreateMovieRatingUseCase(mongoCreateMovieRatingRepository);
        createMovieRatingUseCase.execute = jest.fn().mockRejectedValue(mockedMongoCreateMovieRatingRepository);

        const sut = new CreateMovieRatingController(createMovieRatingUseCase);

        const app = express();
        app.use(express.json());
        app.post('/test', async (request, response) => { sut.handle(request, response) });

        const response = await request(app).post('/test').send({
            name: "Karate Kid",
            gender: "Drama",
            score: "10",
            evaluatorName: "Paulo Bittencourt",
            observation: "Um filme que fez parte da minha infância",
            code: "A5340",
        });

        expect(response.status).toBe(400);

    });
 
});