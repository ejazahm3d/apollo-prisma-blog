import { User } from "nexus-plugin-prisma/client";
import { Context } from "../Context";

async function findById({ db }: Context, id: string): Promise<User> {
  const user = await db.user.findOne({ where: { id } });
  if (user === null) {
    throw new Error("user not found");
  }
  return user;
}

interface UserData {
  name: string;
  email: string;
}

function createOne(ctx: Context, data: UserData): Promise<User> {
  return ctx.db.user.create({ data });
}

function fetchAllUsers(ctx: Context): Promise<User[]> {
  return ctx.db.user.findMany();
}

export default { findById, createOne, fetchAllUsers };
