"use server";
import { RegisterSchema, LoginSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const SingUpCredentials = async (
  preview: unknown,
  formData: FormData
) => {
  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = hashSync(password, 10);
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return {
      Message: "Tidak Bisa Membuat Akun, Coba dengan Email Lain",
    };
  }
  redirect("/login");
};

// Login Credentials ==========================================

export const LoginCredentials = async (
  preview: unknown,
  formData: FormData
) => {
  const validatedFields = LoginSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            Message: "Email atau Password Salah",
          };
        default:
          return {
            Message: "Tidak Bisa Masuk, Coba Lagi",
          };
      }
    }
    throw error;
  }
};
