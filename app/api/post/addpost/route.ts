import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


// Instantiate Prisma client
const prisma = new PrismaClient();

// Define the POST function to create a new post
export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const { title, imageurl, article, categorie } = await request.json();

    // Validate input (add your validation logic here)

    // Create a new post using Prisma
    const newPost = await prisma.post.create({
      data: {
        title,
        imageurl,
        article,
        categorie,
      },
    });

    // Return a success response with the created post
    return NextResponse.json({data: newPost }, { status: 201 });
  } catch (error: any) {
    // Handle any errors and return an appropriate response
    return NextResponse.json({error: error.message }, { status: 500 });
  }
}
