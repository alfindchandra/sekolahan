"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  User,
  LogOut,
  Settings,
  MessageCircle,
  Award,
  LayoutDashboard,
  Lock,
  Key,
  NotepadText,
} from "lucide-react";

interface NavbarClientProps {
  userName: string | null;
  isAuthenticated: boolean;
  signOutAction: () => Promise<void>;
}

const NavbarClient = ({
  userName,
  isAuthenticated,
  signOutAction,
}: NavbarClientProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOutAction().catch(console.error);
  };

  return (
    <>
      <div className="bg-primary w-full">
        <div className="justify-between flex">
          <div className="flex space-x-3 py-1 px-3">
            <Facebook className="h-7 w-7 bg-blue-800 p-1 rounded-md" />
            <Instagram className="h-7 w-7 bg-red-700 p-1 rounded-md" />
            <Twitter className="h-7 w-7 bg-blue-900 p-1 rounded-md" />
          </div>
          <div className="flex space-x-3 py-1 px-3">
            <a
              href="mailto:dander4adiwiyata@gmail.com"
              className="flex space-x-1 items-center"
            >
              <Mail className="h-5 w-5" />
              <span>dander4adiwiyata@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-slate-100 shadow-sm shadow-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-black">
                  SD NEGERI DANDER IV
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {!isAuthenticated ? (
                <>
                  <Link
                    href="/home/aktivasi"
                    className="flex items-center px-8 py-3 bg-primary hover:bg-green-600 rounded-md font-semibold"
                  >
                    <Key className="h-4 w-4 mr-1" />
                    <span>Aktivasi</span>
                  </Link>
                  <Link
                    href=""
                    className="flex items-center px-8 py-3 bg-teal-600 hover:bg-teal-400 rounded-md font-semibold"
                  >
                    <NotepadText className="h-4 w-4 mr-1" />
                    <span>Panduan</span>
                  </Link>
                  <Link
                    href="/login"
                    className="flex items-center px-8 py-3 bg-red-600 hover:bg-red-400 rounded-md font-semibold"
                  >
                    <Lock className="h-4 w-4 mr-1" />
                    <span>Login</span>
                  </Link>
                </>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center px-8 py-3 bg-primary hover:bg-green-600 rounded-md font-semibold"
                  >
                    <User className="h-4 w-4 mr-2" />
                    <span>{userName}</span>
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-10">
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Dasbor
                      </Link>
                      <Link
                        href="/profil"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profil
                      </Link>
                      <Link
                        href="/values"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        <Award className="h-4 w-4 mr-2" />
                        Nilai-nilai
                      </Link>
                      <Link
                        href="/messages"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Pesan-pesan
                      </Link>
                      <Link
                        href="/preferences"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Preferensi
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center px-4 py-2 hover:bg-gray-100 text-red-600"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Keluar
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {!isAuthenticated ? (
                <>
                  <Link
                    href="/login"
                    className="flex items-center px-8 py-3 bg-red-600 hover:bg-red-400 rounded-md font-semibold"
                  >
                    <Lock className="h-4 w-4 mr-1" />
                    <span>Login</span>
                  </Link>
                  <Link
                    href="/home/aktivasi"
                    className="flex items-center px-8 py-3 bg-primary hover:bg-green-600 rounded-md font-semibold"
                  >
                    <Key className="h-4 w-4 mr-1" />
                    <span>Aktivasi</span>
                  </Link>
                  <Link
                    href=""
                    className="flex items-center px-8 py-3 bg-teal-600 hover:bg-teal-400 rounded-md font-semibold"
                  >
                    <NotepadText className="h-4 w-4 mr-1" />
                    <span>Panduan</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    className="flex items-center px-8 py-3 bg-primary hover:bg-green-600 rounded-md font-semibold"
                  >
                    <LayoutDashboard className="h-4 w-4 mr-1" />
                    <span>Dasbor</span>
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center px-8 py-3 bg-teal-600 hover:bg-teal-400 rounded-md font-semibold"
                  >
                    <User className="h-4 w-4 mr-1" />
                    <span>Profil</span>
                  </Link>
                  <Link
                    href="/values"
                    className="flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-400 rounded-md font-semibold"
                  >
                    <Award className="h-4 w-4 mr-1" />
                    <span>Nilai-nilai</span>
                  </Link>
                  <Link
                    href="/messages"
                    className="flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-400 rounded-md font-semibold"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span>Pesan-pesan</span>
                  </Link>
                  <Link
                    href="/preferences"
                    className="flex items-center px-8 py-3 bg-orange-600 hover:bg-orange-400 rounded-md font-semibold"
                  >
                    <Settings className="h-4 w-4 mr-1" />
                    <span>Preferensi</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center px-8 py-3 bg-red-600 hover:bg-red-400 rounded-md font-semibold"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    <span>Keluar</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarClient;
