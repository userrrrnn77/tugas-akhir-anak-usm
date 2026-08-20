// src/services/layanan.ts

import api, { type ResponseBre } from "../api/axios";

// =========================
// Products Start
// =========================

export interface product {
  id: string;
  title: string;
  fullTitle: string;
  desc: string;
  icon: string;
  image: string;
  publicId: string;
  category: "simpanan" | "pembiayaan";
}

export const getAllProduct = () => api.get<ResponseBre>("/product");

export const getProductFullById = (id: string) =>
  api.get(`/product/full/${id}`);

export interface ISection {
  subtitle: string;
  items: string[];
}

export interface productDetail {
  id: string;
  title: string;
  description: string;
  sections: ISection[];
}

export const getDetailProductById = (id: string) =>
  api.get<ResponseBre>(`/product-detail/${id}`);

// =========================
// Products End
// =========================

// =========================
// Baitul Maal Start
// =========================

export interface CreateBaitulMaal {
  id?: string;
  title?: string;
  tagline?: string;
  description?: string;
  images: string[];
  publicIds?: string[];
  videoUrl?: string[];
  features?: string[];
  category: "KESEHATAN" | "KEMANUSIAAN" | "SOSIAL";
}

export const getAllProgram = () => api.get<ResponseBre>("/baitul-maal");

export const getProgramById = (id: string) =>
  api.get<ResponseBre>(`/baitul-maal/${id}`);

// =========================
// Baitul Maal End
// =========================

// =========================
// Gallery Start
// =========================

export interface gallery {
  _id: string;
  src: string;
  type: "image" | "video";
  category: string;
  publicId: string;
}

export const getAllGallery = () => api.get<ResponseBre>("/gallery");

// =========================
// Gallery End
// =========================

// =========================
// Carousel Start
// =========================

export interface ICarousel {
  _id: string;
  image: string;
  title: string;
  publicId: string;
}

export const getCarousel = () => api.get<ResponseBre>("/carousel");

// =========================
// Carousel End
// =========================

// =========================
// Upload Bukti Transfer Start
// =========================

export interface IUploadTrf {
  registrationId: string;
  buktiTransfer: string;
  buktiKTP: string;
}

// Kalau backend mendeteksi dokumen salah jenis atau tidak terbaca (via OCR),
// request akan ditolak dengan HTTP 400 dan body berisi `warnings` (array
// pesan spesifik per file yang salah). Axios akan melempar ini sebagai
// error — ditangani di uploadBuktiTransfer (useLayananStore.ts), BUKAN
// dikembalikan sebagai response sukses.
export interface UploadTrfErrorResponse {
  success: false;
  message: string;
  warnings?: string[];
}

export const uploadTransfer = (data: IUploadTrf) =>
  api.post<ResponseBre>("/transaction/uploadTransaction", data);

// =========================
// Upload Bukti Transfer End
// =========================

// =========================
// Get News Start
// =========================

export const getBerita = () => api.get<ResponseBre>("/news");
export const getBeritaBySlug = (slug: string) =>
  api.get<ResponseBre>(`/news/${slug}`);

// =========================
// Get News End
// =========================
