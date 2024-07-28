import fastify from "fastify";
import buildServerRoutes from "./routes/routes";
import cors from "@fastify/cors";

import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod";

const server = buildServerRoutes();
server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

const startServer = async () => {
  try {
    await server.listen({ port: 3833 });
    console.log(`Server listening at http://localhost:3833`);
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();
