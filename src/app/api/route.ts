import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("User not Authorized!", { status: 401 });
    }

    const { title, description, templateUsed } = await req.json();

    const createNewOutput = await db.aIOutput.create({
      data: {
        userId: userId,
        title,
        description,
        templateUsed,
      },
    });

    revalidatePath("/");

    return NextResponse.json(createNewOutput, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("POT AI GENERATE: New Output Generation error.", {
      status: 500,
    });
  }
}
