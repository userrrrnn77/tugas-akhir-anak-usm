// src/types/common.ts

/**
 * FORM & LOADING STATES - Biar kaga ada race condition pas submit!
 */
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * API RESPONSE - Pake unknown biar strict, bgsd!
 */
export interface ApiResponse<T = unknown> { 
  success: boolean;
  message: string;
  data?: T;
  // Buat nampung error per field dari backend (misal: KTP sudah ada)
  errors?: Record<string, string[]>; 
}

/**
 * HELPER TYPE - Buat Dropdown Options
 */
export interface SelectOption<T = string> {
  label: string;
  value: T;
}

/**
 * STEPPER TYPE - Navigasi form pendaftaran
 */
export type RegistrationStep = 1 | 2 | 3;