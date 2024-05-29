//go to API docs for more information on how to execute API calls

import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mentorRouter = createTRPCRouter({

    //public procedure for create see profile page for how to call as well as API docs as aluded to earlier
    //typing is extremely important and zod(z) facilitates that
    create: publicProcedure
    .input(z.object({
      email: z.string().email(),
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      industry: z.string().min(1),
      role: z.string().min(1),
      available: z.boolean(),
    }))
    .mutation(async ({ ctx, input }) => {
      // works for non perfect async calls

      return ctx.db.mentor.create({
        data: {
          email: input.email,
          firstName: input.firstName,
          lastName: input.lastName,
          industry: input.industry,
          role: input.role,
          available: input.available,
          // createdAt and updatedAt are managed automatically by Prisma
        },
      });
    }),

    update: publicProcedure
  .input(z.object({
    email: z.string().email(),
    firstName: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
    industry: z.string().min(1).optional(),
    role: z.string().min(1).optional(),
    available: z.boolean().optional(),
  }))
  .mutation(async ({ ctx, input }) => {
    // simulate a slow db call

    return ctx.db.mentor.update({
      where: {
        email: input.email,
      },
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        industry: input.industry,
        role: input.role,
        available: input.available,
      },
    });
  }),


    delete: publicProcedure
    .input(z.object({
        email: z.string().email(),
    }))
    .mutation(async ({ ctx, input }) => {
    // simulate a slow db call

    return ctx.db.mentor.delete({
      where: {
        email: input.email,
      },
    });
  }),

  //These procedures are for display

    getAll: publicProcedure.query(async ({ ctx }) => {
        // Fetch all mentors from the database
        // const users = await clerkClient.users.getUserList
        return ctx.db.mentor.findMany();
      }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.mentor.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
