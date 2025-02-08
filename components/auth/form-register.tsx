"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { SingUpCredentials } from "@/lib/actions";

const Formregister = () => {
  const [state, formAction] = useFormState(SingUpCredentials, null);
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
          htmlFor="name"
          className="block mb-2 text-sm font-bold text-gray-900"
        >
          Nama
        </label>
        <input
          type="text"
          name="name"
          placeholder="Alfin Dwi Chandra"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-red-400 italic text-sm mt-2">
            {state?.error?.name}
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-bold text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="alfindchandra@gmail.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-red-500 italic text-sm mt-2">
            {state?.error?.name}
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
      <div>
        <label
          htmlFor="confirmpassword"
          className="block mb-2 text-sm font-bold text-gray-900"
        >
          Confrim Password
        </label>
        <input
          type="password"
          name="confirmpassword"
          placeholder="********"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-red-500 italic text-sm mt-2">
            {state?.error?.confirmpassword}
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
      >
        Register
      </button>
      <p className="mt-4 text-sm font-light text-gray-500">
        Already have an account?
        <Link href="/login">
          <span className="font-medium text-teal-500 hover:text-teal-400">
            Sign In
          </span>
        </Link>
      </p>
    </form>
  );
};

export default Formregister;
