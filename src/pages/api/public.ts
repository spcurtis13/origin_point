import { clerkClient } from "@clerk/nextjs";
import { NextApiRequest, NextApiResponse } from "next";

interface RequestBody {
  role: string;
  userId: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body as RequestBody;



  const { role, userId } = body;

  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      role,
    },
  });

  res.status(200).json({ success: true });
}


