import { mentorRouter } from "~/server/api/routers/mentor";
import { studentRouter } from "./routers/student";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mentor: mentorRouter,
  student: studentRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
