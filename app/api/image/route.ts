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

// endpoint to get the list of files in the bucket
export async function GET() {
  const response = await s3.send(new ListObjectsCommand({ Bucket }));
  return NextResponse.json(response?.Contents ?? []);
}