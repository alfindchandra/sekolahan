import { object, string } from "zod";

export const LoginSchema = object({
  email: string().email("Email Tidak Valid"),
  password: string().min(8, "Password Minimal 8 Karakter"),
});

export const RegisterSchema = object({
  name: string().min(1, "Nama Tidak Boleh Kosong"),
  email: string().email("Email Tidak Valid"),
  password: string().min(8, "Password Minimal 8 Karakter"),
  confirmpassword: string().min(8, "Password Minimal 8 Karakter"),
}).refine((data) => data.password === data.confirmpassword, {
  message: "Password Tidak Sama",
  path: ["confirmpassword"],
});
