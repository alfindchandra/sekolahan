import { object, string } from "zod";

export const LoginSchema = object({
  nim: string()
    .min(8, "NIM Minimal 8 Karakter")
    .max(10, "NIM Maksimal 10 Karakter"),
  password: string().min(8, "Password Minimal 8 Karakter"),
});

export const RegisterSchema = object({
  name: string().min(1, "Nama Tidak Boleh Kosong"),
  email: string().email("Email Tidak Valid"),
  nim: string()
    .min(8, "NIM Minimal 8 Karakter")
    .max(10, "NIM Maksimal 10 Karakter"),
  password: string().min(8, "Password Minimal 8 Karakter"),
  confirmpassword: string().min(8, "Password Minimal 8 Karakter"),
}).refine((data) => data.password === data.confirmpassword, {
  message: "Password Tidak Sama",
  path: ["confirmpassword"],
});
