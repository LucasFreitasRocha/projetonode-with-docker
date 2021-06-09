import express from 'express';
import testRouter from './test.routes';
const  routes = express.Router();
routes.use('/testando' , testRouter);



export default routes;
