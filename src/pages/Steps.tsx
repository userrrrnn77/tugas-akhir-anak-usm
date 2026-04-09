import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Checkbox from "../components/ui/Checkbox";
import {
  OCCUPATION_OPTIONS,
  RELIGION_OPTIONS,
} from "../constants/registration";
import { useRegistrationStore } from "../store/useRegistrationStore";

// --- STEP 1: DATA PRIBADI ---
export const StepDataPribadi = () => {
  // Pindahin ke sini, Bre! Biar React kaga mabok!
  const { formData, updateField } = useRegistrationStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Input
        label="Nama Lengkap"
        value={formData.fullName}
        onChange={(e) => updateField("fullName", e.target.value)}
      />
      <Input
        label="NIK"
        maxLength={16}
        value={formData.nik}
        onChange={(e) => updateField("nik", e.target.value)}
      />
      {/* POB = Place of Birth = Tempat Lahir, Bgsd! 😹 */}
      <Input
        label="Tempat Lahir"
        value={formData.pob}
        onChange={(e) => updateField("pob", e.target.value)}
      />
      {/* DOB = Date of Birth = Tanggal Lahir */}
      <Input
        label="Tanggal Lahir"
        type="date"
        value={formData.dob}
        onChange={(e) => updateField("dob", e.target.value)}
      />
      <Select
        label="Agama"
        options={RELIGION_OPTIONS}
        value={formData.religion}
        onChange={(e) => updateField("religion", e.target.value)}
      />
      <Select
        label="Pekerjaan"
        options={OCCUPATION_OPTIONS}
        value={formData.occupation}
        onChange={(e) => updateField("occupation", e.target.value)}
      />
    </div>
  );
};

// --- STEP 2: ALAMAT LENGKAP ---
export const StepAlamat = () => {
  const { formData, updateField } = useRegistrationStore();

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
      <Input
        label="Alamat Sesuai KTP"
        value={formData.address}
        onChange={(e) => updateField("address", e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="RT"
          value={formData.rt}
          onChange={(e) => updateField("rt", e.target.value)}
        />
        <Input
          label="RW"
          value={formData.rw}
          onChange={(e) => updateField("rw", e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Kecamatan"
          value={formData.district}
          onChange={(e) => updateField("district", e.target.value)}
        />
        <Input
          label="Kota/Kabupaten"
          value={formData.city}
          onChange={(e) => updateField("city", e.target.value)}
        />
      </div>
    </div>
  );
};

// --- STEP 3: KONTAK & PERSETUJUAN ---
export const StepKonfirmasi = () => {
  const { formData, updateField } = useRegistrationStore();

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Input
        label="WhatsApp"
        type="tel"
        value={formData.whatsapp}
        onChange={(e) => updateField("whatsapp", e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
      />

      <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
        <Checkbox
          label="Saya menyatakan bahwa data yang saya isi adalah benar dan bersedia mengikuti aturan KSPPS Mitra Hasanah."
          checked={formData.isAgreed}
          onChange={(e) => updateField("isAgreed", e.target.checked)}
        />
      </div>
    </div>
  );
};
