// src/store/useLayananStore.ts
import { create } from "zustand";
import * as layanan from "../services/layanan";
import { 
  type product, 
  type productDetail, 
  type CreateBaitulMaal, 
  type gallery 
} from "../services/layanan";

// Toak (Toast) buat pengumuman, ganti isinya pake library toast lu ntar
const toak = (msg: string, type: "success" | "error" = "success") => {
  console.log(`[TOAK ${type.toUpperCase()}]: ${msg}`);
};

interface LayananState {
  // State Data
  products: product[];
  activeProductDetail: productDetail | null;
  programs: CreateBaitulMaal[];
  galleries: gallery[];
  
  // UI State
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchAllProducts: () => Promise<void>;
  fetchDetailProduct: (id: string) => Promise<void>;
  fetchAllPrograms: () => Promise<void>;
  fetchAllGalleries: () => Promise<void>;
}

const useLayananStore = create<LayananState>((set) => ({
  products: [],
  activeProductDetail: null,
  programs: [],
  galleries: [],
  isLoading: false,
  error: null,

  // 1. Ambil Semua Produk
  fetchAllProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getAllProduct();
      // TypeScript otomatis tau response.data.data itu array of product
      set({ products: response.data.data as product[], isLoading: false });
      toak("Produk berhasil diangkut!");
    } catch (err: unknown) {
      let msg = "Gagal ambil produk, Bre!";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },

  // 2. Ambil Detail Produk (Pake Interface productDetail lu)
  fetchDetailProduct: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getDetailProductById(id);
      set({ activeProductDetail: response.data.data as productDetail, isLoading: false });
    } catch (err: unknown) {
      let msg = "Detail produk error, mbot!";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },

  // 3. Ambil Semua Program Baitul Maal
  fetchAllPrograms: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getAllProgram();
      set({ programs: response.data.data as CreateBaitulMaal[], isLoading: false });
      toak("Data Baitul Maal aman!");
    } catch (err: unknown) {
      let msg = "Program Baitul Maal kaga mau keluar!";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },

  // 4. Ambil Semua Galeri
  fetchAllGalleries: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getAllGallery();
      set({ galleries: response.data.data as gallery[], isLoading: false });
      toak("Galeri foto ready!");
    } catch (err: unknown) {
      let msg = "Gagal loading galeri!";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },
}));

export default useLayananStore;