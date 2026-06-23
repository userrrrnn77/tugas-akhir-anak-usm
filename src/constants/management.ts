import supriyadi from "../assets/image/tuman/SupriyadiSEMm.jpeg";
import richatul from "../assets/image/tuman/RichatulWardah.jpeg";
import arif from "../assets/image/tuman/ArifMutohar.jpeg";
import khoirur from "../assets/image/tuman/KhoirurRozikin.jpeg";
import rifka from "../assets/image/tuman/RifkaFitriyani.jpeg";
import shofwata from "../assets/image/tuman/ShofwataA'yun.jpeg";

export interface ManagementMember {
  name: string;
  role: string;
  image?: string; // Menyimpan object default import image dari bundler
}

export interface ManagementSection {
  title: string;
  key: string;
  members: ManagementMember[];
}

export const MANAGEMENT_DATA: ManagementSection[] = [
  {
    title: "PENGURUS KOPERASI",
    key: "pengurus",
    members: [
      {
        name: "Supriyadi, S.E., M.M.",
        role: "Ketua Pengurus",
        image: supriyadi,
      },
      {
        name: "Richatul Wardah, A.Md.",
        role: "Sekretaris",
        image: richatul,
      },
      {
        name: "Arif Mutohar",
        role: "Bendahara",
        image: arif,
      },
    ],
  },
  {
    title: "PENGAWAS KOPERASI",
    key: "pengawas",
    members: [
      {
        name: "H. Ahmad Setyo Budi",
        role: "Ketua Pengawas",
        image: undefined, // Nunggu sesi foto sesepuh jembot kata Fajar
      },
      {
        name: "Nurkholis, S.Pd.",
        role: "Anggota Pengawas",
        image: undefined,
      },
      {
        name: "Khoirur Rozikin, S.HI.",
        role: "Anggota Pengawas",
        image: khoirur,
      },
    ],
  },
  {
    title: "DEWAN PENGAWAS SYARIAH (DPS)",
    key: "dps",
    members: [
      {
        name: "H. Tarmuji, S.Ag.",
        role: "Ketua DPS",
        image: undefined,
      },
      {
        name: "K.H. Ali Khoiron, S.Pd.",
        role: "Anggota DPS",
        image: undefined,
      },
      {
        name: "Joko Prasetyo, S.E., M.Ak.",
        role: "Anggota DPS",
        image: undefined,
      },
    ],
  },
  {
    title: "JAJARAN DIREKSI & MANAGEMENT",
    key: "direksi",
    members: [
      {
        name: "Supriyadi, S.E., M.M.",
        role: "Direktur Utama",
        image: supriyadi,
      },
      {
        name: "Richatul Wardah, A.Md.",
        role: "Kepala Cabang Utama",
        image: richatul,
      },
      {
        name: "Khoirur Rozikin, S.HI.",
        role: "Kepala Cabang Meteseh",
        image: khoirur,
      },
      {
        name: "Rifka Fitriyani Ainurriza, S.E., M.E.",
        role: "Manager SDI",
        image: rifka,
      },
      {
        name: "Shofwata A'yun, S.M.",
        role: "Manager Baitul Maal",
        image: shofwata,
      },
    ],
  },
];
