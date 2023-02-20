import request from 'supertest';
import express from "express";
import { MongoCreateMovieRepository } from '../../../repositories/MongoCreateMovie';
import { CreateMovieUseCase } from '../CreateMovieUseCase';
import { CreateMovieController } from '../CreateMovieController';

describe("Create Movie Controller - Main Flow", () => {

    test("Movie can be created successfully by Controller", async () => {
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

        const createMovieUseCase = new CreateMovieUseCase(mongoCreateMovieRepository);
        createMovieUseCase.execute = jest.fn().mockResolvedValue(mockedMongoCreateMovieRepository)

        const sut = new CreateMovieController(createMovieUseCase)

        const app = express()
        app.use(express.json())
        app.post('/test', async (request, response) => { sut.handle(request, response) })

        const response = await request(app).post('/test').send(mockedMongoCreateMovieRepository)

        expect(response.status).toBe(201);

    })
})

describe("Create Movie Controller - Alternative flow", () => {

    test("It should not be possible to create a movie from the controller without the name parameter", async () => {
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

        const createMovieUseCase = new CreateMovieUseCase(mongoCreateMovieRepository);
        createMovieUseCase.execute = jest.fn().mockResolvedValue(mockedMongoCreateMovieRepository)

        const sut = new CreateMovieController(createMovieUseCase)

        const app = express()
        app.use(express.json())
        app.post('/test', async (request, response) => { sut.handle(request, response) })

        const response = await request(app).post('/test').send({
            gender: "Drama",
            duration: "130",
            director: "John Guilbert Avildsen",
            actors: "Daniel San",
            code: "A5340"
        })

        expect(response.status).toBe(400);
        expect(response.body).toMatchObject({
            "error": {
                "code": 400,
                "message": "name is required",
            }
        })

    })


    test("It should not be possible to create a movie from the controller without the gender parameter", async () => {
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

        const createMovieUseCase = new CreateMovieUseCase(mongoCreateMovieRepository);
        createMovieUseCase.execute = jest.fn().mockResolvedValue(mockedMongoCreateMovieRepository)

        const sut = new CreateMovieController(createMovieUseCase)

        const app = express()
        app.use(express.json())
        app.post('/test', async (request, response) => { sut.handle(request, response) })

        const response = await request(app).post('/test').send({
            name: "Karate Kid",
            duration: "130",
            director: "John Guilbert Avildsen",
            actors: "Daniel San",
            code: "A5340"
        })

        expect(response.status).toBe(400);
        expect(response.body).toMatchObject({
            "error": {
                "code": 400,
                "message": "gender is required",
            }
        })

    })

    test("It should not be possible to create a movie from the controller without the duration parameter", async () => {
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

        const createMovieUseCase = new CreateMovieUseCase(mongoCreateMovieRepository);
        createMovieUseCase.execute = jest.fn().mockResolvedValue(mockedMongoCreateMovieRepository)

        const sut = new CreateMovieController(createMovieUseCase)

        const app = express()
        app.use(express.json())
        app.post('/test', async (request, response) => { sut.handle(request, response) })

        const response = await request(app).post('/test').send({
            name: "Karate Kid",
            gender: "Drama",
            director: "John Guilbert Avildsen",
            actors: "Daniel San",
            code: "A5340"
        })

        expect(response.status).toBe(400);
        expect(response.body).toMatchObject({
            "error": {
                "code": 400,
                "message": "duration is required",
            }
        })

    })

    test("It should not be possible to create a movie from the controller without the director parameter", async () => {
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

        const createMovieUseCase = new CreateMovieUseCase(mongoCreateMovieRepository);
        createMovieUseCase.execute = jest.fn().mockResolvedValue(mockedMongoCreateMovieRepository)

        const sut = new CreateMovieController(createMovieUseCase)

        const app = express()
        app.use(express.json())
        app.post('/test', async (request, response) => { sut.handle(request, response) })

        const response = await request(app).post('/test').send({
            name: "Karate Kid",
            gender: "Drama",
            duration: "130",
            actors: "Daniel San",
            code: "A5340"
        })

        expect(response.status).toBe(400);
        expect(response.body).toMatchObject({
            "error": {
                "code": 400,
                "message": "director is required",
            }
        })

    })

    test("It should not be possible to create a movie from the controller without the actors parameter", async () => {
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

        const createMovieUseCase = new CreateMovieUseCase(mongoCreateMovieRepository);
        createMovieUseCase.execute = jest.fn().mockResolvedValue(mockedMongoCreateMovieRepository)

        const sut = new CreateMovieController(createMovieUseCase)

        const app = express()
        app.use(express.json())
        app.post('/test', async (request, response) => { sut.handle(request, response) })

        const response = await request(app).post('/test').send({
            name: "Karate Kid",
            gender: "Drama",
            duration: "130",
            director: "John Guilbert Avildsen",  
            code: "A5340"
        })

        expect(response.status).toBe(400);
        expect(response.body).toMatchObject({
            "error": {
                "code": 400,
                "message": "actors is required",
            }
        })

    })

    test("It should not be possible to create a movie from the controller without the code parameter", async () => {
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

        const createMovieUseCase = new CreateMovieUseCase(mongoCreateMovieRepository);
        createMovieUseCase.execute = jest.fn().mockResolvedValue(mockedMongoCreateMovieRepository)

        const sut = new CreateMovieController(createMovieUseCase)

        const app = express()
        app.use(express.json())
        app.post('/test', async (request, response) => { sut.handle(request, response) })

        const response = await request(app).post('/test').send({
            name: "Karate Kid",
            gender: "Drama",
            duration: "130",
            director: "John Guilbert Avildsen",  
            actors: "Daniel San"            
        })

        expect(response.status).toBe(400);
        expect(response.body).toMatchObject({
            "error": {
                "code": 400,
                "message": "code is required",
            }
        })

    })
})