export const PRODUCTS = [
  {
    id: "sisuqur", // Kita satuin kesatuan biar rapi
    title: "Simpanan Qurban",
    desc: "Persiapan ibadah qurban jadi lebih terencana dan ringan dengan setoran yang terukur.",
    icon: "📈",
    color: "bg-emerald-500",
  },
  {
    id: "talangan haji umroh", // REVISI FAJAR 1
    title: "TALANGAN HAJI & UMROH",
    desc: "Layanan pembiayaan khusus untuk membantu Anda menyegerakan ibadah ke Tanah Suci tanpa kendala biaya.",
    icon: "🕋",
    color: "bg-blue-500",
  },
  {
    id: "sirela", // REVISI FAJAR 2
    title: "Simpanan Suka Rela",
    desc: "Fleksibilitas tinggi, setoran dan penarikan bisa kapan saja tanpa batasan saldo minimal.",
    icon: "💰",
    color: "bg-purple-500",
  },
  {
    id: "mobil layanan umat", // REVISI FAJAR 3 (BAITUL MAAL)
    title: "MOBIL LAYANAN UMAT",
    desc: "Program Baitul Maal peduli sesama melalui penyediaan armada layanan sosial gratis bagi kemaslahatan umat.",
    icon: "🚑",
    color: "bg-amber-500",
  },
];

// Dummy Untuk Pages Products

