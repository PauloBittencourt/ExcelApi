import { Router } from "express";
import { MainApp } from "./src/routes/mainApp"

const router = Router();

router.use('/', MainApp);

export { router };