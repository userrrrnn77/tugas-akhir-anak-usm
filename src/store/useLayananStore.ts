// src/store/useLayananStore.ts
import { create } from "zustand";
import * as layanan from "../services/layanan";
import {
  type product,
  type productDetail,
  type CreateBaitulMaal,
  type gallery,
  type ICarousel,
  type IUploadTrf,
} from "../services/layanan";

const toak = (msg: string, type: "success" | "error" = "success") => {
  console.log(`[TOAK ${type.toUpperCase()}]: ${msg}`);
};

export interface INews {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  images: string[];
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface INewsDetail extends INews {
  content: string;
}

// Bentuk minimal error axios yang kita butuhkan (hindari `any` tapi tetap
// bisa akses err.response.data tanpa import axios types di sini).
interface AxiosLikeError {
  response?: {
    data?: {
      message?: string;
      warnings?: string[];
    };
  };
}

function isAxiosLikeError(err: unknown): err is AxiosLikeError {
  return typeof err === "object" && err !== null && "response" in err;
}

interface LayananState {
  products: product[];
  activeProductDetail: productDetail | null;
  programs: CreateBaitulMaal[];
  galleries: gallery[];
  carousels: ICarousel[];

  newsList: INews[];
  activeNewsDetail: INewsDetail | null;

  isLoading: boolean;
  error: string | null;

  fetchAllProducts: () => Promise<void>;
  fetchDetailProduct: (id: string) => Promise<void>;
  fetchAllPrograms: () => Promise<void>;
  fetchAllGalleries: () => Promise<void>;
  fetchAllCarousel: () => Promise<void>;

  fetchAllNews: () => Promise<void>;
  fetchNewsDetailBySlug: (slug: string) => Promise<void>;
  uploadBuktiTransfer: (
    data: IUploadTrf,
  ) => Promise<{ success: boolean; message?: string; warnings?: string[] }>;
}

const useLayananStore = create<LayananState>((set) => ({
  products: [],
  activeProductDetail: null,
  programs: [],
  galleries: [],
  carousels: [],

  newsList: [],
  activeNewsDetail: null,

  isLoading: false,
  error: null,

  fetchAllProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getAllProduct();
      set({ products: response.data.data as product[], isLoading: false });
      toak("Produk berhasil diangkut!");
    } catch (err: unknown) {
      let msg = "Gagal mengambil data produk, Bre.";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },

  fetchDetailProduct: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getDetailProductById(id);
      set({
        activeProductDetail: response.data.data as productDetail,
        isLoading: false,
      });
    } catch (err: unknown) {
      let msg = "Detail produk gagal dimuat, Bre.";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },

  fetchAllPrograms: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getAllProgram();
      set({
        programs: response.data.data as CreateBaitulMaal[],
        isLoading: false,
      });
      toak("Data Baitul Maal aman!");
    } catch (err: unknown) {
      let msg = "Program Baitul Maal gagal dimuat.";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },

  fetchAllGalleries: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getAllGallery();
      set({ galleries: response.data.data as gallery[], isLoading: false });
      toak("Galeri foto siap ditampilkan!");
    } catch (err: unknown) {
      let msg = "Gagal memuat galeri foto.";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },

  fetchAllCarousel: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getCarousel();
      set({ carousels: response.data.data as ICarousel[], isLoading: false });
    } catch (err: unknown) {
      let msg = "Gagal memuat data carousel.";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
    }
  },

  fetchAllNews: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getBerita();
      set({ newsList: response.data.data as INews[], isLoading: false });
      toak("Daftar berita berhasil dimuat, Bre!");
    } catch (err: unknown) {
      let msg = "Gagal memuat daftar berita terbaru.";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },

  fetchNewsDetailBySlug: async (slug: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await layanan.getBeritaBySlug(slug);
      set({
        activeNewsDetail: response.data.data as INewsDetail,
        isLoading: false,
      });
    } catch (err: unknown) {
      let msg = "Gagal memuat detail berita tersebut.";
      if (err instanceof Error) msg = err.message;
      set({ error: msg, isLoading: false });
      toak(msg, "error");
    }
  },

  uploadBuktiTransfer: async (
    data: IUploadTrf,
  ): Promise<{ success: boolean; message?: string; warnings?: string[] }> => {
    set({ isLoading: true, error: null });
    try {
      await layanan.uploadTransfer(data);
      set({ isLoading: false });
      toak(
        "Bukti transaksi berhasil diunggah secara aman, mohon tunggu verifikasi admin.",
        "success",
      );
      return { success: true };
    } catch (err: unknown) {
      set({ isLoading: false });

      // Kalau backend menolak karena dokumen salah jenis / tidak terbaca
      // (400 dari validateDocumentMiddleware), axios melempar error dengan
      // response.data berisi { success: false, message, warnings }.
      const warnings: string[] | undefined = isAxiosLikeError(err)
        ? err.response?.data?.warnings
        : undefined;

      let msg = "Gagal mengunggah bukti transaksi.";
      if (isAxiosLikeError(err) && err.response?.data?.message) {
        msg = err.response.data.message;
      } else if (err instanceof Error) {
        msg = err.message;
      }

      set({ error: msg });
      toak(msg, "error");

      return { success: false, message: msg, warnings };
    }
  },
}));

export default useLayananStore;