import React from "react";
import {
  PiggyBank,
  Coins,
  GraduationCap,
  HeartHandshake,
  ShoppingBag,
  Plane,
  TrendingUp,
  Moon,
  Users,
  Briefcase,
  Gem,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

import { imageSimpan } from "../assets/image/simpanan";
import { imagePinjaman } from "../assets/image/pinjaman";

export interface ProductItem {
  id: string;
  title: string;
  fullTitle?: string;
  desc: string;
  icon: React.ReactElement<LucideProps>;
  image: string;
  category: "simpanan" | "pembiayaan";
}

export const PRODUCTS_DATA: ProductItem[] = [
  // --- PRODUK SIMPANAN ---
  {
    id: "sirela",
    title: "Sirela",
    fullTitle: "Simpanan Sukarela",
    desc: "Fleksibilitas tinggi, setoran dan penarikan bisa kapan saja tanpa batasan saldo minimal.",
    icon: React.createElement(Coins),
    image: imageSimpan.sirela,
    category: "simpanan",
  },
  {
    id: "sisuqur",
    title: "SiSuqur",
    fullTitle: "Simpanan Qurban",
    desc: "Persiapan ibadah qurban jadi lebih terencana dan ringan dengan setoran yang terukur.",
    icon: React.createElement(HeartHandshake),
    image: imageSimpan.sisuqur,
    category: "simpanan",
  },
  {
    id: "siarofah",
    title: "Siarofah",
    fullTitle: "Simpanan Haji & Umroh",
    desc: "Perencanaan finansial amanah untuk membantu Anda menyegerakan ibadah ke Tanah Suci.",
    icon: React.createElement(Moon),
    image: imageSimpan.siarofah,
    category: "simpanan",
  },
  {
    id: "sisidik",
    title: "SiSidik",
    fullTitle: "Simpanan Pendidikan",
    desc: "Tabungan berjangka untuk memastikan masa depan pendidikan anak terjamin sepenuhnya.",
    icon: React.createElement(GraduationCap),
    image: imageSimpan.sisidik,
    category: "simpanan",
  },
  {
    id: "simapan",
    title: "SiMapan",
    fullTitle: "Simpanan Masa Depan",
    desc: "Investasi jangka panjang dengan bagi hasil kompetitif untuk kemandirian di hari tua.",
    icon: React.createElement(TrendingUp),
    image: imageSimpan.simapan,
    category: "simpanan",
  },
  {
    id: "sizawa",
    title: "SiZawa",
    fullTitle: "Simpanan Ziarah & Wisata",
    desc: "Wujudkan impian perjalanan religi dan wisata keluarga tanpa pusing memikirkan biaya.",
    icon: React.createElement(Plane),
    image: imageSimpan.sizawa,
    category: "simpanan",
  },
  {
    id: "sihara",
    title: "SiHara",
    fullTitle: "Simpanan Hari Raya",
    desc: "Kelola dana khusus untuk kebutuhan Idul Fitri agar silaturahmi makin bermakna.",
    icon: React.createElement(ShoppingBag),
    image: imageSimpan.sihara,
    category: "simpanan",
  },
  {
    id: "simhas",
    title: "Simhas",
    fullTitle: "Simpanan Hasanah",
    desc: "Simpanan utama yang mengedepankan keberkahan dan transparansi bagi hasil syariah.",
    icon: React.createElement(PiggyBank),
    image: imageSimpan.simhas,
    category: "simpanan",
  },
  {
    id: "sisyah",
    title: "Simpanan Syariah",
    fullTitle: "Simpanan Syariah Berkah",
    desc: "Simpanan pokok berbasis akad Wadiah yang menjaga keamanan aset Anda dengan prinsip murni syariah tanpa riba.",
    icon: React.createElement(ShieldCheck),
    image: imageSimpan.sisyb,
    category: "simpanan",
  },
  {
    id: "sajaah",
    title: "Sajaah",
    fullTitle: "Simpanan Sajaah",
    desc: "Simpanan berjangka dengan bagi hasil optimal untuk rencana finansial yang lebih terukur dan stabil.",
    icon: React.createElement(CalendarCheck),
    image: imageSimpan.sajah,
    category: "simpanan",
  },

  // --- PRODUK PEMBIAYAAN ---
  {
    id: "murabahah",
    title: "Murabahah",
    desc: "Pembiayaan kepemilikan barang dengan skema jual beli yang marginnya disepakati di awal.",
    icon: React.createElement(Briefcase),
    image: imagePinjaman.modalusahas,
    category: "pembiayaan",
  },
  {
    id: "mudharabah",
    title: "Mudharabah",
    desc: "Pembiayaan modal usaha dengan prinsip bagi hasil murni untuk pertumbuhan bisnis Anda.",
    icon: React.createElement(Users),
    image: imagePinjaman.milikiemas,
    category: "pembiayaan",
  },
  {
    id: "talangan-haji-umroh", // REVISI PRODUK PEMBIAYAAN (TALANGAN HAJI & UMROH)
    title: "Talangan Haji & Umroh",
    desc: "Layanan pembiayaan khusus dan talangan terpercaya untuk mempermudah keberangkatan Anda menuju ibadah Haji dan Umroh.",
    icon: React.createElement(Moon),
    image: imagePinjaman.raihpanggilanIlahi,
    category: "pembiayaan",
  },
  {
    id: "emas",
    title: "Emas",
    desc: "Miliki emas batangan sebagai investasi masa depan dengan skema angsuran yang ringan.",
    icon: React.createElement(Gem),
    image: imagePinjaman.gambar4,
    category: "pembiayaan",
  },

  // --- PROGRAM BAITUL MAAL ---
  {
    id: "mobil-layanan-umat", // REVISI PROGRAM BAITUL MAAL 1 (MOBIL LAYANAN UMAT)
    title: "Mobil Layanan Umat",
    desc: "Program pengelolaan dana sosial Baitul Maal KSPPS Berkah Mitra Hasanah yang diwujudkan dalam bentuk armada ambulans dan layanan sosial gratis untuk masyarakat.",
    icon: React.createElement(HeartHandshake), // Pake icon sosial yang ready
    image: imageSimpan.sisuqur, // Nanti tinggal lu ganti jalurnya mbot kalau ada asset khusus
    category: "pembiayaan", // Atau sesuaikan dengan kategori program sosial lu
  },
];
