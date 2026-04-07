// src/utils/storage.ts

export const storage = {
  /**
   * GET - Pake Generic <T> biar outputnya jelas tipenya apa, bgsd! 😹
   */
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      return JSON.parse(item) as T;
    } catch (e) {
      console.error("Storage Get Error:", e);
      return null;
    }
  },

  /**
   * SET - Pake Unknown biar aman tapi tetep strict
   */
  set: (key: string, value: unknown): void => {
    try {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    } catch (e) {
      console.error("Storage Set Error:", e);
    }
  },

  /**
   * REMOVE - Buat nge-flush data sampah
   */
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },

  /**
   * CLEAR - Bantai semua isi storage kalo perlu reset total
   */
  clear: (): void => {
    localStorage.clear();
  },
};
