"use server";

import { revalidatePath } from "next/cache";

const data = ["todo 1", "todo 2", "todo 3"];

export async function getTodos() {
  return data;
}
export async function addTodo(formData: FormData) {
  const todo = formData.get("todo") as string;
  data.push(todo);
  console.log(data);

  revalidatePath("/");
}
