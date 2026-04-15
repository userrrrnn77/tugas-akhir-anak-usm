import api from "../api/axios";

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

export const postRegistration = (data: RegistrationPayload) =>
  api.post("/registration", data);
