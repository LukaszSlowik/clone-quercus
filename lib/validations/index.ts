import { z } from "zod";

export const schemaCareers = z
  .object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    email: z.string().email({ message: "Email is required" }),
    phone: z
      .string({
        required_error: "Phone is required",
        invalid_type_error: "Phone is required",
      })
      .min(5, { message: "Phone is required" }),
    //.transform((val) => val.toString()),
    privacy: z.boolean().optional(),
    password: z
      .string()
      .min(1, { message: "Please enter at least 9 characters." }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please enter at least 9 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof schemaCareers>;
