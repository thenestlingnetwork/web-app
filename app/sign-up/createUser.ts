"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (
  country: string,
  name: string,
  age: number,
  gender: string,
  email: string,
  phone: number,
  games: string[],
  idols: string | null,
  interseted: string,
  state: string
) => {
  try {
    age = Number(age);
    phone = Number(phone);
    
    const user = await prisma.user.create({
      data: {
        country,
        name,
        age,
        gender,
        email,
        phone,
        games,
        idols,
        interseted,
        state,
      },
    });

    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
};

export default createUser;