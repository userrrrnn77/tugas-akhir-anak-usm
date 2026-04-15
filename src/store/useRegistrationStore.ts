import { create } from "zustand";
import { persist } from "zustand/middleware";
import { postRegistration } from "../services/registration";

// 1. Interface buat State di Frontend
interface RegistrationData {
  fullName: string;
  nik: string;
  pob: string;
  dob: string;
  gender: "Laki-laki" | "Perempuan";
  religion: "Islam" | "Kristen/Katholik" | "Hindu" | "Budha";
  occupation: string;
  maritalStatus: "Lajang" | "Menikah" | "Janda" | "Duda";
  education: "SD/SMP" | "SMA" | "Akademi/D-3/S1" | "S2/S3";
  monthlyIncome: string;
  address: string;
  whatsapp: string;
  selectedProduct: string;
  initialDeposit: string;
  heirName: string;
  heirAddress: string;
  isAgreed: boolean;
}

// 2. Interface buat Payload yang dikirim ke Backend (Zero Any!)
interface RegistrationPayload {
  fullName: string;
  birthPlace: string;
  birthDate: Date;
  gender: string;
  addressKTP: string;
  addressDomisili: string;
  phoneNumber: string;
  ktpNumber: string;
  occupation: string;
  maritalStatus: string;
  education: string;
  religion: string;
  monthlyIncome: string;
  selectedProduct: string;
  initialDeposit: number;
  heirName?: string;
  heirAddress?: string;
}

// 3. Interface untuk Response API
interface ApiResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    fullName: string;
    isVerified: boolean;
  };
}

// 4. Interface Store Utama
interface RegistrationStore {
  formData: RegistrationData;
  currentStep: number;
  isLoading: boolean;
  updateField: (field: keyof RegistrationData, value: string | boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: () => void;
  submitForm: () => Promise<{ success: boolean; message: string }>;
}

const initialData: RegistrationData = {
  fullName: "",
  nik: "",
  pob: "",
  dob: "",
  gender: "Laki-laki",
  religion: "Islam",
  occupation: "Karyawan",
  maritalStatus: "Lajang",
  education: "SMA",
  monthlyIncome: "< Rp. 500.000,-",
  address: "",
  whatsapp: "",
  selectedProduct: "SIRELA",
  initialDeposit: "0",
  heirName: "",
  heirAddress: "",
  isAgreed: false,
};

// 5. Store Implementation
export const useRegistrationStore = create<RegistrationStore>()(
  persist(
    (set, get) => ({
      formData: initialData,
      currentStep: 1,
      isLoading: false,

      updateField: (field, value) =>
        set((state) => ({
          formData: { ...state.formData, [field]: value },
        })),

      nextStep: () =>
        set((state) => ({ currentStep: Math.min(state.currentStep + 1, 4) })),

      prevStep: () =>
        set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

      resetForm: () => set({ formData: initialData, currentStep: 1 }),

      submitForm: async () => {
        set({ isLoading: true });
        try {
          const { formData } = get();

          if (!formData.dob)
            throw new Error("Tanggal lahir kaga boleh kosong, Bre!");

          const payload: RegistrationPayload = {
            fullName: formData.fullName,
            birthPlace: formData.pob,
            birthDate: new Date(formData.dob),
            gender: formData.gender,
            addressKTP: formData.address,
            addressDomisili: formData.address,
            phoneNumber: formData.whatsapp,
            ktpNumber: formData.nik,
            occupation: formData.occupation,
            maritalStatus: formData.maritalStatus,
            education: formData.education,
            religion: formData.religion,
            monthlyIncome: formData.monthlyIncome,
            selectedProduct: formData.selectedProduct,
            initialDeposit: Number(formData.initialDeposit) || 0, // Default ke 0 kalo kosong
            heirName: formData.heirName || "-", // Kasih default string
            heirAddress: formData.heirAddress || "-",
          };

          const response = await postRegistration(payload);
          const responseData = response.data as ApiResponse;

          get().resetForm();

          return {
            success: true,
            message: responseData.message || "Pendaftaran Berhasil, Bre!",
          };
        } catch (error: unknown) {
          console.error("❌ Submit Error:", error);

          // Type guard buat error axios
          const axiosError = error as {
            response?: { data?: { message?: string } };
          };

          return {
            success: false,
            message:
              axiosError.response?.data?.message ||
              "Internal Server Error, coba lagi nanti!",
          };
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "mitra-hasanah-registration-storage",
    },
  ),
);
