import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Instantiate Prisma client
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const query = new URL(request.url).searchParams.get("search") || "";
    const category = new URL(request.url).searchParams.get("categorie") || "";

    const posts = await prisma.post.findMany({
      where: {
        OR: [{ title: { contains: query } }, { article: { contains: query } }],
        categorie: { contains: category },
      },
    });

    return NextResponse.json({ data: posts }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
