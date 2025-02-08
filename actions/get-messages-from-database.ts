"use server";

import { db } from "@/db";
import { messages } from "@/db/schema";

export async function getMessagesFromDB() {
  try {
    const response = await db.select().from(messages);
    return response;
  } catch (error) {
    console.log(error);
  }
}
