"use server";

import { db } from "@/db";
import { messages } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function addMessageToDB(input: string) {
  try {
    await db.insert(messages).values({ message: input });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }

  return {
    ok: true,
  };
}
