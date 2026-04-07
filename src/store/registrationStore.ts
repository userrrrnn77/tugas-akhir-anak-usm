import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { RegistrationData, RegistrationStep } from "../types/registration"; // lu RegistrationStep dapet darimana bre?
import type { FormStatus } from "../types/common";

interface RegistrationState {
  // Data utama form pendaftaran
  formData: Partial<RegistrationData>;
  // Status form (buat handle loading pas nembak API)
  status: FormStatus;
  // Step pendaftaran (kalo lu mau pake sistem Stepper)
  currentStep: RegistrationStep;

  // ACTIONS
  setFormData: (data: Partial<RegistrationData>) => void;
  setStatus: (status: FormStatus) => void;
  setStep: (step: RegistrationStep) => void;
  resetForm: () => void;
}

export const useRegistrationStore = create<RegistrationState>()(
  persist(
    (set) => ({
      // INITIAL STATE
      formData: {},
      status: "idle",
      currentStep: 1,

      // SETTER ACTIONS
      setFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      setStatus: (status) => set({ status }),

      setStep: (step) => set({ currentStep: step }),

      resetForm: () =>
        set({
          formData: {},
          status: "idle",
          currentStep: 1,
        }),
    }),
    {
      name: "kspps-registration-storage", // Key di LocalStorage lu, bgsd! 😹
    },
  ),
);
