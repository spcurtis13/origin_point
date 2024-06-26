//go to API docs for more information on how to execute API calls

import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

//public procedure for create see profile page for how to call as well as API docs as aluded to earlier
   //typing is extremely important and zod(z) facilitates that

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

    update: publicProcedure
    .input(z.object({
      email: z.string().email(),
      firstName: z.string().min(1).optional(),
      lastName: z.string().min(1).optional(),
      major: z.string().min(1).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
  
      return ctx.db.student.update({
        where: {
          email: input.email,
        },
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          major: input.major
        },
      });
    }),
  
//copied over from mentor and adjusted for students
      delete: publicProcedure
      .input(z.object({
          email: z.string().email(),
      }))
      .mutation(async ({ ctx, input }) => {
  
      return ctx.db.student.delete({
        where: {
          email: input.email,
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