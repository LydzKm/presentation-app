import { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const PresentationCompact = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const sections = [
    {
      presenter: "PUTRA",
      duration: "~5-6 menit",
      color: "bg-purple-600",
      slides: [
        {
          title: "PEMBUKA + OVERVIEW",
          points: [
            "Salam pembuka",
            "Hook: Setiap hari pakai minimal 2 dari 3 jenis jaringan",
            "Contoh: Instagram (Internet), BOC/SIPT (Intranet), Driver Gojek (Extranet)",
            "Roadmap: 5 bagian presentasi",
          ],
          imageDesc:
            "Diagram 3 lingkaran Internet-Intranet-Extranet dengan contoh aplikasi di masing-masing",
          script: `Assalamualaikum warahmatullahi wabarakatuh. Selamat pagi Pak/Bu dan teman-teman.\n\nHari ini kita mau bahas Internet, Intranet, dan Extranet. Kalian sadar gak kalau setiap hari kita pakai minimal 2 dari 3 jenis ini? Buka Instagram—Internet. Akses BOC atau SIPT—Intranet. Driver Gojek akses order—Extranet.\n\nPresentasi kita 5 bagian: Internet, Intranet, Perbandingan, Keuntungan & Tantangan, dan saya fokus ke Extranet. Langsung aja ya.`,
        },
        {
          title: "EXTRANET - DEFINISI & KARAKTERISTIK",
          points: [
            "Definisi: Jaringan private + akses terkontrol untuk pihak luar",
            "Pihak eksternal: supplier, driver ojol, seller marketplace",
            "Karakteristik: Akses terbatas, berbasis izin per user, enkripsi, kolaborasi antar bisnis",
            "Keamanan: VPN (koneksi terenkripsi), firewall (tembok api), autentikasi berlapis",
          ],
          imageDesc:
            "Diagram Intranet dengan panah keluar ke Supplier, Driver, Seller melalui VPN/firewall",
          script: `Extranet itu jaringan private yang share sebagian info ke pihak luar yang dipercaya. Analoginya: Intranet itu rumah keluarga, Extranet kasih kunci kamar tamu ke teman tertentu.\n\nPihak luar bisa supplier, driver ojol, seller marketplace. Karakteristiknya: akses terbatas per area, izin berbeda tiap user, harus enkripsi, fokus kolaborasi antar bisnis. Keamanannya pakai VPN yaitu koneksi terenkripsi, firewall atau tembok api digital, autentikasi berlapis.`,
        },
        {
          title: "EXTRANET - PENERAPAN & STUDI KASUS + PENUTUP",
          points: [
            "Penerapan: Supply chain, E-commerce (Shopee), Transportation (Gojek), Healthcare, Banking",
            "Studi Kasus: Shopee Seller Center - manage toko 24/7, pesanan langsung masuk, analisis penjualan",
            "Recap: Internet (publik), Intranet (internal), Extranet (kolaborasi eksternal)",
            "Penutup & Q&A",
          ],
          imageDesc:
            "Split screen 5 aplikasi: pabrik, Shopee, Gojek, rumah sakit, EDC + diagram Venn summary",
          script: `Penerapan: pabrik dengan supplier, Shopee dengan seller, Gojek dengan driver, rumah sakit share rekam medis, bank dengan mesin kasir merchant.\n\nStudi kasus Shopee: dulu seller susah manage toko manual. Sekarang pakai Seller Center bisa manage 24/7, liat pesanan langsung masuk, analisis penjualan lengkap. Seller happy, transaksi cepat.\n\nRecap: Internet publik, Intranet internal, Extranet kolaborasi. Pilih sesuai kebutuhan. Terima kasih. Sekarang Q&A. Wassalamualaikum.`,
        },
      ],
    },
    {
      presenter: "Sellya",
      duration: "~5 menit",
      color: "bg-blue-600",
      slides: [
        {
          title: "INTERNET - DEFINISI & KARAKTERISTIK",
          points: [
            "Definisi: Jaringan global miliaran device, Interconnected Networks",
            "Protokol: TCP/IP (protokol komunikasi universal)",
            "Karakteristik: Global, publik, bisa berkembang tanpa batas, terdesentralisasi, konten tidak terkontrol",
            "Arsitektur: Client-Server (klien-server) & Peer-to-Peer (antar perangkat langsung)",
          ],
          imageDesc: "Globe dengan koneksi antar benua + ikon TCP/IP",
          script: `Internet itu jaringan super gede yang nyambungin miliaran device di dunia. Kata Internet singkatan Interconnected Networks artinya jaringan yang saling terhubung. Analoginya kayak jalan raya global—bedanya yang jalan itu data.\n\nYang bikin bisa communicate pakai TCP/IP, protokol komunikasi universal semua device. Karakteristiknya: global tanpa batas, publik terbuka, bisa berkembang unlimited, terdesentralisasi gak ada yang ngontrol, konten bebas. Arsitekturnya ada Client-Server kayak browsing website, atau Peer-to-Peer kayak torrent dimana perangkat langsung konek satu sama lain.`,
        },
        {
          title: "INTERNET - ARSITEKTUR",
          points: [
            "Tier 1: Backbone global (tulang punggung Internet dunia)",
            "Tier 2: ISP Regional (penyedia Internet wilayah)",
            "Tier 3: ISP Lokal (Indihome, First Media)",
            "Last mile: Koneksi akhir ke rumah/kantor",
            "Perangkat: Router (pengarah), Switch (penyambung), Server, DNS (penerjemah alamat), Firewall (tembok api)",
          ],
          imageDesc:
            "Piramida terbalik: Tier 1 atas, Tier 2 tengah, Tier 3 bawah, end users paling bawah",
          script: `Arsitektur Internet berlapis. Tier 1 paling atas—ISP internasional yang kelola kabel bawah laut antar benua, ini tulang punggung Internet dunia. Tier 2 ISP Regional tingkat wilayah beli dari Tier 1. Tier 3 ISP Lokal kayak Indihome yang kita pakai. Last mile koneksi akhir ke rumah kita.\n\nDi tiap layer ada Router buat ngarahin data, Switch buat nyambungin perangkat, Server buat simpen website, DNS buat nerjemahin nama domain jadi alamat IP, Firewall tembok api buat keamanan. Semua kerja bareng biar data ngalir dalam milidetik.`,
        },
        {
          title: "INTERNET - PENERAPAN",
          points: [
            "WWW: Website, toko online, blog",
            "Email & Pesan: Gmail, WhatsApp",
            "Streaming: YouTube, Netflix, Spotify",
            "Penyimpanan Online: Google Drive, AWS",
            "Perangkat Pintar: Smart TV, smart AC",
            "Media Sosial: Instagram, TikTok",
          ],
          imageDesc: "Grid 6 kotak dengan ikon aplikasi populer",
          script: `Penerapan Internet luas banget. WWW buat browsing website dan toko online. Email dan messaging kayak Gmail, WhatsApp. Streaming YouTube, Netflix, Spotify. Penyimpanan online Google Drive, AWS. Perangkat pintar kayak smart TV, smart AC. Media sosial Instagram, TikTok.\n\nIntinya Internet udah jadi infrastruktur dasar kehidupan digital kita.`,
        },
      ],
    },
    {
      presenter: "Agung",
      duration: "~5 menit",
      color: "bg-green-600",
      slides: [
        {
          title: "INTRANET - DEFINISI & KARAKTERISTIK",
          points: [
            "Definisi: Jaringan private dalam organisasi, pakai teknologi Internet",
            "Scope: Satu organisasi/perusahaan",
            "Akses: Karyawan internal saja, credential-based",
            "Karakteristik: Privat, kontrol terpusat, login sekali untuk semua sistem, aplikasi khusus organisasi, pengguna terbatas",
          ],
          imageDesc:
            "Gedung kantor dengan network internal antar departemen + firewall di luar",
          script: `Intranet jaringan private dalam organisasi pakai teknologi Internet tapi tertutup. Analoginya: Internet jalan raya umum, Intranet jalan dalam kompleks cuma penghuni bisa masuk.\n\nScope terbatas satu organisasi. Akses ketat cuma karyawan dengan credential. Karakteristiknya: privat dengan firewall, kontrol terpusat oleh IT, pakai sistem login sekali untuk semua aplikasi, aplikasi khusus sesuai kebutuhan organisasi, pengguna terbatas sesuai jumlah karyawan.`,
        },
        {
          title: "INTRANET - ARSITEKTUR",
          points: [
            "Core: Server database, file, aplikasi",
            "Distribution: Switch & router antar departemen",
            "Access: Komputer kerja karyawan",
            "Koneksi: LAN (satu gedung) atau WAN (antar cabang)",
            "Komponen: Active Directory (pengelola akun), DNS internal, DHCP (pembagi IP otomatis)",
          ],
          imageDesc:
            "Diagram 3 layer: Core server, Distribution switches, Access workstations",
          script: `Arsitektur Intranet 3 lapis. Core Layer server pusat—database, file server, server aplikasi. Distribution Layer switch dan router distribusi ke departemen. Access Layer komputer kerja karyawan.\n\nKoneksinya pakai LAN kalau satu gedung dengan kabel atau WiFi. Kalau banyak cabang pakai WAN. Komponen teknisnya Active Directory buat kelola akun pengguna, DNS internal, DHCP buat kasih alamat IP otomatis.`,
        },
        {
          title: "INTRANET - PENERAPAN",
          points: [
            "Portal Karyawan: Slip gaji, cuti, absensi",
            "Pengelolaan Dokumen: SOP, template, folder bersama",
            "Wiki Internal: Kebijakan, panduan kerja",
            "Manajemen Proyek: Pelacakan tugas, kolaborasi",
            "Berita Internal: Pengumuman perusahaan",
            "Pelatihan: Platform e-learning",
          ],
          imageDesc: "Screenshot mockup portal Intranet dengan berbagai menu",
          script: `Penerapan Intranet: Portal Karyawan akses slip gaji, cuti, absensi self-service. Pengelolaan Dokumen folder bersama SOP dan template terpusat. Wiki Internal kayak Wikipedia perusahaan isi kebijakan dan panduan. Manajemen Proyek tools koordinasi tim. Berita Internal pengumuman perusahaan. Platform Pelatihan e-learning karyawan.\n\nDengan ini Intranet jadi pusat aktivitas internal organisasi.`,
        },
      ],
    },
    {
      presenter: "Mega",
      duration: "~5 menit",
      color: "bg-orange-600",
      slides: [
        {
          title: "PERBANDINGAN - TABEL TEKNIS",
          points: [
            "AKSES: Internet publik | Intranet internal | Extranet selektif partner",
            "KEAMANAN: Internet minimal | Intranet tinggi | Extranet sangat tinggi",
            "CAKUPAN: Internet global | Intranet organisasi | Extranet multi-organisasi",
            "PENGGUNA: Internet tak terbatas | Intranet karyawan | Extranet partner tertentu",
            "KONTROL: Internet terdesentralisasi | Intranet terpusat | Extranet kontrol bersama",
          ],
          imageDesc: "Tabel komparasi 5 aspek dengan warna berbeda per kolom",
          script: `Perbandingan teknis ketiga jaringan. Akses: Internet publik semua orang, Intranet internal organisasi, Extranet selektif partner tertentu. Keamanan: Internet minimal, Intranet tinggi dengan firewall, Extranet sangat tinggi dengan VPN dan enkripsi.\n\nCakupan: Internet global tanpa batas, Intranet satu organisasi, Extranet multi-organisasi kolaborasi. Pengguna: Internet tak terbatas miliaran, Intranet terbatas karyawan, Extranet partner tertentu. Kontrol: Internet terdesentralisasi, Intranet terpusat oleh IT, Extranet kontrol bersama.`,
        },
        {
          title: "PERBANDINGAN - INFRASTRUKTUR",
          points: [
            "Internet: Infrastruktur publik ISP, tulang punggung global",
            "Intranet: Infrastruktur privat, server internal, jaringan privat",
            "Extranet: Hybrid—pakai Internet tapi dengan terowongan VPN",
            "Teknologi dasar sama: TCP/IP, beda di lapisan keamanan",
          ],
          imageDesc: "3 diagram side-by-side arsitektur berbeda",
          script: `Perbedaan infrastruktur. Internet pakai infrastruktur publik ISP dan tulang punggung global, kita gak kontrol jalur data. Intranet infrastruktur privat server internal dan jaringan sendiri, semua dalam kendali organisasi. Extranet hybrid pakai Internet publik tapi dengan terowongan VPN buat enkripsi.\n\nMenariknya ketiganya pakai teknologi dasar sama TCP/IP. Bedanya di lapisan keamanan dan kontrol akses yang diterapkan.`,
        },
        {
          title: "PERBANDINGAN - KAPAN PAKAI YANG MANA",
          points: [
            "INTERNET: Info untuk publik, pemasaran, toko online, layanan pelanggan",
            "INTRANET: Data sensitif internal, kolaborasi karyawan, sistem operasional",
            "EXTRANET: Kolaborasi antar bisnis, rantai pasokan, seller marketplace, driver ojol",
            "Organisasi modern pakai ketiganya untuk kebutuhan berbeda",
          ],
          imageDesc:
            "Decision tree dari 'Siapa yang perlu akses?' ke 3 pilihan dengan use case",
          script: `Kapan pakai yang mana? Pakai Internet kalau target publik luas—website pemasaran, toko online, layanan pelanggan. Pakai Intranet kalau jaga data internal—sistem HR, sistem operasional, basis pengetahuan. Pakai Extranet kalau kolaborasi pihak luar—seller marketplace, driver ojol, rantai pasokan.\n\nOrganisasi besar ideal pakai ketiganya bersamaan untuk kebutuhan berbeda.`,
        },
      ],
    },
    {
      presenter: "Danang",
      duration: "~5 menit",
      color: "bg-red-600",
      slides: [
        {
          title: "INTERNET - KEUNTUNGAN & TANTANGAN",
          points: [
            "KEUNTUNGAN: Jangkauan global, hemat biaya, bisa berkembang mudah, akses info unlimited, inovasi cepat",
            "TANTANGAN: Risiko keamanan (hacking, phishing, malware), masalah privasi, terlalu banyak informasi, kesenjangan digital, moderasi konten",
          ],
          imageDesc:
            "Split diagram keuntungan (ikon positif) vs tantangan (ikon warning)",
          script: `Keuntungan Internet: jangkauan global bisnis kecil bisa jual ke seluruh dunia, hemat biaya infrastruktur udah ada, bisa berkembang mudah tinggal scale up server, akses info unlimited belajar apapun gratis, inovasi cepat startup bisa launch cepat.\n\nTantangan: risiko keamanan hacking phishing malware serangan, masalah privasi tracking dan profiling data, terlalu banyak informasi susah bedain valid atau hoax, kesenjangan digital gak semua punya akses layak, moderasi konten struggle antara kebebasan bicara dan filter konten berbahaya.`,
        },
        {
          title: "INTRANET - KEUNTUNGAN & TANTANGAN",
          points: [
            "KEUNTUNGAN: Keamanan lebih baik, kontrol akses teratur, info terpusat, kolaborasi lebih baik, efisiensi operasional",
            "TANTANGAN: Biaya implementasi tinggi, butuh keahlian IT, akses jarak jauh terbatas, resistensi adopsi, biaya pengembangan",
          ],
          imageDesc:
            "Split diagram dengan ikon shield (keuntungan) vs cost/barrier (tantangan)",
          script: `Keuntungan Intranet: keamanan lebih baik data terlindung firewall, kontrol akses izin detail per orang, info terpusat satu sumber kebenbenaran, kolaborasi lebih baik tools terpadu, efisiensi operasional otomasi proses.\n\nTantangan: biaya tinggi invest server dan software, butuh keahlian IT perlu tim capable, akses jarak jauh terbatas susah dari luar kantor, resistensi adopsi karyawan resist perubahan, biaya pengembangan tambah user butuh upgrade.`,
        },
        {
          title: "EXTRANET - KEUNTUNGAN & TANTANGAN",
          points: [
            "KEUNTUNGAN: Kolaborasi antar bisnis efisien, berbagi data langsung, kurangi beban komunikasi, ekosistem diperluas",
            "TANTANGAN: Keamanan kompleks, masalah kepercayaan antar organisasi, integrasi rumit, risiko lebih tinggi kalau terjadi pelanggaran",
          ],
          imageDesc: "Balance scale: keuntungan vs tantangan dengan ikon",
          script: `Keuntungan Extranet: kolaborasi antar bisnis efisien partner login sendiri, berbagi data langsung semua pihak langsung tau update, kurangi beban gak perlu banyak rapat, ekosistem diperluas organisasi kerja dalam jaringan besar.\n\nTantangan: keamanan kompleks protect data dari pihak luar, masalah kepercayaan harus percaya partner gak salah gunakan, integrasi rumit sistem beda-beda organisasi, risiko lebih tinggi pelanggaran affect semua partner terhubung. Jadi implementasi Extranet perlu pertimbangan matang manfaat vs risiko.`,
        },
      ],
    },
  ];

  const currentSection = sections[activeSection];
  const currentSlide = currentSection.slides[activeSlide];
  const totalSlides = currentSection.slides.length;

  const nextSlide = () => {
    if (activeSlide < totalSlides - 1) {
      setActiveSlide(activeSlide + 1);
    } else if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1);
      setActiveSlide(0);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else if (activeSection > 0) {
      setActiveSection(activeSection - 1);
      setActiveSlide(sections[activeSection - 1].slides.length - 1);
    }
  };

  const goToSection = (sectionIndex: number) => {
    setActiveSection(sectionIndex);
    setActiveSlide(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Internet, Intranet, dan Extranet
          </h1>
          <p className="text-purple-200 text-sm sm:text-base">
            15 Slide - Efisien & To The Point
          </p>
          <p className="text-purple-300 text-xs sm:text-sm mt-1">
            ~25-30 menit presentasi + Q&A
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-6">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => goToSection(idx)}
              className={`p-3 rounded-lg transition-all text-left sm:text-center ${
                activeSection === idx
                  ? section.color + " text-white shadow-lg scale-105"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              <div className="flex items-center justify-start sm:justify-center gap-2 mb-1">
                <User size={16} />
                <span className="font-semibold text-sm">
                  {section.presenter}
                </span>
              </div>
              <div className="text-xs opacity-80 pl-8 sm:pl-0">
                {section.duration}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className={`${currentSection.color} text-white p-4 sm:p-6`}>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs sm:text-sm opacity-90 mb-1">
                  {currentSection.presenter} - Slide {activeSlide + 1}/
                  {totalSlides}
                </div>
                <h2 className="text-xl sm:text-3xl font-bold">
                  {currentSlide.title}
                </h2>
              </div>
              <div className="text-right text-xs sm:text-sm opacity-90 hidden sm:block">
                {currentSection.duration}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Poin Penting (Untuk Slide)
              </h3>
              <ul className="space-y-3">
                {currentSlide.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span className="text-slate-700 leading-relaxed text-sm sm:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg mb-6 sm:mb-8">
              <h3 className="text-sm font-semibold text-purple-900 mb-2">
                📸 Gambar yang Perlu Dicari:
              </h3>
              <p className="text-purple-800 text-sm italic">
                {currentSlide.imageDesc}
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Script Narasi (Untuk Dibacakan)
              </h3>
              <div className="text-slate-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {currentSlide.script}
              </div>
            </div>
          </div>

          <div className="bg-slate-100 p-2 sm:p-4 flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={activeSection === 0 && activeSlide === 0}
              className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Sebelumnya</span>
            </button>

            <div className="text-center">
              <div className="text-xs sm:text-sm text-slate-600">
                Slide {activeSection * 3 + activeSlide + 1} / 15
              </div>
            </div>

            <button
              onClick={nextSlide}
              disabled={
                activeSection === sections.length - 1 &&
                activeSlide === totalSlides - 1
              }
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <span className="hidden sm:inline">Selanjutnya</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-6 bg-slate-800 text-slate-200 rounded-lg p-6">
          <h3 className="font-semibold mb-3 text-green-300">
            ✅ VERSI COMPACT - 15 SLIDE
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Setiap presenter dapat 3 slide (adil & merata)</li>
            <li>• Konten sudah digabung yang related, gak overload</li>
            <li>• Estimasi ~5 menit per orang (total 25-30 menit)</li>
            <li>• Sisakan banyak waktu untuk Q&A dan diskusi</li>
            <li>• Efisien, to-the-point, tapi tetep substansial</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresentationCompact;
