// src/utils/formatter.ts

/**
 * FORMAT RUPIAH - Biar Boomer Genuk kaga puyeng liat angka, bgsd! 😹
 * Contoh: 1000000 -> Rp 1.000.000
 */
export const formatRupiah = (number: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

/**
 * DATE FORMATTER - Buat ngerapiin tanggal pendaftaran
 * Contoh: 2026-04-07 -> 7 April 2026
 */
export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

/**
 * CLEAN NUMBER - Buat ngehapus karakter non-angka (penting buat input setoran)
 */
export const cleanNumber = (value: string): number => {
  return parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
};
