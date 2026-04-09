import { create } from "zustand";
import { persist } from "zustand/middleware";

// 1. Definisi Data (Biar jelas field-nya apa aja, kaga abu-abu kayak masa depan!)
interface RegistrationData {
  fullName: string;
  nik: string;
  pob: string;
  dob: string;
  religion: string;
  occupation: string;
  address: string;
  rt: string;
  rw: string;
  district: string;
  city: string;
  whatsapp: string;
  email: string;
  isAgreed: boolean;
}

// 2. Definisi Store
interface RegistrationStore {
  formData: RegistrationData;
  currentStep: number;
  updateField: (field: keyof RegistrationData, value: string | boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: () => void;
}

const initialData: RegistrationData = {
  fullName: "",
  nik: "",
  pob: "",
  dob: "",
  religion: "",
  occupation: "",
  address: "",
  rt: "",
  rw: "",
  district: "",
  city: "",
  whatsapp: "",
  email: "",
  isAgreed: false,
};

// 3. Gabungan Persist + Explicit State
export const useRegistrationStore = create<RegistrationStore>()(
  persist(
    (set) => ({
      formData: initialData,
      currentStep: 1,

      updateField: (field, value) =>
        set((state) => ({
          formData: { ...state.formData, [field]: value },
        })),

      nextStep: () =>
        set((state) => ({ currentStep: Math.min(state.currentStep + 1, 4) })),

      prevStep: () =>
        set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

      resetForm: () => set({ formData: initialData, currentStep: 1 }),
    }),
    {
      name: "kspps-registration-storage",
    },
  ),
);
