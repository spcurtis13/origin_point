import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mentorRouter = createTRPCRouter({

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
      // simulate a slow db call

      // Now the data includes all necessary fields from your Mentor model
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
