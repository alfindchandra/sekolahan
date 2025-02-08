import React from "react";
import Fromlogin from "@/components/auth/from-login";

const login = () => {
  return (
    <div className="flex flex-col justify-center px-7 py-9 mx-auto">
      <div className="w-full max-w-mdshadow mt-0 rounded-xl">
        <h1 className="text-2xl font-bold text-gray-900 ">Login</h1>
      </div>
      <Fromlogin />
    </div>
  );
};

export default login;
