import { NextResponse } from "next/server";
import { signupSchema } from "@/lib/zod";

export async function POST(request) {
    const body = await request.json() 

    const result = signupSchema.safeParse(body);

    console.log(result);

    return NextResponse.json("funciona")
}