// src/services/layanan.ts

import api, { type ResponseBre } from "../api/axios";

// =========================
// Products Start
// =========================

export interface product {
  id: string
  title: string;
  fullTitle: string;
  desc: string;
  icon: string;
  image: string;
  publicId: string; // <--- WAJIB TAMBAHIN INI, BRE!
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
  id?:string
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
  _id?: string;
  src?: string;
  alt?: string;
  category?: string;
  publicId?: string;
}

export const getAllGallery = () => api.get<ResponseBre>("/gallery");

// =========================
// Gallery End
// =========================
