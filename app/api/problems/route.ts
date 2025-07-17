import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const skip = (page - 1) * limit;

    const [problems, total] = await Promise.all([
      prisma.problem.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" }, 
      }),
      prisma.problem.count(),
    ]);

    return Response.json({ problems, total });
  } catch (error) {
    console.error("Failed to fetch problems:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
