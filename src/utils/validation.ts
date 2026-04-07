// src/utils/validation.ts

/**
 * VALIDASI KTP - Cek minimal 16 digit angka (Standard Indonesia)
 */
export const isValidKTP = (ktp: string): boolean => {
  return /^\d{16}$/.test(ktp);
};

/**
 * VALIDASI HP - Harus diawali 08 atau +62
 */
export const isValidPhone = (phone: string): boolean => {
  return /^(08|\+628)\d{8,11}$/.test(phone);
};

/**
 * VALIDASI EMAIL - Biar kaga ada email 'bebas@jembot.com' masuk, bgsd! 😹
 */
export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
