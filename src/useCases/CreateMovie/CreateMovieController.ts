import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";


export class CreateMovieController {
    constructor(private createMovieUseCase: CreateMovieUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {

            const {
                name,
                gender,
                duration,
                director,
                actors,
                code

            } = request.body;

            const data = await this.createMovieUseCase.execute({
                name,
                gender,
                duration,
                director,
                actors,
                code
            });

            return response.status(201).json({
                data: data
            });
        } catch (err) {
            return response.status(400).json({ error: { code: 400, message: err.message || "Unknown error." } });
        };
    };
};