//@ts-nocheck
import { Request, Response } from "express";
import { CreateMovieRatingUseCase } from "./CreateMovieRatingUseCase";
import csv from "csvtojson";

export class CreateMovieRatingController {
    constructor(private CreateMovieRatingUseCase: CreateMovieRatingUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {

            const jsonObjList = await csv()
                .fromFile('src/csvFiles/movieRating.csv')
                .then((jsonObj) => {
                    return jsonObj
                })

            console.log('jsonObjList', jsonObjList);

            const data = await this.CreateMovieRatingUseCase.execute(
                (
                    jsonObjList
                )
            );

            return response.status(201).json(data);
        } catch (err) {
            return response.status(400).json({ error: { code: 400, message: err.message || "Unknown error." } });
        };
    };
};