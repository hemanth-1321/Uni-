import { User } from "@prisma/client";
import { prismaClient } from "../clients/db";
import jwt from "jsonwebtoken";

const JWT_SECERET = "hemanth21";
class JWTservices {
  public static generateToken(user: User) {
    const payload = {
      id: user?.id,
      email: user?.email,
    };

    const token = jwt.sign(payload, JWT_SECERET);
    return token;
  }
}

export default JWTservices;
