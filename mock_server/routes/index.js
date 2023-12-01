import express from "express";
// import contactRouter from './contactRouter.js';
import todoRouter from './todoRouter.js';

const router=express.Router();
// router.use('/contact',contactRouter);
// router.use('/todos',todoRouter);
router.use(todoRouter);
export default router;