import supriyadi from "../assets/image/tuman/SupriyadiSEMm.jpeg";
import richatul from "../assets/image/tuman/RichatulWardah.jpeg";
import arif from "../assets/image/tuman/ArifMutohar.jpeg";
import khoirur from "../assets/image/tuman/KhoirurRozikin.jpeg";
import rifka from "../assets/image/tuman/RifkaFitriyani.jpeg";
import shofwata from "../assets/image/tuman/ShofwataA'yun.jpeg";
import joko from "../assets/image/tuman/DPS Joko Prasetiyo, S.E., M. Ak.jpg.jpeg";
import ahmad from "../assets/image/tuman/H. Ahmad SetyoBudi.jpg.jpeg";
import nurkholis from "../assets/image/tuman/Nur Kholis S.PD.JPG.jpeg";

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
        name: "H.Mohamad Supriyadi, SE.MM",
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
        name: "H. Ahmad SetyoBudi",
        role: "Ketua Pengawas",
        image: ahmad,
      },
      {
        name: "Nur Kholis ,S.PD",
        role: "Anggota Pengawas",
        image: nurkholis,
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
        name: "KH. Ali Khoiron, S.PD",
        role: "Anggota DPS",
        image: undefined,
      },
      {
        name: "Joko Prasetiyo SE. ,M.AK",
        role: "Anggota DPS",
        image: joko,
      },
    ],
  },
  {
    title: "JAJARAN DIREKSI & MANAGEMENT",
    key: "direksi",
    members: [
      {
        name: "H.Mohamad SUPRIYADI, SE.MM",
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
