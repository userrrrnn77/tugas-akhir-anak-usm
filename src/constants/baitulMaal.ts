import { baitulMall } from "../assets/image/baitul-mall";

export interface MaalProgram {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  images: string[]; // Array karena ada yang fotonya dua, Bre!
  videoUrl?: string[]; // Opsional buat Tanggap Bencana
  features?: string[];
  category: "KESEHATAN" | "KEMANUSIAAN" | "SOSIAL";
}

export const BAITUL_MAAL_PROGRAMS: MaalProgram[] = [
  {
    id: "ambulance-gratis",
    title: "Ambulance Gratis",
    description:
      "Untuk menunjang bidang kesehatan, KSPPS Berkah Mitra Hasanah melayani layanan antar jemput untuk pasien berobat, kecelakaan maupun ambulance tanggap bencana secara gratis.",
    images: [baitulMall.ambulanGratis],
    category: "KESEHATAN",
    features: [
      "Antar Jemput Pasien",
      "Tanggap Bencana",
      "Layanan 24 Jam Gratis",
    ],
  },
  {
    id: "berbagi-makan-gratis",
    title: "Berbagi Makan Gratis",
    description:
      "Alhamdulillah Baitul Maal KSPPS Berkah Mitra Hasanah telah rutin melaksanakan kegiatan berbagi makan gratis untuk jamaah masjid maupun untuk masyarakat sekitar kantor dan juga yang terdampak bencana alam.",
    images: [baitulMall.mbg],
    category: "SOSIAL",
    features: [
      "Rutin Tiap Jumat",
      "Masyarakat Sekitar Kantor",
      "Bantuan Logistik Bencana",
    ],
  },
  {
    id: "cek-kesehatan-gratis",
    title: "Layanan Cek Kesehatan Gratis",
    tagline: "Sehat Raganya, Berkah Hartanya",
    description:
      "KSPPS Berkah Mitra Hasanah hadir sebagai sahabat dalam menjaga kualitas hidup dan kesejahteraan keluarga melalui deteksi dini kesehatan agar tetap produktif dalam beribadah dan bekerja.",
    images: [baitulMall.layananKesehatan1, baitulMall.layananKesehatan2],
    category: "KESEHATAN",
    features: [
      "Pemeriksaan Tekanan Darah (Tensi)",
      "Cek Gula Darah & Kolesterol",
      "Cek Asam Urat",
      "Konsultasi Kesehatan Dasar",
    ],
  },
  {
    id: "tanggap-bencana",
    title: "Layanan Tanggap Bencana",
    tagline: "Hadir Menguatkan, Berbagi Kebaikan di Saat Sulit",
    description:
      "Wujud nyata nilai Ta'awun (tolong-menolong) dalam meringankan beban mereka yang terdampak musibah alam maupun keadaan darurat lainnya dengan cepat, tepat, dan amanah.",
    images: [baitulMall.sigapBencana],
    videoUrl: [baitulMall.videoSigapBencana],
    category: "KEMANUSIAAN",
    features: [
      "Bantuan Logistik Darurat",
      "Posko Kesehatan Relawan",
      "Dukungan Sarana Prasarana",
      "Relaksasi Pembiayaan Anggota",
    ],
  },
];
