import { auth } from "@/auth";
import React from "react";
import Head from "next/head";
import { User } from "@/types/types";

const homeprofil = async () => {
  const session = await auth();
  const user = session?.user as User | null;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Profil Siswa</title>
        <meta name="description" content="Profil resmi siswa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Profil Siswa</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src={user?.image || "/default-profile.jpg"} // Ganti dengan path gambar profil default jika diperlukan
              alt={`${user?.name}'s Profile`}
              className="w-48 h-48 rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{user?.name}</h2>
            <p className="text-gray-700 mb-4">Email: {user?.email}</p>
            <p className="text-gray-700 mb-4">NIM: {user?.nim}</p>
            <p className="text-gray-700 mb-4">Alamat: dander</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default homeprofil;
