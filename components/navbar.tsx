import React from "react";
import { auth } from "@/auth";
import NavbarClient from "@/components/NavbarClient";
import { handleSignOut } from "@/app/actions/auth-actions";

const Navbar = async () => {
  const session = await auth();

  return (
    <NavbarClient
      userName={session?.user?.name || null}
      isAuthenticated={!!session}
      signOutAction={handleSignOut}
    />
  );
};

export default Navbar;
