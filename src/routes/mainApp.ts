import { Router } from "express";
import { createMovieController } from "../useCases/CreateMovie";
import { createMovieRatingController } from "../useCases/CreateMovieRating";
import { getMovieController } from "../useCases/GetMovie";

const MainApp = Router();

MainApp.post("/create-movie/", (request, response) => {
    return createMovieController.handle(request, response);
});

MainApp.post("/create-movie-rating/", (request, response) => {
    return createMovieRatingController.handle(request, response);
});

MainApp.get("/get-movie", (request, response) => {
    return getMovieController.handle(request, response);
});

export { MainApp };
