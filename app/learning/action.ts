"use server"

export async function  CreateToDo(formData:FormData) {
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    console.log(formData);
}