
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

interface postID{
    id:string;
}

// Instantiate Prisma client
const prisma = new PrismaClient();

// Define the GET function to retrieve a specific post
export async function GET(request: NextRequest,{params}:{params:postID}) {
  //post ID from the route parameter
  const postid = params.id;
  try {
    // Fetch the post with the specified ID using Prisma
    const post = await prisma.post.findUnique({
      where: {
        id: postid,
      },
    });

    // Return a success response with the retrieved post
    return NextResponse.json({ data: post }, { status: 200 });
  } catch (error: any) {
    // Handle any errors and return an appropriate response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function PUT(request: NextRequest, { params }: { params: postID }) {
  const postid = params.id;
  try {
      // Parse the JSON body from the request
      const { title, imageurl, article, categorie } = await request.json();

      // Update the post with the specified ID using Prisma
      const updatedPost = await prisma.post.update({
          where: {
              id: postid,
          },
          data: {
              title,
              imageurl,
              article,
              categorie,
          },
      });

      // Return a success response with the updated post
      return NextResponse.json({data: updatedPost }, { status: 200 });
  } catch (error: any) {
      // Handle any errors and return an appropriate response
      return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
      // Disconnect the Prisma client
      await prisma.$disconnect();
  }
}


export async function DELETE(request: NextRequest, { params }: { params: postID }) {
  try {
      // Retrieve the post ID from the route parameter
      const postId = params.id;

      // Delete the post with the specified ID using Prisma
      const deletedPost = await prisma.post.delete({
          where: {
              id: postId,
          },
      });

      // If the post is not found, return a 404 response
      if (!deletedPost) {
          return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      // Return a success response with the deleted post
      return NextResponse.json({ data: deletedPost }, { status: 200 });
  } catch (error: any) {
      // Handle any errors and return an appropriate response
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
