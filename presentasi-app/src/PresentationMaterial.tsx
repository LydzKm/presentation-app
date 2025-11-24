import { useState } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const PresentationMaterial = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const sections = [
    {
      presenter: "KAMU",
      duration: "7 menit",
      color: "bg-purple-600",
      slides: [
        {
          title: "PEMBUKA",
          points: [
            "Salam dan perkenalan tim",
            "Hook: 'Tahukah kalian bahwa setiap hari kita menggunakan setidaknya 2 dari 3 jenis jaringan ini?'",
            "Overview topik: Internet, Intranet, Extranet",
            "Roadmap presentasi"
          ],
          imageDesc: "Gambar: Diagram sederhana 3 lingkaran yang saling terhubung dengan label Internet, Intranet, Extranet",
          script: `Assalamualaikum warahmatullahi wabarakatuh. Selamat pagi Pak/Bu dan teman-teman semua.

Oke, jadi hari ini kelompok kita mau ngomongin soal Internet, Intranet, dan Extranet.

Sebelum mulai, saya mau tanya dulu nih: kalian sadar gak kalau setiap hari kita tuh sebenernya pakai minimal 2 dari 3 jenis jaringan ini? Misalnya, pagi-pagi buka Instagram—itu Internet. Terus kalian akses BOC buat ngumpulin tugas atau absen, atau buka SIPT buat liat KRS sama nilai—itu Intranet. Nah, kalau misalnya driver Gojek atau Grab akses sistem order buat ngambil pesanan—itu namanya Extranet.

Jadi basically, hari ini kita bakal ngebahas ketiga jenis jaringan ini secara detail—bedanya apa, gimana cara pakainya, plus untung ruginya.

Presentasinya kita bagi jadi 5 bagian ya. Dimulai dari [nama anggota 1] yang bakal jelasin soal Internet, terus [nama anggota 2] bahas Intranet, [nama anggota 3] bandingin ketiganya, [nama anggota 4] analisis keuntungan sama tantangannya, dan saya bakal fokus ke Extranet plus nutup presentasi kita.

Oke, langsung aja ya. Tapi sebelum yang lain jelasin, saya mau bahas dulu soal Extranet—yang ini paling jarang didengar tapi sebenernya penting banget.`
        },
        {
          title: "EXTRANET - DEFINISI",
          points: [
            "Definisi: Jaringan privat yang menggunakan teknologi Internet untuk membagikan sebagian informasi bisnis secara aman kepada pihak eksternal",
            "Konsep: 'Intranet + Akses Terkontrol untuk Pihak Luar'",
            "Pihak eksternal: supplier, partner bisnis, driver ojol, seller marketplace, pelanggan terpilih",
            "Keamanan: VPN, firewall, autentikasi berlapis"
          ],
          imageDesc: "Diagram: Lingkaran Intranet perusahaan dengan panah keluar menuju kotak-kotak kecil berlabel 'Supplier', 'Partner', 'Customer' melalui simbol gembok/VPN",
          script: `Nah, sekarang kita masuk ke yang namanya Extranet.

Jadi, apa sih Extranet itu? Gampangnya gini: Extranet tuh jaringan private yang pakai teknologi Internet buat share sebagian info bisnis secara aman ke pihak luar yang dipercaya.

Coba bayangin kayak gini deh. Kalau Intranet itu rumah kalian yang cuma keluarga bisa masuk, nah Extranet itu kayak kalian kasih kunci kamar tamu ke temen deket atau tukang servis yang kalian percaya. Mereka bisa masuk ke area tertentu aja, tapi gak semua ruangan bisa diakses kan?

Yang dimaksud pihak luar tuh bisa siapa aja—supplier yang perlu cek stok barang, partner bisnis, driver ojol kayak Gojek atau Grab yang akses sistem order, seller di marketplace kayak Shopee atau Tokopedia yang manage tokonya, atau bahkan customer VIP tertentu yang butuh akses khusus.

Nah yang paling critical dari Extranet ini adalah soal keamanannya. Soalnya kita ngasih akses ke orang luar kan, jadi harus extra hati-hati. Makanya perlu ada sistem keamanan berlapis—ada VPN buat koneksi yang dienkripsi, firewall buat filter siapa yang bisa masuk, terus autentikasi berlapis kayak username-password plus kode OTP atau sidik jari.`
        },
        {
          title: "EXTRANET - KARAKTERISTIK KUNCI",
          points: [
            "Akses terbatas: hanya area/data tertentu",
            "Berbasis izin (permission-based): setiap user punya hak akses berbeda",
            "Menggunakan infrastruktur Internet: tapi dengan enkripsi",
            "Kolaborasi B2B (Business-to-Business): fokus utamanya"
          ],
          imageDesc: "Infografis: 4 ikon dengan label - gembok (akses terbatas), user dengan ceklis (permission), globe dengan perisai (Internet aman), handshake (kolaborasi B2B)",
          script: `Oke, sekarang kita liat karakteristik utama dari Extranet yang bikin dia beda dari yang lain.

Pertama, akses terbatas. Jadi gak kayak Internet yang bebas diakses siapa aja, atau Intranet yang khusus internal, Extranet ini cuma ngasih akses ke area atau data tertentu doang. Contohnya nih, supplier cuma bisa liat sistem inventory, gak bisa sampe ke data keuangan perusahaan.

Kedua, permission-based. Artinya setiap user yang konek ke Extranet punya hak akses yang beda-beda. Mungkin Supplier A bisa liat dan edit data, tapi Supplier B cuma bisa liat aja. Semua ini diatur ketat lewat sistem role dan permission.

Ketiga, walaupun dia pakai infrastruktur Internet yang sifatnya publik, tapi semua komunikasinya harus dienkripsi. Jadi data yang lewat Internet udah di-scramble dulu biar aman dari penyadapan.

Keempat, fokus utamanya tuh kolaborasi B2B atau Business-to-Business. Ini beda lho sama Internet yang biasanya B2C atau Intranet yang internal doang. Extranet itu khusus dirancang supaya dua atau lebih perusahaan bisa kerja bareng dengan efisien tanpa harus ketemu langsung atau kirim-kirim dokumen manual bolak-balik.`
        },
        {
          title: "EXTRANET - PENERAPAN REAL-WORLD",
          points: [
            "Supply Chain Management: Supplier akses inventory real-time (contoh: pabrik otomotif dengan ratusan supplier)",
            "E-commerce: Seller Shopee/Tokopedia akses sistem dashboard toko dan order management",
            "Transportation: Driver Gojek/Grab akses sistem order dan tracking pengiriman",
            "Healthcare: Rumah sakit berbagi rekam medis dengan klinik partner",
            "Perbankan: Bank berbagi sistem dengan merchant untuk payment gateway"
          ],
          imageDesc: "Gambar: Split screen 5 skenario - pabrik dengan truk supplier, dashboard seller marketplace, driver ojol dengan HP, rumah sakit dengan simbol data sharing, mesin EDC di toko",
          script: `Sekarang kita liat contoh nyata di lapangan ya, biar lebih kebayang.

Pertama di Supply Chain Management. Ambil contoh pabrik otomotif kayak Toyota atau Honda. Mereka kan punya ratusan supplier komponen—dari ban, mesin, elektronik, sampai baut kecil sekalipun. Nah dengan Extranet, semua supplier ini bisa akses sistem inventory real-time. Jadi kalau misalnya stok komponen tertentu mulai menipis, supplier langsung tau dan bisa produksi tanpa harus nunggu telpon atau email dari pabriknya. Jadinya supply chain-nya lebih cepet.

Kedua di E-commerce. Kalian pasti sering belanja online kan? Nah, seller di Shopee atau Tokopedia itu sebenernya pakai Extranet loh. Mereka login ke dashboard seller yang disediain platform, bisa liat order masuk real-time, update stok produk, atur promo, sampe tracking pengiriman. Platform e-commerce share sistem ke jutaan seller, tapi tiap seller cuma bisa akses data toko mereka sendiri.

Ketiga di Transportation. Contoh yang paling sering kalian pakai: Gojek atau Grab. Driver ojol itu akses sistem Extranet buat terima orderan. Mereka bisa liat order masuk, pilih mau ambil atau nggak, tracking lokasi customer, sampe update status pengiriman. Sistem Gojek/Grab share akses ke ribuan driver, tapi setiap driver cuma liat order dan data mereka masing-masing.

Keempat di dunia Healthcare. Bayangin rumah sakit besar yang punya kerjasama sama beberapa klinik di daerah. Dengan Extranet, rekam medis pasien bisa di-share secara aman antar fasilitas kesehatan. Jadi kalau ada pasien berobat di klinik A terus dirujuk ke rumah sakit pusat, dokternya langsung bisa buka riwayat medis lengkap tanpa pasien harus bawa berkas fisik kemana-mana.

Kelima di industri Perbankan. Kalian pasti pernah belanja pake kartu debit atau credit card kan? Nah mesin EDC di kasir toko itu konek ke sistem bank lewat Extranet. Bank share sistem payment gateway ke ribuan merchant, tapi aksesnya super terbatas—merchant cuma bisa proses transaksi doang, gak bisa liat saldo nasabah lain.`
        },
        {
          title: "EXTRANET - STUDI KASUS",
          points: [
            "Kasus: Shopee dengan Jutaan Seller Partners",
            "Masalah: Seller sulit manage toko, tracking order manual, update stok ribet",
            "Solusi Extranet: Seller Center Dashboard dengan akses real-time ke order management, inventory, analytics, shipping integration",
            "Hasil: Seller bisa manage toko 24/7 dari mana aja, transaksi lebih cepat, customer satisfaction naik"
          ],
          imageDesc: "Flowchart: Sebelum (manual chaos dengan banyak chat/telpon) vs Sesudah (dashboard Seller Center terstruktur) dengan ikon Shopee, seller, dan sistem dashboard",
          script: `Oke, sekarang biar lebih konkret lagi, saya kasih contoh kasus nyata yang pasti kalian familiar.

Jadi ada Shopee yang punya jutaan seller partners di seluruh Indonesia. Dulu tuh, sebelum ada sistem Extranet yang proper, seller kesulitan banget manage toko online mereka. Harus manual tracking order lewat chat atau telpon, update stok produk ribet, belum lagi kalau mau liat analytics penjualan—datanya berantakan.

Nah terus Shopee bikin solusi Extranet berupa Seller Center Dashboard. Di dashboard ini, seller bisa login pake akun masing-masing, langsung liat semua order masuk real-time, update stok produk dengan mudah, setting promo atau voucher, liat analytics lengkap tentang performa toko mereka, bahkan integrasi langsung dengan jasa pengiriman kayak JNE, JNT, atau SiCepat.

Hasilnya gimana? Seller bisa manage toko 24/7 dari mana aja—mau dari rumah, kafe, atau bahkan sambil traveling. Proses transaksi jadi jauh lebih cepet karena semua otomatis. Customer satisfaction naik karena seller bisa respond order dengan lebih cepat dan akurat. Dan yang paling penting, Shopee bisa onboard jutaan seller tanpa harus punya customer service yang handle satu-satu—sistemnya udah self-service.

Ini contoh sempurna gimana Extranet bisa scale kolaborasi bisnis antara platform dengan jutaan partner eksternal secara efisien. Bayangin kalau gak ada sistem kayak gini, pasti chaos banget kan?`
        },
        {
          title: "PENUTUP",
          points: [
            "Recap singkat: Internet (publik), Intranet (internal), Extranet (kolaborasi eksternal terkontrol)",
            "Key takeaway: Pilih jenis jaringan sesuai kebutuhan dan tingkat keamanan yang diperlukan",
            "Terima kasih",
            "Sesi Q&A dibuka"
          ],
          imageDesc: "Gambar: Diagram Venn 3 lingkaran Internet-Intranet-Extranet dengan summary poin di masing-masing area, desain clean dan colorful",
          script: `Oke teman-teman, kita udah sampai di akhir presentasi nih.

Coba kita recap bentar ya. Jadi hari ini kita udah bahas tiga jenis jaringan yang punya karakteristik dan tujuan beda-beda. Internet itu jaringan publik yang bisa diakses semua orang. Intranet itu jaringan internal khusus buat orang dalam organisasi. Extranet itu jembatan antara organisasi dengan pihak luar yang dipercaya—kombinasi antara keamanan Intranet dengan fleksibilitas kolaborasi.

Yang perlu diinget adalah gak ada satu jenis jaringan yang "paling bagus" buat semua situasi. Semuanya tergantung kebutuhan bisnis dan level keamanan yang diperlukan. Mau share info ke publik luas? Pakai Internet. Mau jaga data internal tetap aman? Pakai Intranet. Mau kolaborasi sama partner bisnis? Pakai Extranet.

Atas nama kelompok, kami ucapkan terima kasih banyak ke Bapak/Ibu Dosen dan teman-teman yang udah dengerin presentasi kita dengan baik.

Sekarang kita buka sesi tanya jawab ya. Silakan kalau ada yang mau ditanyain atau didiskusiin lebih lanjut. Terima kasih.

Wassalamualaikum warahmatullahi wabarakatuh.`
        }
      ]
    },
    {
      presenter: "ANGGOTA 1",
      duration: "7 menit",
      color: "bg-blue-600",
      slides: [
        {
          title: "INTERNET - DEFINISI",
          points: [
            "Definisi: Jaringan global yang menghubungkan jutaan komputer di seluruh dunia",
            "Internet = Interconnected Networks",
            "Protokol standar: TCP/IP",
            "Sifat: Publik, terbuka, terdesentralisasi"
          ],
          imageDesc: "Gambar: Globe/bumi dengan garis-garis koneksi menghubungkan berbagai benua, simbol wifi/signal di berbagai titik",
          script: `Terima kasih. Sekarang saya bakal jelasin tentang Internet sebagai fondasi dari semua jenis jaringan yang kita bahas hari ini.

Jadi Internet itu basically jaringan super gede yang nyambungin miliaran komputer dan device di seluruh dunia. Kata "Internet" sendiri sebenernya singkatan dari Interconnected Networks—jaringan-jaringan yang saling terhubung.

Coba bayangin Internet itu kayak sistem jalan raya global. Ada jalan tol besar, jalan provinsi, sampai gang kecil—semuanya nyambung dan bikin kita bisa pergi kemana aja. Bedanya, di Internet yang jalan bukan mobil, tapi data kita.

Nah yang bikin Internet bisa berfungsi itu ada protokol standar namanya TCP/IP—Transmission Control Protocol sama Internet Protocol. Ini kayak "bahasa universal" yang bikin semua device bisa komunikasi satu sama lain, gak peduli merknya apa atau sistem operasinya apa.

Karakteristik paling dasar dari Internet adalah sifatnya yang publik, terbuka buat siapa aja, dan terdesentralisasi—artinya gak ada satu pihak yang "ngontrol" seluruh Internet. Ini beda banget sama Intranet dan Extranet yang bakal kita bahas selanjutnya.`
        },
        {
          title: "INTERNET - KARAKTERISTIK UTAMA",
          points: [
            "Jangkauan: Global, tidak terbatas geografis",
            "Akses: Terbuka untuk publik (dengan koneksi)",
            "Skalabilitas: Bisa terus bertambah tanpa batas",
            "Arsitektur: Client-Server dan Peer-to-Peer",
            "Konten: Tidak terkontrol secara terpusat"
          ],
          imageDesc: "Infografis: 5 ikon - globe (global), pintu terbuka (akses publik), panah naik (skalabilitas), server-client diagram, konten beragam",
          script: `Oke, sekarang kita liat karakteristik utama Internet yang bikin dia beda dari yang lain.

Pertama, jangkauannya global dan gak ada batas geografis. Kalian bisa akses website dari Amerika sementara duduk santai di Jakarta. Gak ada batasan fisik selama ada koneksi.

Kedua, aksesnya terbuka buat publik. Siapa aja yang punya device dan koneksi Internet—entah lewat WiFi, data seluler, atau kabel—bisa akses Internet. Gak perlu izin khusus atau jadi anggota organisasi tertentu.

Ketiga, skalabilitasnya tinggi banget. Internet bisa terus nambah besar tanpa batas—tiap hari ada jutaan website baru, device baru yang konek, dan user baru yang gabung. Sistemnya emang dirancang buat handle pertumbuhan kayak gini.

Keempat, dari segi arsitektur, Internet support dua model: Client-Server, dimana client minta data dari server—kayak waktu kita buka website. Terus ada Peer-to-Peer, dimana device langsung konek satu sama lain—kayak waktu kita torrent atau video call.

Kelima, kontennya gak dikontrol secara terpusat. Gak ada "pemilik Internet" yang bisa tentuin konten apa yang boleh atau nggak. Ini beda sama Intranet yang bisa dikontrol penuh sama organisasi.`
        },
        {
          title: "INTERNET - ARSITEKTUR DASAR",
          points: [
            "Tier 1: Backbone providers (ISP internasional besar)",
            "Tier 2: Regional ISP",
            "Tier 3: Local ISP (Indihome, First Media, dll)",
            "Last mile: Koneksi ke end user",
            "Perangkat: Router, Switch, Server, DNS, Firewall"
          ],
          imageDesc: "Diagram piramida terbalik: Level Tier 1 di atas (ISP besar), Tier 2 di tengah, Tier 3 di bawah, lalu end users di paling bawah dengan ikon laptop/HP",
          script: `Sekarang kita liat gimana arsitektur Internet secara simpel.

Internet itu berlapis kayak piramida. Di tingkat paling atas ada yang namanya Tier 1 providers—ini ISP internasional besar kayak Level 3, Cogent, atau Telia yang punya infrastruktur backbone global. Mereka yang kelola kabel bawah laut antar benua dan jaringan fiber optik raksasa.

Di bawahnya ada Tier 2, yaitu Regional ISP yang beli bandwidth dari Tier 1 dan jual ke area regional—misalnya ISP tingkat negara atau provinsi.

Terus ada Tier 3, ini Local ISP yang kita kenal sehari-hari—kayak Indihome, First Media, Biznet, MyRepublic. Mereka beli dari Tier 2 dan jual langsung ke kita sebagai konsumen.

Terakhir ada yang namanya last mile—ini koneksi dari ISP lokal sampe ke rumah atau kantor kita, bisa lewat kabel fiber, kabel tembaga, atau wireless.

Di tiap layer ini, ada berbagai perangkat penting kayak Router buat route traffic data, Switch buat connect device dalam network, Server buat host website dan aplikasi, DNS buat translate domain name jadi IP address, dan Firewall buat keamanan.

Semua layer ini kerja bareng supaya data bisa ngalir dari ujung dunia ke ujung dunia lainnya dalam hitungan milidetik.`
        },
        {
          title: "INTERNET - PENERAPAN",
          points: [
            "World Wide Web (WWW): Website, e-commerce, blog",
            "Email & Messaging: Gmail, WhatsApp, Telegram",
            "Streaming: YouTube, Netflix, Spotify",
            "Cloud Computing: Google Drive, Dropbox, AWS",
            "IoT: Smart home, wearables, connected vehicles",
            "Social Media: Instagram, Twitter, TikTok"
          ],
          imageDesc: "Grid 6 kotak dengan ikon masing-masing aplikasi: browser (WWW), email, play button (streaming), cloud, IoT devices, social media icons",
          script: `Penerapan Internet dalam kehidupan kita tuh luas banget. Yuk kita liat beberapa contoh utama.

Pertama, World Wide Web atau WWW—ini yang kita sebut "browsing Internet". Semua website yang kita kunjungin, dari e-commerce kayak Tokopedia dan Shopee, sampe blog pribadi, semuanya bagian dari WWW.

Kedua, Email dan Messaging. Gmail, Outlook, Yahoo Mail buat email formal. WhatsApp, Telegram, Line buat instant messaging. Semua ini bergantung sama Internet buat kirim terima pesan secara real-time.

Ketiga, Streaming multimedia. YouTube buat video, Netflix buat film dan series, Spotify buat musik. Dulu kita harus download dulu, sekarang bisa langsung streaming karena bandwidth Internet makin gede.

Keempat, Cloud Computing. Sekarang kita gak perlu simpen semua file di laptop atau HP. Bisa upload ke Google Drive, Dropbox, atau OneDrive. Bahkan server perusahaan besar sekarang banyak yang pakai cloud service kayak AWS atau Google Cloud.

Kelima, Internet of Things atau IoT. Ini perangkat pintar yang konek ke Internet—smart TV, smart AC, smartwatch, bahkan mobil modern sekarang banyak yang connected. Semua ini butuh Internet buat fungsi optimal.

Keenam, Social Media. Instagram, Twitter, TikTok, Facebook—platform ini gak bakal ada tanpa Internet. Mereka hubungin miliaran orang di seluruh dunia buat share konten dan komunikasi.

Intinya, Internet udah jadi infrastruktur dasar kehidupan digital kita sehari-hari.`
        }
      ]
    },
    {
      presenter: "ANGGOTA 2",
      duration: "7 menit",
      color: "bg-green-600",
      slides: [
        {
          title: "INTRANET - DEFINISI",
          points: [
            "Definisi: Jaringan privat dalam organisasi yang menggunakan teknologi Internet",
            "Scope: Terbatas pada satu organisasi/perusahaan",
            "Akses: Hanya karyawan/anggota internal",
            "Fungsi: Internal communication, collaboration, resource sharing"
          ],
          imageDesc: "Diagram: Gedung kantor dengan jaringan internal yang menghubungkan berbagai departemen (HR, IT, Finance, Marketing) dengan simbol gembok di luar menandakan tertutup dari publik",
          script: `Terima kasih. Sekarang kita beralih ke Intranet, yang sifatnya beda banget dari Internet yang baru aja dibahas.

Jadi Intranet itu jaringan private di dalam satu organisasi atau perusahaan yang pakai teknologi dan protokol sama kayak Internet, tapi sifatnya tertutup buat umum.

Analoginya gini deh: kalau Internet itu kayak jalan raya umum yang bisa dilewatin siapa aja, Intranet itu kayak jalan di dalam kompleks perumahan atau pabrik yang cuma bisa diakses sama penghuni atau karyawan yang punya izin masuk.

Scope atau cakupan Intranet sangat terbatas—biasanya cuma dalam satu organisasi, bisa satu kantor, satu kampus, atau beberapa cabang dari satu perusahaan yang sama.

Akses ke Intranet ketat banget—cuma karyawan atau anggota internal yang udah dikasih credential kayak username dan password yang bisa masuk. Bahkan di dalam organisasi pun, akses bisa dibagi-bagi berdasarkan departemen atau level jabatan.

Fungsi utama Intranet adalah buat internal communication kayak company announcement, collaboration antar tim atau departemen, dan resource sharing kayak file dokumen, template, atau database internal.`
        },
        {
          title: "INTRANET - KARAKTERISTIK",
          points: [
            "Private & Secure: Dipisahkan dari Internet publik dengan firewall",
            "Centralized control: Dikelola IT department organisasi",
            "Single Sign-On (SSO): Satu akun untuk akses semua layanan internal",
            "Custom applications: Disesuaikan dengan kebutuhan organisasi",
            "Limited users: Hanya anggota organisasi"
          ],
          imageDesc: "Infografis: 5 karakteristik dengan ikon - firewall/shield (private), admin/control panel (centralized), satu key untuk banyak pintu (SSO), puzzle pieces (custom), group kecil user (limited)",
          script: `Intranet punya beberapa karakteristik yang beda banget dari Internet.

Pertama, sifatnya private dan secure. Intranet dipisahin dari Internet publik pakai firewall dan berbagai security measures lainnya. Data yang ada di Intranet gak bisa diakses dari luar organisasi tanpa izin khusus.

Kedua, kontrolnya terpusat. Beda sama Internet yang terdesentralisasi, Intranet sepenuhnya dikelola sama IT department dari organisasi tersebut. Mereka yang tentuin siapa bisa akses apa, kapan maintenance dilakukan, dan gimana sistemnya dikonfigurasi.

Ketiga, biasanya pakai Single Sign-On atau SSO. Artinya, karyawan cukup login sekali dengan satu akun, terus bisa akses semua layanan internal—dari email, HR system, project management tool, sampe internal wiki. Gak perlu login berkali-kali dengan akun beda-beda.

Keempat, aplikasi yang ada di Intranet biasanya custom disesuaikan dengan kebutuhan spesifik organisasi. Misalnya perusahaan manufaktur punya sistem monitoring produksi, perusahaan retail punya sistem inventory khusus, dan sebagainya.

Kelima, jumlah user-nya terbatas sesuai jumlah anggota organisasi. Kalau Internet punya miliaran user, Intranet mungkin cuma punya puluhan, ratusan, atau ribuan user tergantung besar kecilnya organisasi.`
        },
        {
          title: "INTRANET - ARSITEKTUR",
          points: [
            "Core Layer: Server pusat (database, file server, application server)",
            "Distribution Layer: Switch dan router antar departemen",
            "Access Layer: Workstation karyawan",
            "Koneksi: LAN (dalam gedung) atau WAN (antar cabang)",
            "Komponen: Active Directory, DNS internal, DHCP"
          ],
          imageDesc: "Diagram 3 layer: Core di tengah (server racks), Distribution (switches), Access layer (komputer karyawan), dengan label LAN/WAN",
          script: `Mari kita liat arsitektur Intranet secara simpel.

Intranet biasanya punya tiga layer utama. Di Core Layer atau pusat, ada server-server utama—database server yang nyimpen semua data perusahaan, file server buat dokumen bersama, application server yang jalanin sistem-sistem internal, dan web server buat portal intranet.

Di Distribution Layer, ada switch dan router yang distribusiin koneksi dari core ke berbagai departemen atau lantai. Layer ini fungsinya jadi jembatan antara server pusat dengan workstation karyawan.

Di Access Layer, ada workstation atau komputer karyawan, laptop, dan perangkat lain yang akses Intranet sehari-hari.

Koneksinya bisa pakai LAN atau Local Area Network kalau masih dalam satu gedung—biasanya pakai kabel Ethernet atau WiFi internal. Kalau perusahaan punya banyak cabang di kota berbeda, mereka pakai WAN atau Wide Area Network buat hubungkan semua cabang ke satu Intranet yang sama.

Komponen teknisnya antara lain Active Directory buat manage user accounts dan permissions, DNS internal buat resolve domain name internal kayak hr.company.local, dan DHCP buat assign IP address otomatis ke perangkat yang konek ke network.

Semua komponen ini kerja bareng bikin ekosistem Intranet yang aman dan efisien buat operasional internal organisasi.`
        },
        {
          title: "INTRANET - PENERAPAN",
          points: [
            "Employee Portal: Akses payslip, cuti, attendance",
            "Document Management: Shared drive, SOP, template",
            "Internal Wiki/Knowledge Base: Company policies, how-to guides",
            "Project Management: Task tracking, collaboration tools",
            "Internal News: Company updates, announcements",
            "Training Platform: E-learning untuk karyawan"
          ],
          imageDesc: "Screenshot mockup portal Intranet dengan menu: Dashboard, Documents, Wiki, Projects, News, Training - desain corporate/professional",
          script: `Sekarang kita liat penerapan Intranet dalam organisasi.

Pertama, Employee Portal atau portal karyawan. Di sini karyawan bisa akses informasi personal kayak slip gaji, saldo cuti, rekap absensi, bahkan submit reimbursement atau pengajuan cuti. Semuanya self-service tanpa harus ke bagian HR.

Kedua, Document Management atau pengelolaan dokumen bersama. Intranet punya shared drive dimana semua SOP, template dokumen, form-form standar, dan file penting perusahaan disimpen secara terpusat. Jadi semua orang akses versi yang sama, gak ada lagi "eh file versi mana nih yang terbaru?"

Ketiga, Internal Wiki atau Knowledge Base. Ini kayak Wikipedia versi internal perusahaan. Isinya company policies, prosedur kerja, how-to guides, FAQ, dan dokumentasi sistem internal. Berguna banget buat onboarding karyawan baru atau referensi cepat saat butuh info.

Keempat, Project Management tools. Banyak perusahaan yang integrasiin tools kayak task tracker, kanban board, atau collaboration platform ke dalam Intranet mereka supaya tim bisa koordinasi project dengan lebih efisien.

Kelima, Internal News atau company announcements. Kalau ada update kebijakan, pencapaian perusahaan, event internal, atau pengumuman penting, semuanya dipublikasi di Intranet supaya semua karyawan bisa akses info yang sama.

Keenam, Training Platform atau e-learning. Banyak perusahaan sekarang punya learning management system di Intranet buat training karyawan—dari onboarding training, technical training, sampe leadership development. Karyawan bisa belajar sesuai pace mereka masing-masing.

Dengan semua penerapan ini, Intranet jadi hub central buat seluruh aktivitas dan informasi internal organisasi.`
        }
      ]
    },
    {
      presenter: "ANGGOTA 3",
      duration: "7 menit",
      color: "bg-orange-600",
      slides: [
        {
          title: "PERBANDINGAN - OVERVIEW",
          points: [
            "Tiga jenis jaringan, tiga tujuan berbeda",
            "Perbedaan utama: Akses, Keamanan, Scope, Pengguna",
            "Tidak saling menggantikan - melainkan melengkapi"
          ],
          imageDesc: "Diagram Venn 3 lingkaran: Internet (paling besar, transparan), Intranet (lingkaran solid di dalam), Extranet (overlap antara Intranet dan Internet)",
          script: "Terima kasih. Sekarang kita bakal bandingin ketiga jenis jaringan yang udah dibahas tadi secara lebih mendalam.\n\nJadi kayak yang udah kita liat, Internet, Intranet, dan Extranet itu tiga jenis jaringan dengan tujuan yang beda banget. Internet buat publik, Intranet buat internal organisasi, dan Extranet buat kolaborasi sama pihak luar yang dipercaya.\n\nPerbedaan utama mereka ada di empat aspek: siapa yang bisa akses, seberapa ketat keamanannya, seberapa luas cakupannya, dan siapa penggunanya.\n\nYang penting dipahami adalah ketiga jenis jaringan ini gak saling gantiin ya. Mereka justru saling melengkapi. Organisasi modern biasanya pakai ketiganya sekaligus buat kebutuhan yang beda-beda."
        },
        {
          title: "TABEL PERBANDINGAN TEKNIS",
          points: [
            "INTERNET: Akses Publik | Keamanan Minimal | Scope Global | User Unlimited | Kontrol Terdesentralisasi",
            "INTRANET: Akses Internal Only | Keamanan Tinggi | Scope Organisasi | User Terbatas (Karyawan) | Kontrol Terpusat",
            "EXTRANET: Akses Selektif (Partner) | Keamanan Sangat Tinggi | Scope Multi-Organisasi | User Partner Tertentu | Kontrol Berbagi"
          ],
          imageDesc: "Tabel komparasi 5 kolom (Aspek, Internet, Intranet, Extranet) dengan rows: Akses, Keamanan, Scope, User, Kontrol - gunakan warna berbeda per kolom",
          script: "Mari kita liat perbandingan teknis yang lebih detail dalam bentuk tabel ya.\n\nDari segi Akses: Internet sifatnya publik dan terbuka buat siapa aja. Intranet cuma bisa diakses orang internal organisasi. Sedangkan Extranet aksesnya selektif—cuma partner atau pihak luar tertentu yang udah dikasih izin.\n\nDari segi Keamanan: Internet punya tingkat keamanan minimal karena sifatnya terbuka. Intranet udah punya keamanan tinggi dengan firewall dan authentication. Sementara Extranet punya keamanan paling tinggi karena harus protect data saat di-share sama pihak luar—pakai VPN, enkripsi berlapis, dan monitoring ketat.\n\nDari segi Scope atau cakupan: Internet itu global, gak ada batas geografis. Intranet terbatas pada satu organisasi—bisa satu kantor atau beberapa cabang. Extranet mencakup multi-organisasi yang kerja bareng.\n\nDari segi User: Internet punya unlimited users—miliaran orang. Intranet user-nya terbatas sesuai jumlah karyawan organisasi. Extranet user-nya juga terbatas tapi dari berbagai organisasi yang berbeda.\n\nDari segi Kontrol: Internet terdesentralisasi, gak ada satu pihak yang ngontrol semuanya. Intranet terpusat, dikelola sepenuhnya sama IT department organisasi. Extranet kontrolnya dibagi antara organisasi yang terlibat dalam kolaborasi."
        },
        {
          title: "PERBEDAAN INFRASTRUKTUR",
          points: [
            "Internet: Infrastruktur publik (ISP, backbone global)",
            "Intranet: Infrastruktur privat (server internal, private network)",
            "Extranet: Hybrid (pakai Internet tapi dengan VPN tunnel)",
            "Teknologi: Semua pakai TCP/IP, tapi implementasi keamanan berbeda"
          ],
          imageDesc: "Diagram: 3 arsitektur network side-by-side menunjukkan perbedaan infrastruktur - Internet dengan cloud publik, Intranet dengan server di kantor, Extranet dengan VPN tunnel",
          script: "Sekarang kita bahas perbedaan dari sisi infrastruktur.\n\nInternet pakai infrastruktur publik. Koneksi kita lewat ISP komersial, data ngalir melalui backbone global yang dimiliki berbagai provider internasional. Kita gak punya kontrol atas jalur yang dilalui data kita.\n\nIntranet pakai infrastruktur private. Server-server ada di data center internal perusahaan atau di private cloud. Network-nya juga private—bisa pakai kabel Ethernet dedicated atau WiFi internal yang dienkripsi. Semua ada dalam kendali organisasi.\n\nExtranet sifatnya hybrid. Secara fisik, koneksinya pakai infrastruktur Internet publik supaya hemat biaya—gak perlu bangun jalur dedicated ke setiap partner. Tapi dari segi logical, koneksinya dibuat secure dengan VPN tunnel. Jadi data yang lewat Internet itu udah dienkripsi end-to-end, seolah-olah lewat jalur private.\n\nYang menarik, ketiganya sebenernya pakai teknologi dasar yang sama yaitu TCP/IP. Bedanya ada di layer keamanan dan access control yang diterapkan. Internet minimal security, Intranet punya firewall dan authentication, Extranet punya semua itu plus enkripsi dan authorization berlapis."
        },
        {
          title: "KAPAN PAKAI YANG MANA?",
          points: [
            "Pakai INTERNET jika: Info untuk publik, marketing, customer service, e-commerce",
            "Pakai INTRANET jika: Data sensitif internal, kolaborasi karyawan, operational system",
            "Pakai EXTRANET jika: Kolaborasi B2B, supply chain, partner portal, shared resources dengan pihak luar (contoh: seller marketplace, driver ojol)"
          ],
          imageDesc: "Decision tree / flowchart: Mulai dari 'Siapa yang perlu akses?' lalu branch ke Public (Internet), Internal (Intranet), Partners (Extranet) dengan contoh use case masing-masing",
          script: "Pertanyaan praktis yang sering muncul: kapan kita harus pakai yang mana?\n\nPakai Internet kalau tujuannya nyebarin informasi ke publik luas. Contohnya: website company profile buat marketing, landing page produk, platform e-commerce buat jual produk ke konsumen, atau customer service portal dimana customer bisa submit ticket dan track statusnya. Intinya, kalau target audience-nya publik atau konsumen umum, pakai Internet.\n\nPakai Intranet kalau perlu jaga data sensitif internal atau facilitate kolaborasi antar karyawan. Contohnya: sistem HR dengan data gaji dan personal info karyawan, operational system kayak inventory management atau production monitoring, internal knowledge base, atau project collaboration tools. Intinya, kalau datanya confidential dan cuma buat internal organisasi, pakai Intranet.\n\nPakai Extranet kalau perlu kolaborasi sama pihak luar tapi dengan kontrol akses yang ketat. Contohnya: supply chain management dengan supplier, sistem seller marketplace kayak Shopee atau Tokopedia, platform driver kayak Gojek atau Grab, atau sistem partner portal lainnya. Intinya, kalau ada kolaborasi lintas organisasi tapi data tetep perlu dijaga keamanannya, pakai Extranet.\n\nYang paling ideal, organisasi besar biasanya pakai ketiganya secara bersamaan buat kebutuhan yang beda-beda."
        }
      ]
    },
    {
      presenter: "ANGGOTA 4",
      duration: "7 menit",
      color: "bg-red-600",
      slides: [
        {
          title: "KEUNTUNGAN - INTERNET",
          points: [
            "Global reach: Jangkau audience worldwide",
            "Cost-effective: Infrastruktur sudah ada, tinggal pakai",
            "Scalability: Mudah scale up traffic dan user",
            "Information access: Akses unlimited ke knowledge global",
            "Innovation speed: Platform untuk inovasi dan startup"
          ],
          imageDesc: "Infografis: 5 keuntungan Internet dengan ikon - globe dengan panah keluar (reach), piggy bank (cost), grafik naik (scale), buku/library (info), rocket (innovation)",
          script: "Terima kasih. Sekarang kita bakal analisis keuntungan dan tantangan dari masing-masing jenis jaringan, dimulai dari Internet.\n\nKeuntungan pertama Internet adalah global reach atau jangkauan global. Dengan satu website, bisnis kecil di Indonesia bisa jual produk ke customer di Eropa atau Amerika. Gak ada batasan geografis.\n\nKedua, cost-effective banget. Infrastruktur Internet udah di-build dan di-maintain sama ISP dan backbone providers. Kita tinggal bayar koneksi bulanan yang relatif murah dibanding harus bangun network sendiri dari nol.\n\nKetiga, scalability-nya luar biasa. Kalau tiba-tiba traffic website kita naik 10x lipat, kita bisa scale up server dengan mudah—pakai cloud service kayak AWS atau Google Cloud yang bisa auto-scale. Gak perlu investasi hardware gede di awal.\n\nKeempat, akses ke informasi tanpa batas. Mau belajar programming? Ada ribuan tutorial gratis. Mau research topik apapun? Ada jurnal, artikel, video, podcast. Internet demokratisasi akses ke knowledge yang dulu cuma tersedia di perpustakaan atau institusi tertentu.\n\nKelima, mempercepat inovasi. Platform kayak GitHub, YouTube, atau Medium memungkinkan siapa aja share karya dan ide mereka. Startup bisa launch produk dengan cepet tanpa perlu infrastruktur fisik yang gede."
        },
        {
          title: "TANTANGAN - INTERNET",
          points: [
            "Security risks: Hacking, phishing, malware, DDoS",
            "Privacy concerns: Data tracking, profiling, surveillance",
            "Information overload: Terlalu banyak info, sulit filter mana yang valid",
            "Digital divide: Tidak semua punya akses Internet yang layak",
            "Content moderation: Hoax, hate speech, illegal content"
          ],
          imageDesc: "Infografis: 5 tantangan dengan ikon warning - shield dengan X (security), eye dengan garis coret (privacy), kepala pusing (overload), gap/jurang (divide), tanda seru (moderation)",
          script: "Tapi tentu aja, Internet juga punya tantangan yang cukup serius.\n\nPertama, security risks atau risiko keamanan. Karena terbuka buat publik, Internet jadi target empuk buat hacker. Serangan kayak phishing dimana orang ditipu buat kasih password, malware yang nginfeksi komputer, atau DDoS yang bikin website down, semuanya ancaman nyata di Internet.\n\nKedua, privacy concerns atau isu privasi. Di Internet, hampir semua aktivitas kita bisa di-track—website apa yang kita kunjungin, apa yang kita search, berapa lama kita baca artikel tertentu. Data ini dikumpulin buat profiling dan targeted ads. Bahkan ada surveillance dari pemerintah di beberapa negara.\n\nKetiga, information overload. Internet punya terlalu banyak informasi sampe kadang overwhelming. Susah bedain mana yang valid dan mana yang hoax. Algoritma social media juga bisa bikin echo chamber dimana kita cuma liat info yang confirm bias kita.\n\nKeempat, digital divide atau kesenjangan digital. Gak semua orang punya akses Internet yang layak. Di kota besar mungkin ada fiber optik 100 Mbps, tapi di daerah remote masih banyak yang cuma dapet sinyal 3G lemah atau bahkan gak ada sama sekali. Ini bikin inequality dalam akses informasi dan opportunity.\n\nKelima, tantangan content moderation. Platform Internet harus struggle antara free speech dan responsibility buat filter konten berbahaya kayak hoax, hate speech, atau konten ilegal. Gak ada solusi perfect buat balance ini."
        },
        {
          title: "KEUNTUNGAN - INTRANET",
          points: [
            "Enhanced security: Data terlindungi dalam network tertutup",
            "Controlled access: Granular permission management",
            "Centralized information: Single source of truth untuk organisasi",
            "Improved collaboration: Tools dan platform terpadu untuk tim",
            "Operational efficiency: Automasi proses internal, reduce manual work"
          ],
          imageDesc: "Infografis dengan ikon: shield check (security), key/lock (access), database dengan satu ikon (centralized), people connected (collaboration), gears (efficiency)",
          script: "Sekarang kita bahas keuntungan Intranet buat organisasi.\n\nPertama, enhanced security atau keamanan yang lebih baik. Karena Intranet isolated dari Internet publik dengan firewall, data organisasi jauh lebih aman dari ancaman eksternal. Hacker dari luar gak bisa langsung akses sistem internal.\n\nKedua, controlled access dengan permission management yang detail. IT bisa atur dengan detail siapa bisa akses apa. Misalnya, staff finance bisa akses sistem accounting tapi gak bisa akses sistem HR. Ini protect data sensitif dari akses yang gak perlu.\n\nKetiga, centralized information atau satu sumber informasi terpusat. Semua dokumen penting, SOP, policies ada di satu tempat. Gak ada lagi situasi dimana orang pakai dokumen versi lama karena gak tau ada update. Semua orang refer ke sumber yang sama.\n\nKeempat, improved collaboration. Dengan tools kayak shared drive, project management platform, atau internal chat, tim bisa collaborate dengan lebih efisien tanpa perlu email berkepanjangan atau meeting yang bisa dihindari.\n\nKelima, operational efficiency. Banyak proses manual yang bisa diotomasi lewat Intranet. Misalnya, approval workflow buat purchase request bisa dilakukan online dengan tracking real-time, gak perlu lagi bawa dokumen fisik dari meja ke meja buat tanda tangan."
        },
        {
          title: "TANTANGAN - INTRANET",
          points: [
            "High implementation cost: Infrastruktur, lisensi software, maintenance",
            "Requires IT expertise: Perlu tim IT dedicated untuk maintain",
            "Limited remote access: Susah diakses dari luar kantor (kecuali pakai VPN)",
            "Adoption resistance: Karyawan yang terbiasa cara lama resist perubahan",
            "Scalability cost: Tambah user atau fitur butuh investasi lebih"
          ],
          imageDesc: "Infografis tantangan dengan ikon: money/coins (cost), wrench/tools (expertise), location pin dengan X (remote), people dengan tanda tanya (adoption), tangga/ladder (scalability)",
          script: "Tapi Intranet juga punya tantangan yang perlu dipertimbangkan.\n\nPertama, high implementation cost. Bangun Intranet dari nol itu gak murah. Harus invest di server, network equipment, lisensi software, plus ongoing maintenance cost. Buat perusahaan kecil dengan budget terbatas, ini bisa jadi barrier yang. Gede.\n\nKedua, requires IT expertise. Intranet perlu tim IT yang capable buat setup, maintain, troubleshoot, dan update sistem secara berkala. Kalau organisasinya kecil dan gak punya IT team yang kuat, ini bisa jadi masalah.\n\nKetiga, limited remote access. Intranet traditionally designed buat akses dari dalam kantor. Kalau karyawan kerja dari rumah atau traveling, akses Intranet jadi ribet—harus pakai VPN dulu yang kadang lambat atau bermasalah. Di era hybrid working sekarang, ini bisa jadi friction point.\n\nKeempat, adoption resistance dari karyawan. Ada orang yang udah terbiasa dengan cara kerja lama—misalnya simpen file di laptop sendiri atau komunikasi via email—dan resist buat adopt sistem Intranet yang baru. Change management ini challenging.\n\nKelima, scalability cost. Kalau organisasi grow dan perlu tambah user atau fitur baru di Intranet, sering kali butuh upgrade infrastruktur atau beli lisensi tambahan. Cost-nya gak linear dengan benefit yang didapet."
        },
        {
          title: "KEUNTUNGAN & TANTANGAN - EXTRANET",
          points: [
            "KEUNTUNGAN: B2B collaboration efficient, Real-time data sharing, Reduce communication overhead, Extended ecosystem",
            "TANTANGAN: Complex security management, Trust issues antar organisasi, Integration complexity, Higher risk jika breach terjadi"
          ],
          imageDesc: "Split diagram: Sisi kiri keuntungan dengan ikon positif (handshake, speed, communication, network), sisi kanan tantangan dengan ikon warning (locks, question mark, puzzle, alert)",
          script: "Terakhir, kita bahas keuntungan dan tantangan Extranet sekaligus karena sifatnya yang unik.\n\nDari segi keuntungan: Pertama, B2B collaboration jadi jauh lebih efisien. Partner atau supplier gak perlu telepon atau email buat cek status—mereka bisa login dan liat sendiri real-time. Ini save banyak waktu buat kedua pihak.\n\nKedua, real-time data sharing. Misalnya di supply chain, kalau ada delay pengiriman, semua pihak yang terlibat langsung tau dan bisa adjust plan mereka. Gak ada lag informasi.\n\nKetiga, reduce communication overhead. Gak perlu banyak meeting atau exchange email panjang buat koordinasi hal-hal rutin. Sistemnya udah handle itu secara otomatis.\n\nKeempat, extended ecosystem. Organisasi gak bekerja sendiri tapi sebagai bagian dari network yang lebih besar. Ini buka opportunity buat inovasi dan growth bareng.\n\nTapi tantangannya juga gak main-main. Pertama, complex security management. Harus protect data saat di-share sama pihak luar yang gak sepenuhnya dalam kontrol kita. Ini butuh infrastructure security yang sophisticated.\n\nKedua, trust issues. Organisasi harus percaya bahwa partner gak akan abuse akses yang dikasih atau leak data sensitif. Building trust ini gak instant.\n\nKetiga, integration complexity. Sistem Extranet harus bisa integrate dengan sistem internal berbagai organisasi yang mungkin pakai teknologi beda-beda. Technical integration ini bisa jadi nightmare.\n\nKeempat, higher risk. Kalau terjadi security breach di Extranet, impactnya gak cuma ke satu organisasi tapi bisa affect semua partner yang connected. Risk-nya lebih besar dan consequence-nya lebih severe.\n\nJadi implementasi Extranet perlu pertimbangan matang antara benefit dan risk yang ada."
        }
      ]
    }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Internet, Intranet, dan Extranet
          </h1>
          <p className="text-purple-200">
            Desain dan Manajemen Jaringan Komputer - Pertemuan 5
          </p>
          <p className="text-purple-300 text-sm mt-1">
            Total Durasi: 35 menit presentasi + 25 menit Q&A
          </p>
        </div>

        {/* Section Navigation */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => goToSection(idx)}
              className={`p-3 rounded-lg transition-all ${ 
                activeSection === idx
                  ? section.color + " text-white shadow-lg scale-105"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <User size={16} />
                <span className="font-semibold text-sm">{section.presenter}</span>
              </div>
              <div className="text-xs opacity-80">{section.duration}</div>
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Slide Header */}
          <div className={`${currentSection.color} text-white p-6`}>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm opacity-90 mb-1">
                  {currentSection.presenter} - Slide {activeSlide + 1}/{totalSlides}
                </div>
                <h2 className="text-3xl font-bold">{currentSlide.title}</h2>
              </div>
              <div className="text-right text-sm opacity-90">
                Durasi: {currentSection.duration}
              </div>
            </div>
          </div>

          {/* Slide Content */}
          <div className="p-8">
            {/* Poin-poin Slide */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Poin Penting
              </h3>
              <ul className="space-y-3">
                {currentSlide.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span className="text-slate-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deskripsi Gambar */}
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg mb-8">
              <h3 className="text-sm font-semibold text-purple-900 mb-2">
                📸 Gambar yang Perlu Dicari:
              </h3>
              <p className="text-purple-800 text-sm italic">{currentSlide.imageDesc}</p>
            </div>

            {/* Script Narasi */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Script Narasi
              </h3>
              <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                {currentSlide.script}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-slate-100 p-4 flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={activeSection === 0 && activeSlide === 0}
              className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
              Sebelumnya
            </button>

            <div className="text-center">
              <div className="text-sm text-slate-600">
                Total Progress: {activeSection * totalSlides + activeSlide + 1} / 
                {sections.reduce((sum, s) => sum + s.slides.length, 0)}
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
              Selanjutnya
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-slate-800 text-slate-200 rounded-lg p-6">
          <h3 className="font-semibold mb-3 text-purple-300">📝 Cara Penggunaan:</h3>
          <ul className="space-y-2 text-sm">
            <li>• Klik tombol nama presenter di atas untuk langsung ke bagian masing-masing</li>
            <li>• Gunakan tombol navigasi untuk berpindah slide</li>
            <li>• <strong>Poin Penting</strong> adalah yang ditampilkan di slide presentasi</li>
            <li>• <strong>Script Narasi</strong> adalah yang disampaikan secara lisan ke audience</li>
            <li>• <strong>Deskripsi Gambar</strong> adalah petunjuk gambar yang perlu kamu cari dan download untuk ditambahkan ke slide</li>
            <li>• Total ada {sections.reduce((sum, s) => sum + s.slides.length, 0)} slide untuk 5 presenter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresentationMaterial;
