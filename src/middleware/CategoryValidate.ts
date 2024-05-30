import joi from 'joi'

export const validateCategory = joi.object({
    name : joi.string().required()  
})