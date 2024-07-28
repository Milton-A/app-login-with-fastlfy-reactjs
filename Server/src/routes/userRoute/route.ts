import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import {
  createUser,
  getAllUsers,
  login,
} from "../../controller/userController";

const userRoutes = async (app: FastifyInstance) => {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/create",
    {
      schema: {
        body: z.object({
          username: z.string(),
          password: z.string().min(8),
        }),
      },
    },
    createUser
  );
  app.post("/login", login);
  app.get("/", getAllUsers);
};

export default userRoutes;
