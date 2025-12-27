import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

const AUTH_MIDDLEWARE = (req, res, next) =>
{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer "))
    {
        return res.status(401).json({ message: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];
    try
    {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err)
    {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default AUTH_MIDDLEWARE;
