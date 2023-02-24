import { Request, Response } from "express";
import { GetMovieUseCase } from "./GetMovieUseCase";

export class GetMovieController {
    constructor(private getMovieUseCase: GetMovieUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {

            const { code } = request.query as any;

            const data = await this.getMovieUseCase.execute({ code });

            if (!code) {
                throw new Error('code is required')
            };

            return response.status(201).json({
                data: data
            });
        } catch (err) {
            return response.status(400).json({ error: { code: 400, message: err.message || "Unknown error." } });
        };
    };
};