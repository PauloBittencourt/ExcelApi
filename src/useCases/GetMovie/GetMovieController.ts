import { Request, Response } from "express";
import { GetMovieUseCase } from "./GetMovieUseCase";


export class GetMovieController {
    constructor(private getMovieUseCase: GetMovieUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {

            const { code } = request.body;

            const data = await this.getMovieUseCase.execute({ code });

            return response.status(201).json({
                data: data
            });
        } catch (err) {
            return response.status(400).json({ error: { code: 400, message: err.message || "Unknown error." } });
        };
    };
};