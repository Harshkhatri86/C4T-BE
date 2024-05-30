import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "kfbdekfbdbfkb";

export interface CustomRequest extends Request {
    token: string | JwtPayload;
   }

export const generateJWT = (payload: { email: string; password: string }) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY || "fdkbvb", {
    expiresIn: "24h",
  });
  return token;
};

export const verifyToken = (req: Request, res: Response , next : NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized User" });
  }
};
