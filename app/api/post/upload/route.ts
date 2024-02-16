import { NextRequest, NextResponse } from "next/server";

import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const Bucket = "strivenint";

const s3 = new S3Client({
    region:"eu-north-1",
    credentials: {
    accessKeyId:"AKIA5FTZEAK4SP2VRVSW",
    secretAccessKey:"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",
    },
  });


export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const files = formData.getAll("file") as File[];

  const response = await Promise.all(
    files.map(async (file) => {
      const Body = (await file.arrayBuffer()) as Buffer;
      s3.send(new PutObjectCommand({ Bucket, Key: file.name, Body }));
      const imageUrl = `https://${Bucket}.s3.amazonaws.com/${file.name}`;
      return { imageUrl };
    })
  );

  return NextResponse.json(response);
}