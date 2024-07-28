import { prisma } from "../lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

async function createUser(request: any, reply: any) {
  try {
    const { password, username } = request.body;

    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    reply.code(201).send({ message: "User created successfully", user });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        reply.code(409).send({ error: "Username already taken" });
      } else {
        reply.code(500).send({ error: "Database error" });
      }
    } else {
      reply.code(500).send({ error: "Internal Server Error" });
    }
    console.error("Error creating user:", error);
  }
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
    reply.send({ message: "Login successful", user });
  } catch (error) {
    console.error("Error during login:", error);
    reply.code(500).send({ error: "Internal Server Error" });
  }
};

const getAllUsers = async (request: any, reply: any) => {
  const users = await prisma.user.findMany();
  return users;
};

export { createUser, getAllUsers, login };
