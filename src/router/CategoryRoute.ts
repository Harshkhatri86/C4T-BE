import express from 'express'
import { validate } from '../middleware';
import { validateCategory } from '../middleware/CategoryValidate';
import { createCategory } from '../controller/CategoryController';

const router = express.Router() ; 

router.post("/" , validate(validateCategory) , createCategory)

export default router ; 