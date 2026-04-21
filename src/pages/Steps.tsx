import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Checkbox from "../components/ui/Checkbox";
import {
  OCCUPATION_OPTIONS,
  RELIGION_OPTIONS,
  GENDER_OPTIONS,
  MARITAL_STATUS_OPTIONS,
  EDUCATION_OPTIONS,
  PRODUCT_OPTIONS,
  INCOME_OPTIONS,
} from "../constants/registration";
import { useRegistrationStore } from "../store/useRegistrationStore";

// --- STEP 1: DATA PRIBADI ---
export const StepDataPribadi = () => {
  const { formData, updateField } = useRegistrationStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
      <Input
        label="Nama Lengkap (Sesuai KTP)"
        placeholder="Contoh: Bagas Coding"
        value={formData.fullName}
        onChange={(e) => updateField("fullName", e.target.value)}
      />
      <Input
        label="NIK (16 Digit)"
        maxLength={16}
        placeholder="3374xxxxxxxxxxxx"
        value={formData.nik}
        onChange={(e) => updateField("nik", e.target.value.replace(/\D/g, ""))}
      />
      <Input
        label="Tempat Lahir"
        placeholder="Contoh: Semarang"
        value={formData.pob}
        onChange={(e) => updateField("pob", e.target.value)}
      />
      <Input
        label="Tanggal Lahir"
        type="date"
        value={formData.dob}
        onChange={(e) => updateField("dob", e.target.value)}
      />
      <Select
        label="Jenis Kelamin"
        options={GENDER_OPTIONS}
        value={formData.gender}
        onChange={(e) => updateField("gender", e.target.value)}
      />
      <Select
        label="Agama"
        options={RELIGION_OPTIONS}
        value={formData.religion}
        onChange={(e) => updateField("religion", e.target.value)}
      />
    </div>
  );
};

// --- STEP 2: PEKERJAAN & DOMISILI ---
export const StepPekerjaan = () => {
  const { formData, updateField } = useRegistrationStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
      <Select
        label="Pekerjaan"
        options={OCCUPATION_OPTIONS}
        value={formData.occupation}
        onChange={(e) => updateField("occupation", e.target.value)}
      />
      <Select
        label="Pendidikan Terakhir"
        options={EDUCATION_OPTIONS}
        value={formData.education}
        onChange={(e) => updateField("education", e.target.value)}
      />
      <Select
        label="Status Pernikahan"
        options={MARITAL_STATUS_OPTIONS}
        value={formData.maritalStatus}
        onChange={(e) => updateField("maritalStatus", e.target.value)}
      />
      <Select
        label="Penghasilan Per Bulan"
        options={INCOME_OPTIONS}
        value={formData.monthlyIncome}
        onChange={(e) => updateField("monthlyIncome", e.target.value)}
      />
      <div className="md:col-span-2">
        <Input
          label="Alamat Lengkap (Sesuai KTP)"
          placeholder="Nama jalan, No. Rumah, RT/RW, Kec, Kota"
          value={formData.address}
          onChange={(e) => updateField("address", e.target.value)}
        />
        <Input
          label="Alamat Domisili"
          placeholder="Nama jalan, No. Rumah, RT/RW, Kec, Kota"
          value={formData.addressDomisili}
          onChange={(e) => updateField("addressDomisili", e.target.value)}
        />
      </div>
    </div>
  );
};

// --- STEP 3: PRODUK & KONTAK ---
export const StepKonfirmasi = () => {
  const { formData, updateField } = useRegistrationStore();

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Pilih Produk Simpanan"
          options={PRODUCT_OPTIONS}
          value={formData.selectedProduct}
          onChange={(e) => updateField("selectedProduct", e.target.value)}
        />
        <Input
          label="Setoran Awal (Rp)"
          placeholder="0"
          value={formData.initialDeposit}
          onChange={(e) =>
            updateField("initialDeposit", e.target.value.replace(/\D/g, ""))
          }
        />
        <Input
          label="Nomor WhatsApp"
          type="tel"
          placeholder="08xxxxxxxxxx"
          value={formData.whatsapp}
          onChange={(e) =>
            updateField("whatsapp", e.target.value.replace(/\D/g, ""))
          }
        />
        <Input
          label="Nama Ahli Waris"
          placeholder="Nama keluarga inti"
          value={formData.heirName}
          onChange={(e) => updateField("heirName", e.target.value)}
        />
      </div>

      <div className="md:col-span-2">
        <Input
          label="Alamat Ahli Waris"
          placeholder="Alamat tempat tinggal ahli waris"
          value={formData.heirAddress}
          onChange={(e) => updateField("heirAddress", e.target.value)}
        />
      </div>

      <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 mt-2">
        <Checkbox
          label="Saya menyatakan bahwa data yang saya isi adalah benar dan bersedia mengikuti segala aturan KSPPS Mitra Hasanah."
          checked={formData.isAgreed}
          onChange={(e) => updateField("isAgreed", e.target.checked)}
        />
      </div>
    </div>
  );
};
