//@ts-nocheck
import request from 'supertest';
import express from "express";
import { MongoCreateMovieRepository } from '../../../repositories/MongoCreateMovie';
import { MongoCreateMovieRatingRepository } from '../../../repositories/MongoCreateMovieRating';
import { GetMovieUseCase } from '../GetMovieUseCase';
import { GetMovieController } from '../GetMovieController';

describe("Get Movie Controller - Main Flow", () => {

    test("A movie can be caught by Controller", async () => {

        const mockedMongoGetMovieRatingRepository = {
            code: "A5340",
        };

        const mongoCreateMovieRepository = new MongoCreateMovieRepository();
        mongoCreateMovieRepository.get = jest.fn().mockResolvedValue(mockedMongoGetMovieRatingRepository);

        const mongoCreateMovieRatingRepository = new MongoCreateMovieRatingRepository();
        mongoCreateMovieRatingRepository.get = jest.fn().mockResolvedValue(mockedMongoGetMovieRatingRepository);

        const getMovieUseCase = new GetMovieUseCase(mongoCreateMovieRatingRepository, mongoCreateMovieRepository);
        getMovieUseCase.execute = jest.fn().mockResolvedValue(mockedMongoGetMovieRatingRepository);

        const sut = new GetMovieController(getMovieUseCase);

        const app = express();
        app.use(express.json());
        app.post('/test', async (request, response) => { sut.handle(request, response) });

        const response = await request(app).post('/test').send(mockedMongoGetMovieRatingRepository);

        expect(response.status).toBe(201);

    });
});

describe("Get Movie Controller - Alternative flow", () => {

    test("It should not be possible to Get a movie from the controller without the code parameter", async () => {
        const mockedMongoGetMovieRatingRepository = {
            name: "Karate Kid",
            gender: "Drama",
            score: "10",
            evaluatorName: "Paulo Bittencourt",
            observation: "Um filme que fez parte da minha infância",
            code: "A5340",
        };

        const mongoCreateMovieRepository = new MongoCreateMovieRepository();
        mongoCreateMovieRepository.get = jest.fn().mockResolvedValue(mockedMongoGetMovieRatingRepository);

        const mongoCreateMovieRatingRepository = new MongoCreateMovieRatingRepository();
        mongoCreateMovieRatingRepository.get = jest.fn().mockResolvedValue(mockedMongoGetMovieRatingRepository);

        const getMovieUseCase = new GetMovieUseCase(mongoCreateMovieRatingRepository, mongoCreateMovieRepository);
        getMovieUseCase.execute = jest.fn().mockResolvedValue(mockedMongoGetMovieRatingRepository);

        const sut = new GetMovieController(getMovieUseCase);

        const app = express();
        app.use(express.json());
        app.post('/test', async (request, response) => { sut.handle(request, response) });

        const response = await request(app).post('/test').send({});

        expect(response.status).toBe(400);
        expect(response.body).toMatchObject({
            "error": {
                "code": 400,
                "message": "code is required",
            }
        });
    });
});