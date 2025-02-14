"use client";

import { useRouter } from "next/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/navbar";

export default function ActivationPage() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl">
          <h1 className="text-2xl font-bold text-center mb-4">
            Tata Tertib dan Ketentuan Website Sekolah
          </h1>
          <div className="text-sm text-gray-700 space-y-3 overflow-y-auto max-h-96 p-2 border border-gray-300 rounded-lg">
            <p>
              <strong>1. Ketentuan Umum</strong>
            </p>
            <ul className="list-disc list-inside pl-2">
              <li>
                Website ini merupakan platform resmi sekolah yang digunakan
                untuk menyediakan informasi akademik, kegiatan sekolah, dan
                pengumuman penting.
              </li>
              <li>
                Semua pengguna, termasuk siswa, guru, dan orang tua, diharapkan
                menggunakan website ini dengan bijak dan bertanggung jawab.
              </li>
              <li>
                Konten yang dipublikasikan harus sesuai dengan norma dan etika
                pendidikan serta tidak mengandung unsur SARA, kekerasan, atau
                pornografi.
              </li>
            </ul>
            <p>
              <strong>2. Hak dan Kewajiban Pengguna</strong>
            </p>
            <ul className="list-disc list-inside pl-2">
              <li>
                Pengguna wajib menjaga kerahasiaan akun masing-masing dan tidak
                membagikan informasi login kepada pihak lain.
              </li>
              <li>
                Pengguna dilarang menyebarkan berita hoaks atau informasi yang
                belum diverifikasi kebenarannya.
              </li>
              <li>
                Komentar dan diskusi di forum atau kolom komentar harus
                dilakukan dengan sopan dan tidak mengandung ujaran kebencian.
              </li>
            </ul>
            <p>
              <strong>3. Ketentuan Konten dan Publikasi</strong>
            </p>
            <ul className="list-disc list-inside pl-2">
              <li>
                Semua artikel, pengumuman, dan materi pembelajaran harus
                disetujui oleh admin atau pihak sekolah sebelum dipublikasikan.
              </li>
              <li>
                Dilarang menyalin atau mendistribusikan konten dari website ini
                tanpa izin resmi dari sekolah.
              </li>
              <li>
                Guru dan staf memiliki hak untuk mengunggah materi pembelajaran,
                sedangkan siswa dapat mengakses dan mengunduh materi yang
                disediakan.
              </li>
            </ul>
            <p>
              <strong>4. Keamanan dan Privasi</strong>
            </p>
            <ul className="list-disc list-inside pl-2">
              <li>
                Data pribadi siswa, guru, dan orang tua akan dijaga dengan ketat
                sesuai dengan kebijakan privasi sekolah.
              </li>
              <li>
                Sekolah berhak menghapus atau memblokir akun yang terbukti
                melanggar aturan.
              </li>
              <li>
                Setiap pelanggaran keamanan atau penyalahgunaan data harus
                segera dilaporkan ke administrator website.
              </li>
            </ul>
            <p>
              <strong>5. Sanksi dan Tindakan</strong>
            </p>
            <ul className="list-disc list-inside pl-2">
              <li>
                Pelanggaran terhadap ketentuan ini dapat berakibat pada
                peringatan, pemblokiran akses, atau tindakan lebih lanjut sesuai
                dengan kebijakan sekolah.
              </li>
              <li>
                Sekolah berhak memperbarui atau mengubah ketentuan ini
                sewaktu-waktu dengan pemberitahuan kepada pengguna.
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={() => router.push("/register")}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              <CheckCircle size={20} /> Lanjutkan
            </button>
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-xl hover:bg-gray-500 transition"
            >
              <XCircle size={20} /> Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
