"use client";

import { useActionState } from "react";
import Link from "next/link";
import { LoginCredentials } from "@/lib/actions";

const Formlogin = () => {
  const [state, formAction] = useActionState(LoginCredentials, null);
  return (
    <form action={formAction} className="space-y-4">
      {state?.Message ? (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100"
          role="alert"
        >
          <span className="font-medium">{state?.Message}</span>
        </div>
      ) : null}

      <div>
        <label
          htmlFor="nim"
          className="block mb-2 text-sm font-bold text-gray-900"
        >
          Nim
        </label>
        <input
          type="number"
          name="nim"
          placeholder="043299787"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-red-500 italic text-sm mt-2">
            {state?.error?.nim}
          </span>
        </div>
      </div>
      <div className="py-2">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-bold text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-red-500 italic text-sm mt-2">
            {state?.error?.password}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
      >
        Login
      </button>
      <p className="mt-4 text-sm font-light text-gray-500">
        Kamu Belum Anggota Segera daftar?
        <Link href="/home/aktivasi">
          <span className="ml-1 font-medium text-teal-500 hover:text-teal-400">
            Aktivasi
          </span>
        </Link>
      </p>
    </form>
  );
};

export default Formlogin;
