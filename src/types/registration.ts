// src/types/registration.ts

/**
 * UNION TYPES - Sesuai Foto Formulir & Chat WA
 */
export type Gender = "Laki-laki" | "Perempuan";
export type MaritalStatus = "Lajang" | "Menikah" | "Janda" | "Duda";
export type Education = "SD/SMP" | "SMA" | "Akademi/D-3/S1" | "S2/S3";
export type Religion = "Islam" | "Kristen/Katholik" | "Hindu" | "Budha";

export type Occupation =
  | "Karyawan"
  | "Peg. Negeri"
  | "TNI/POLRI"
  | "Pedagang/Wirausaha"
  | "Manajer"
  | "Profesional"
  | "Pelajar/Mahasiswa"
  | "Lainnya";

export type IncomeRange =
  | "< Rp. 500.000,-"
  | "Rp. 500.000 - 1.000.000"
  | "Rp. 1 - 2 juta"
  | "Rp. 2 - 3 juta"
  | "Rp. 3 - 4 juta"
  | "Rp. 4 - 5 juta"
  | "Rp. 5 - 6 juta"
  | "> Rp. 6.000.000,-";

export type SavingProduct =
  | "SIRELA"
  | "Simpanan Syariah"
  | "SAJAAH"
  | "Simpanan Hasanah"
  | "SISUQUR"
  | "SIAROFAH"
  | "SISIDIK"
  | "SIMAPAN"
  | "SIHARA"
  | "SIZawa";

/**
 * MAIN INTERFACE - Data yang masuk ke DB lewat Dashboard Admin
 */
export interface RegistrationData {
  id?: string; // Optional pas daftar, wajib ada pas di List Admin
  fullName: string;
  birthPlace: string;
  birthDate: string;
  gender: Gender;
  addressKTP: string;
  addressDomisili: string;
  phoneNumber: string;
  ktpNumber: string;
  occupation: Occupation;
  maritalStatus: MaritalStatus;
  education: Education;
  religion: Religion;
  monthlyIncome: IncomeRange;
  selectedProduct: SavingProduct;
  initialDeposit: number;
  heirName?: string;
  heirAddress?: string;
  createdAt?: string;
}


/**
 * STEPPER TYPE - Tambahin ini bre
 */
export type RegistrationStep = 1 | 2 | 3;