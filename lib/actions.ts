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

  const { name, nim, email, password } = validatedFields.data;

  const existingUserNIM = await prisma.user.findUnique({
    where: { nim },
  });

  if (existingUserNIM) {
    return {
      Message: "NIM sudah terdaftar, gunakan NIM yang berbeda",
      success: false,
    };
  }

  const existingUserEmail = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUserEmail) {
    return {
      Message: "Email sudah terdaftar, gunakan email yang berbeda",
      success: false,
    };
  }

  const hashedPassword = hashSync(password, 10);
  try {
    await prisma.user.create({
      data: {
        name,
        nim,
        email,
        password: hashedPassword,
      },
    });

    return {
      Message: "Berhasil Membuat Akun",
      success: true,
    };
  } catch (error) {
    console.error("Error saat membuat akun:", error);
    return {
      Message: "Tidak Bisa Membuat Akun, Coba Lagi",
      success: false,
    };
  }
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

  const { nim, password } = validatedFields.data;

  try {
    await signIn("credentials", { nim, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            Message: "Nim atau Password Salah",
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
