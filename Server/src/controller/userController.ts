import { prisma } from "../lib/prisma";

import { FastifyRequest, FastifyReply } from "fastify";

async function createUser(request: any) {
  const { password, username } = request.body;

  const user = await prisma.user.create({
    data: {
      username,
      password,
    },
  });

  return { userId: user.id };
}

const login = async (request: any, reply: any) => {
  try {
    const { username, password } = request.body;

    if (!username || !password) {
      reply.code(400).send({ error: "Username and password are required" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      reply.code(404).send({ error: "Invalid password or username" });
      return;
    }
    if (user.password !== password) {
      reply.code(401).send({ error: "Invalid password or username" });
      return;
    }
    reply.send({ message: "Login successful", userId: user.id });
  } catch (error) {
    console.error("Error during login:", error);
    reply.code(500).send({ error: "Internal Server Error" });
  }
};

const getAllUsers = () => {};

export { createUser, getAllUsers, login };
