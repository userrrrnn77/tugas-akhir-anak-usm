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
import {
  Copy,
  // QrCode
  Wallet,
  Info,
} from "lucide-react";
import { toast } from "sonner";

// --- STEP 1: DATA PRIBADI ---
export const StepDataPribadi = () => {
  const { formData, updateField } = useRegistrationStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
      <Input
        label="Nama Lengkap (Sesuai KTP)"
        placeholder="Contoh: Bagas Sanjaya"
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

export const BarcodeAndNorek = () => {
  const { formData } = useRegistrationStore();

  // Data Sakral BSI KSPPS Berkah Mitra Hasanah
  const NOREK_BSI = "7125844787";
  const ATAS_NAMA = "Kspps berkah mitra hasanah meteseh";

  const handleCopyNorek = () => {
    navigator.clipboard.writeText(NOREK_BSI);
    toast.success("Nomor Rekening BSI berhasil disalin, Bre! 📋");
  };

  const handleCopyNominal = () => {
    navigator.clipboard.writeText(formData.initialDeposit || "0");
    toast.success("Nominal Setoran Awal berhasil disalin! 💸");
  };

  // Format rupiah biar keliatan aplikasi perbankan profesional
  const formatRupiah = (value: string) => {
    const num = Number(value) || 0;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
      {/* ALERT BANNER PETUNJUK */}
      <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40 flex gap-3 items-start">
        <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs font-medium text-amber-800 dark:text-amber-400 leading-relaxed">
          <span className="font-bold uppercase">Penting, Bre!</span> Silakan
          lakukan transfer setoran awal sesuai nominal di bawah ini. Simpan
          bukti transfer Anda untuk di-unggah pada halaman validasi berikutnya.
        </div>
      </div>

      {/* TWO COLUMN PREMIUM LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 items-stretch">
        {/* KOLOM KIRI: DETAIL TRANSFER REKENING BSI */}
        <div className="bg-white dark:bg-dark-card border border-neutral-100 dark:border-neutral-800 p-6 md:p-8 rounded-4xl flex flex-col justify-between shadow-xs">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-black text-xs uppercase tracking-wider">
              <Wallet size={16} />
              <span>Metode Transfer Bank</span>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
                Nama Bank
              </p>
              <h3 className="text-xl font-black text-neutral-800 dark:text-white tracking-tight">
                PT Bank Syariah Indonesia (BSI)
              </h3>
            </div>

            {/* BOX COPY NOREK */}
            <div className="space-y-1">
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
                Nomor Rekening
              </p>
              <div
                onClick={handleCopyNorek}
                className="flex items-center justify-between p-3.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800 rounded-xl cursor-pointer hover:border-emerald-500 transition-colors group">
                <span className="font-mono text-lg font-bold text-neutral-800 dark:text-neutral-100 tracking-widest">
                  {NOREK_BSI}
                </span>
                <Copy
                  size={16}
                  className="text-neutral-400 group-hover:text-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
                Atas Nama
              </p>
              <p className="text-sm font-black text-neutral-700 dark:text-neutral-200 tracking-tight uppercase">
                {ATAS_NAMA}
              </p>
            </div>
          </div>

          {/* TOTAL TAGIHAN BILLING */}
          <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-1">
            <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
              Nominal Setoran Awal
            </p>
            <div
              onClick={handleCopyNominal}
              className="flex items-center justify-between p-3.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl cursor-pointer hover:border-emerald-500 transition-colors group">
              <h2 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 italic">
                {formatRupiah(formData.initialDeposit)}
              </h2>
              <Copy
                size={16}
                className="text-emerald-500/60 group-hover:text-emerald-500 transition-colors"
              />
            </div>
            <p className="text-[10px] text-neutral-400 italic font-medium pl-1">
              Produk Terpilih:{" "}
              <span className="font-bold text-neutral-600 dark:text-neutral-300">
                {formData.selectedProduct}
              </span>
            </p>
          </div>
        </div>

        {/* KOLOM KANAN: QRIS / BARCODE PLACEHOLDER VIEWER TINGGAL UNCOMMENT AJA */}
        {/* <div className="bg-neutral-50 dark:bg-dark-card border-2 border-dashed border-neutral-200 dark:border-neutral-800 p-6 md:p-8 rounded-4xl flex flex-col items-center justify-center text-center relative overflow-hidden min-h-75">
          <div className="space-y-4 max-w-xs animate-pulse">
            <div className="w-32 h-32 bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto border-4 border-white dark:border-neutral-900 shadow-md">
              <QrCode
                size={64}
                className="text-neutral-400 dark:text-neutral-600"
              />
            </div>
            <div className="space-y-2">
              <span className="px-2.5 py-0.5 bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">
                Metode QRIS Segera Hadir
              </span>
              <h4 className="text-sm font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-tight">
                Metode QRIS Sedang Disiapkan
              </h4>
              <p className="text-[11px] text-neutral-400 leading-normal font-medium">
                Sistem otomatisasi barcode QRIS merchant Mitra Hasanah sedang
                di-sinkronisasi. Untuk saat ini, mohon gunakan transfer manual
                via nomor rekening BSI di samping, Bre!
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <img src="URL_GAMBAR_QRIS_DARI_BACKEND" className="w-44 h-44 object-contain mx-auto rounded-xl border-4 border-white shadow-md" alt="QRIS Merchant" />
            <p className="text-xs font-bold text-neutral-500">Scan QRIS KSPPS Mitra Hasanah</p>
          </div> 
         
        </div> */}
      </div>
    </div>
  );
};
