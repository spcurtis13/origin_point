// pages/api/saveData.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { firstName, lastName, industry, role } = req.body;

  try {
    const result = await prisma.user.create({
      data: {
        firstName,
        lastName,
        industry,
        role,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
}
