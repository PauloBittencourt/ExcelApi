import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";
import { check }  from 'express-validator';

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

            if(!name){
                throw new Error('name is required');
            };
            if(!gender){
                throw new Error('gender is required');
            };
            if(!duration){
                throw new Error('duration is required');
            };
            if(!director){
                throw new Error('director is required');
            };
            if(!actors){
                throw new Error('actors is required');
            };
            if(!code){
                throw new Error('code is required');
            };
   

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