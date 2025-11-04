import express from "express";
import {

  getUsersController,
 
} from "../controller/users.js";

const router = express.Router();

router.get("/", getUsersController);


export default router;
