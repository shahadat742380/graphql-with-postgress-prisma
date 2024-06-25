import { prismaClient } from "../../lib/db";

const queries = {
  async getUsers(_: any, { limit }: { limit: number }) {
    const users = await prismaClient.user.findMany({
      take: limit || undefined,
    });
    return users;
  },
  async getUserById(_: any, { id }: { id: string }) {
    const user = await prismaClient.user.findUnique({
      where: { id },
    });
    return user;
  },
};

const mutations = {
  createUser: async (
    _: any,
    {
      firstName,
      lastName,
      email,
      password,
    }: { firstName: string; lastName: string; email: string; password: string }
  ) => {
    await prismaClient.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        salt: "random_salt",
      },
    });

    return true;
  },
  async deleteUser(_: any, { id }: { id: string }) {
    await prismaClient.user.delete({
      where: { id },
    });

    return true;
  },
  async updateUser(
    _: any,
    {
      id,
      firstName,
      lastName,
      email,
      profileImageURL,
    }: {
      id: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      profileImageURL?: string;
    }
  ) {
    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: {
        firstName,
        lastName,
        email,
        profileImageURL,
      },
    });

    return updatedUser;
  },
};

export const resolvers = { queries, mutations };
