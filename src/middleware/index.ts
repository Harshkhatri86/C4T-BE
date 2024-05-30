import { Request, Response, NextFunction } from "express";
import Joi, { Schema } from "joi";

export const validate =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = schema.validate(req.body);

      if (error) {
        res.json(400).json({ message: error.details[0].message });
        return;
      }
      next();
    } catch (error) {
      res.status(500).json({ message: "internal Server Error" });
    }
  };
