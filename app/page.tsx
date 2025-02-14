"use client";

import { BookOpen, Users, Trophy, ArrowRight, ArrowLeft } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Pages1 from "@/public/image/page1.jpg";
import Pages2 from "@/public/image/page2.jpg";
import Pages3 from "@/public/image/page3.jpg";

const images = [
  {
    src: Pages1,
    text: "Selamat Datang di E-learning SD DANDER IV",
    className:
      "absolute bottom-1/2 md:left-[50%] transform -translate-x-0 bg-black/50 text-[#36e822] text-xl md:text-3xl font-semibold md:px-16 md:py-8 px-7 py-4 shadow-lg",
  },
  {
    src: Pages2,
    text: "E-learning SD DANDER IV jendela untuk menggapai asa",
    className:
      "absolute bottom-1/2 md:left-[55%] transform -translate-x-0 bg-black/50 text-[#36e822] text-xl md:text-3xl font-semibold md:px-16 md:py-8 px-7 py-4 shadow-lg",
  },
  {
    src: Pages3,
    text: "Membangun Masa Depan Cerah dengan E-learning",
    className:
      "absolute bottom-1/2 md:right-[60%] transform -translate-x-0 bg-black/50 text-[#36e822] text-xl md:text-3xl font-semibold md:px-16 md:py-8 px-7 py-4 shadow-lg",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center my-6">
        <div className="relative w-11/12 max-w-screen-xl border-4 border-slate-200 overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-64 md:h-screen">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={image.className}>{image.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Keunggulan Kami
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Mengapa memilih SD Negeri Dander IV untuk putra-putri Anda?
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Kurikulum Terbaik",
                text: "Menggunakan kurikulum terintegrasi yang mengembangkan potensi akademik dan karakter siswa.",
              },
              {
                icon: Users,
                title: "Guru Profesional",
                text: "Tim pengajar berpengalaman dan tersertifikasi dalam bidangnya masing-masing.",
              },
              {
                icon: Trophy,
                title: "Prestasi Unggul",
                text: "Berbagai prestasi akademik dan non-akademik di tingkat kota hingga nasional.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-300 shadow-lg rounded-lg p-6 flex items-center space-x-4"
              >
                <feature.icon className="h-10 w-10 text-blue-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
