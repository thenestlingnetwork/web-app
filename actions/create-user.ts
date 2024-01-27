"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface User {
  name: string;
  country: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  games: string[];
  idols?: string | null;
  interested: string;
  state: string;
}

const createUser = async (userData: User) => {
  try {
    const age = Number(userData.age);

    const user = await prisma.user.create({
      data: {
        age: age,
        country: userData.country,
        email: userData.email,
        name: userData.name,
        gender: userData.gender,
        phone: userData.phone,
        games: userData.games,
        idols: userData.idols,
        interested: userData.interested,
        state: userData.state,
      },
    });

    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
};

export default createUser;
