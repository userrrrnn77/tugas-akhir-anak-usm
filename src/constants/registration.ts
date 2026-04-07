import type { SelectOption } from "../types/common";
import type {
  Gender,
  MaritalStatus,
  Education,
  Religion,
  Occupation,
  IncomeRange,
  SavingProduct,
} from "../types/registration";

export const GENDER_OPTIONS: SelectOption<Gender>[] = [
  { label: "Laki-laki", value: "Laki-laki" },
  { label: "Perempuan", value: "Perempuan" },
];

export const MARITAL_STATUS_OPTIONS: SelectOption<MaritalStatus>[] = [
  { label: "Lajang", value: "Lajang" },
  { label: "Menikah", value: "Menikah" },
  { label: "Janda", value: "Janda" },
  { label: "Duda", value: "Duda" },
];

export const EDUCATION_OPTIONS: SelectOption<Education>[] = [
  { label: "SD / SMP", value: "SD/SMP" },
  { label: "SMA / Sederajat", value: "SMA" },
  { label: "Akademi / D-3 / S1", value: "Akademi/D-3/S1" },
  { label: "S2 / S3", value: "S2/S3" },
];

export const RELIGION_OPTIONS: SelectOption<Religion>[] = [
  { label: "Islam", value: "Islam" },
  { label: "Kristen / Katholik", value: "Kristen/Katholik" },
  { label: "Hindu", value: "Hindu" },
  { label: "Budha", value: "Budha" },
];

export const OCCUPATION_OPTIONS: SelectOption<Occupation>[] = [
  { label: "Karyawan Swasta", value: "Karyawan" },
  { label: "Pegawai Negeri (PNS)", value: "Peg. Negeri" },
  { label: "TNI / POLRI", value: "TNI/POLRI" },
  { label: "Pedagang / Wirausaha", value: "Pedagang/Wirausaha" },
  { label: "Manajer / Eksekutif", value: "Manajer" },
  { label: "Profesional (Dokter/Dosen/dll)", value: "Profesional" },
  { label: "Pelajar / Mahasiswa", value: "Pelajar/Mahasiswa" },
  { label: "Lainnya", value: "Lainnya" },
];

export const INCOME_OPTIONS: SelectOption<IncomeRange>[] = [
  { label: "< Rp. 500.000,-", value: "< Rp. 500.000,-" },
  { label: "Rp. 500.000 - 1.000.000", value: "Rp. 500.000 - 1.000.000" },
  { label: "Rp. 1 - 2 Juta", value: "Rp. 1 - 2 juta" },
  { label: "Rp. 2 - 3 Juta", value: "Rp. 2 - 3 juta" },
  { label: "Rp. 3 - 4 Juta", value: "Rp. 3 - 4 juta" },
  { label: "Rp. 4 - 5 Juta", value: "Rp. 4 - 5 juta" },
  { label: "Rp. 6.000.000,-", value: "> Rp. 6.000.000,-" },
];

export const PRODUCT_OPTIONS: SelectOption<SavingProduct>[] = [
  { label: "SIRELA (Simpanan Sukarela)", value: "SIRELA" },
  { label: "Simpanan Syariah", value: "Simpanan Syariah" },
  { label: "SAJAAH (Simpanan Berjangka)", value: "SAJAAH" },
  { label: "Simpanan Hasanah", value: "Simpanan Hasanah" },
  { label: "SISUQUR (Simpanan Qurban)", value: "SISUQUR" },
  { label: "SIAROFAH (Simpanan Haji/Umroh)", value: "SIAROFAH" },
  { label: "SISIDIK (Simpanan Pendidikan)", value: "SISIDIK" },
  { label: "SIMAPAN (Simpanan Masa Depan)", value: "SIMAPAN" },
  { label: "SIHARA (Simpanan Hari Raya)", value: "SIHARA" },
  { label: "SIZawa (Simpanan Zakat/Wakaf)", value: "SIZawa" },
];
