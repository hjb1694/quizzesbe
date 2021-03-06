import dotenv from "dotenv";
import { join } from "path";

dotenv.config({
    path: join(process.cwd(), "..", ".env")
});

export default {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000, 
    jwt_secret: process.env.JWTSECRET || "secret"
}