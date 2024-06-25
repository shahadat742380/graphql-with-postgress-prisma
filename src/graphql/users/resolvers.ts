import { prismaClient } from "../../lib/db";

const queries = {
  async getUsers(_: any, { limit }: { limit: number }) {
    const users = await prismaClient.user.findMany({
      take: limit || undefined,
    });
    return users;
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
};

export const resolvers = { queries, mutations };
