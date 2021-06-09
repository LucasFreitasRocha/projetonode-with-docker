import { Router } from 'express';

const testRouter = Router();

testRouter.get('/' , (req,res) => {
  return res.json({message: 'teste docker ts-node-dev'});
})
export default testRouter;
