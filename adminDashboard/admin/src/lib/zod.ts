import {object, string} from "zod";


export const signInSchema = object({
  email: string({required_error:"Email is required"})
    .min(5, "Email is required")
    .email("Invalid email"),
  password: string({required_error: "password is required"})
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})
