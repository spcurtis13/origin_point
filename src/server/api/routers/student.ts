import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const studentRouter = createTRPCRouter({

    create: publicProcedure
    .input(z.object({
      email: z.string().email(),
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      major: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call

      return ctx.db.student.create({
        data: {
          email: input.email,
          firstName: input.firstName,
          lastName: input.lastName,
          major: input.major,
          // createdAt and updatedAt are managed automatically by Prisma
        },
      });
    }),

    getAll: publicProcedure.query(async ({ ctx }) => {
        // Fetch all mentors from the database
        // const users = await clerkClient.users.getUserList
        return ctx.db.student.findMany();
      }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.mentor.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});