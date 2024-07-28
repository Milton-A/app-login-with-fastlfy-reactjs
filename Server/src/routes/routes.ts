import fastify from "fastify";
import userRoutes from "./userRoute/route";

const buildServerRoutes = () => {
  const server = fastify();
  server.register(userRoutes, { prefix: "api/user" });
  return server;
};

export default buildServerRoutes;
