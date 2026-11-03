/**
 * ===================================================================
 * ASTRAL PORTFOLIO - RIHSAL SYARIF
 * Mechanical Engineering & Robotics | President University
 * Interactive Starfield, Audio Synthesizer, Modal & UI Controls
 * ===================================================================
 */

// ==========================================
// 1. CONFIGURATION: RIHSAL SYARIF
// ==========================================
const COSMIC_CONFIG = {
  pilotName: "Rihsal Syarif",
  institution: "President University",
  program: "Mechanical Engineering & Robotics",
  roles: [
    "Mechanical & Robotics Student",
    "Jababeka Scholarship Recipient",
    "SolidWorks & 3D CAD Modeler",
    "Arduino & Embedded Systems Explorer",
    "FLS2N Short Film 1st Place Winner",
    "Adaptable Communicator & Fast Learner"
  ],
  typingSpeed: 80,
  deletingSpeed: 40,
  pauseBetweenRoles: 1700,
  
  // Data Proyek Detail Modal
  projects: {
    truck_cad: {
      title: "Stake Bed Pickup Truck - 3D CAD Mechanical Assembly",
      status: "SELESAI // SOLIDWORKS 3D PART",
      stardate: "2026",
      description: "Proyek rekayasa pemodelan 3D suku cadang mekanikal kendaraan Stake Bed Pickup Truck yang dirancang menggunakan perangkat lunak SolidWorks. Berfokus pada presisi geometris, toleransi dimensi perakitan sesuai kaidah gambar teknik (technical drawing), dan kesiapan fabrikasi prototipe fisik.",
      specs: [
        { label: "Software Utama", value: "SolidWorks 3D CAD" },
        { label: "Komponen", value: "Stake Bed Pickup Truck.SLDPRT" },
        { label: "Bidang Rekayasa", value: "Mechanical Part Modeling" },
        { label: "Standar Gambar", value: "Technical Drawing & Tolerances" }
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    robot_eyes: {
      title: "Interactive Robot Eyes Embedded System",
      status: "AKTIF // ARDUINO HARDWARE PROTOTYPE",
      stardate: "2026",
      description: "Sistem perangkat keras terbenam (embedded robotics) berbasis mikrokontroler Arduino yang memprogram gerak ekspresi animasi mata robot secara interaktif dan dinamis. Mengoptimalkan siklus refresh grafis, penggunaan memori mikroprosesor yang efisien, dan konsumsi daya portabel.",
      specs: [
        { label: "Platform & IDE", value: "Arduino IDE (C / C++)" },
        { label: "File Kode", value: "robot_eyes_keychain.ino" },
        { label: "Integrasi Komponen", value: "Microcontroller, Display Matrix / OLED" },
        { label: "Karakteristik", value: "Ultra-compact, Real-time Visual Feedback" }
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    fls2n_film: {
      title: "Juara 1 FLS2N: Produksi Film Pendek Kreatif",
      status: "JUARA 1 TINGKAT PROVINSI & KABUPATEN",
      stardate: "2024",
      description: "Karya film pendek berprestasi yang berhasil menyabet Juara 1 Tingkat Kabupaten dan Juara 1 Tingkat Provinsi dalam Festival & Lomba Seni Siswa Nasional (FLS2N) 2024. Menunjukkan kepemimpinan dalam penyutradaraan, komunikasi lintas audiens, perencanaan storyboard, dan teknik sinematografi kreatif.",
      specs: [
        { label: "Penghargaan 1", value: "1st Place Winner 2024 FLS2N Provincial" },
        { label: "Penghargaan 2", value: "1st Place Winner 2024 District-Level" },
        { label: "Kategori Lomba", value: "Short Film Category" },
        { label: "Peran Utama", value: "Creative Direction & Production Management" }
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    shoe_dryer: {
      title: "Economic Survival Project: Shoe Dryer",
      status: "AKTIF // TEAM LEADER (SEP 2026 – PRESENT)",
      stardate: "2026",
      description: "Proyek rekayasa produk inovatif 'Economic Survival' yang dikerjakan di President University. Bertindak sebagai Team Leader dengan tanggung jawab penuh merumuskan konsep produk, merancang desain mekanikal 3D, serta mengidentifikasi dan memecahkan kendala teknis (issue analysis) untuk kesiapan prototipe.",
      specs: [
        { label: "Peran Utama", value: "Team Leader & Lead Designer" },
        { label: "Institusi", value: "President University" },
        { label: "Periode Proyek", value: "Sep 2026 – Present" },
        { label: "Fokus Rekayasa", value: "Product Ideation, CAD Modeling & Issue Analysis" }
      ],
      githubUrl: "#",
      liveUrl: "#"
    }
  },

  // 5 Sertifikat Resmi MathWorks (MATLAB & Simulink)
  certificates: {
    matlab: {
      id: "matlab",
      title: "MATLAB Onramp",
      issuedDate: "14 September 2026",
      status: "100% COMPLETED",
      pdfUrl: "assets/certificates/matlab-onramp.pdf",
      description: "Pelatihan fundamental komputasi ilmiah dan matriks MATLAB: manipulasi array, import data, kalkulasi numerik, visualisasi plot 2D/3D, dan otomatisasi fungsi kalkulasi rekayasa presisi.",
      skills: ["Matrix Operations", "Data Visualization", "Algorithm Scripting", "Numerical Analysis"]
    },
    ml: {
      id: "ml",
      title: "Machine Learning Onramp",
      issuedDate: "17 September 2026",
      status: "100% COMPLETED",
      pdfUrl: "assets/certificates/machine-learning-onramp.pdf",
      description: "Penerapan algoritma machine learning pada MATLAB: eksplorasi data, feature engineering, pelatihan model klasifikasi terawasi (supervised classification), dan evaluasi akurasi prediksi.",
      skills: ["Supervised Learning", "Classification Models", "Feature Extraction", "Model Validation"]
    },
    simulink: {
      id: "simulink",
      title: "Simulink Onramp",
      issuedDate: "19 September 2026",
      status: "100% COMPLETED",
      pdfUrl: "assets/certificates/simulink-onramp.pdf",
      description: "Pemodelan dan simulasi sistem dinamis berbasis diagram blok grafis: desain sistem kontrol umpan balik (feedback control), integrasi sinyal fisik, dan analisis respon transien mekanikal.",
      skills: ["Block Diagram Modeling", "Feedback Control Loops", "Dynamical System Simulation", "Signal Routing"]
    },
    simscape: {
      id: "simscape",
      title: "Simscape Onramp",
      issuedDate: "28 September 2026",
      status: "100% COMPLETED",
      pdfUrl: "assets/certificates/simscape-onramp.pdf",
      description: "Pemodelan jaringan fisika terintegrasi multi-domain (Physical Networks): merekayasa komponen mekanik, aktuator elektrik, fluida, dan termal dalam satu lingkungan simulasi kohesif.",
      skills: ["Physical Networks", "Multi-domain Simulation", "Mechanical & Electrical Systems", "Power Systems"]
    },
    multibody: {
      id: "multibody",
      title: "Multibody Simulation Onramp",
      issuedDate: "4 October 2026",
      status: "100% COMPLETED",
      pdfUrl: "assets/certificates/multibody-simulation-onramp.pdf",
      description: "Simulasi 3D dinamika benda kaku (rigid body dynamics) untuk sistem mekatronika dan robotika: kinematika sambungan (joints, revolute, prismatic), koordinat spasial 3D, dan gaya eksternal.",
      skills: ["3D Rigid Body Mechanics", "Robotic Kinematics", "Joint Constraints", "Dynamic Force Analysis"]
    }
  },

  // 2 Sertifikat Resmi FLS2N 2024 (Provinsi & Kabupaten)
  fls2nCertificates: {
    provinsi: {
      id: "provinsi",
      title: "Juara I Lomba Film Pendek",
      badge: "FLS2N TINGKAT PROVINSI PAPUA TENGAH",
      level: "Tingkat Provinsi",
      event: "Festival Lomba Seni Siswa Nasional (FLS2N) Jenjang SMK Tingkat Provinsi Papua Tengah",
      dateLocation: "Diselenggarakan Di Timika Pada Tanggal 18–22 Juli 2024",
      school: "SMK NEGERI 1 NABIRE",
      recipient: "RIHZAL SYARIF",
      officialSigner: "MARTEN UKAGO, SE., M.Si (Plt. Kepala Dinas Pendidikan Dan Kebudayaan Provinsi Papua Tengah)",
      imgUrl: "assets/certificates/fls2n/fls2n-provinsi.jpg",
      pdfUrl: "assets/certificates/fls2n/fls2n-provinsi.pdf",
      description: "Piagam Penghargaan resmi atas pencapaian sebagai Juara 1 Lomba Film Pendek FLS2N Tingkat Provinsi Papua Tengah jenjang Sekolah Menengah Kejuruan (SMK) tahun 2024 yang diselenggarakan di Timika."
    },
    kabupaten: {
      id: "kabupaten",
      title: "Juara - I Kategori Film Pendek",
      badge: "FLS2N TINGKAT KABUPATEN NABIRE",
      level: "Tingkat Kabupaten",
      certNumber: "Nomor: 800 / 090 / DISDIK-NBR / IV / 2024",
      event: "Festival dan Lomba Seni Siswa Nasional (FLS2N) Jenjang SMK Tahun 2024",
      dateLocation: "Dilaksanakan oleh Dinas Pendidikan Kabupaten Nabire, Tanggal 25 s/d 26 April 2024, di Nabire Provinsi Papua Tengah",
      school: "SMK NEGERI 1 NABIRE",
      recipient: "RIHSAL SYARIF",
      officialSigner: "Dra. DINA PIDJER (Kepala Dinas Pendidikan Kabupaten Nabire)",
      imgUrl: "assets/certificates/fls2n/fls2n-kabupaten.jpg",
      pdfUrl: "assets/certificates/fls2n/fls2n-kabupaten.pdf",
      description: "Sertifikat resmi penghargaan Juara 1 FLS2N Kategori Film Pendek jenjang SMK tingkat Kabupaten Nabire yang disahkan oleh Kepala Dinas Pendidikan Kabupaten Nabire."
    }
  }
};

// ==========================================
// 2. CANVAS STARFIELD & SHOOTING STARS
// ==========================================
class StarfieldEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: 0, targetY: 0, realX: -1000, realY: -1000 };
    this.starCount = Math.floor(window.innerWidth > 768 ? 190 : 90);

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.realX = e.clientX;
      this.mouse.realY = e.clientY;
      this.mouse.targetX = (e.clientX - window.innerWidth / 2) * 0.04;
      this.mouse.targetY = (e.clientY - window.innerHeight / 2) * 0.04;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.realX = -1000;
      this.mouse.realY = -1000;
    });

    this.createStars();
    this.animate();

    // Munculkan meteor / shooting stars secara berkala
    setInterval(() => {
      if (Math.random() > 0.25) {
        this.addShootingStar();
      }
    }, 2800);
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createStars() {
    this.stars = [];
    const colors = ['#ffffff', '#bae6fd', '#38bdf8', '#818cf8', '#e0e7ff'];
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 1.7 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.7 + 0.3,
        alpha: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.006,
        depth: Math.random() * 1.4 + 0.4
      });
    }
  }

  addShootingStar() {
    const startX = Math.random() * this.width * 0.85;
    const startY = Math.random() * (this.height * 0.45);
    const length = Math.random() * 90 + 70;
    const speed = Math.random() * 12 + 14;
    const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);

    this.shootingStars.push({
      x: startX,
      y: startY,
      length: length,
      speed: speed,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      life: 0,
      maxLife: Math.random() * 25 + 30
    });
  }

  animate() {
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    const computedStars = [];

    // Stars static & twinkling with parallax
    for (let star of this.stars) {
      star.alpha += star.twinkleSpeed;
      const currentAlpha = Math.abs(Math.sin(star.alpha)) * star.baseAlpha;
      
      const offsetX = star.x - this.mouse.x * star.depth;
      const offsetY = star.y - this.mouse.y * star.depth;

      computedStars.push({ x: offsetX, y: offsetY, size: star.size, color: star.color, alpha: currentAlpha });

      this.ctx.beginPath();
      this.ctx.arc(offsetX, offsetY, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = currentAlpha;
      this.ctx.shadowBlur = star.size > 1.3 ? 7 : 0;
      this.ctx.shadowColor = star.color;
      this.ctx.fill();
    }

    // Delicate Constellation Web between nearby stars
    const maxLineDist = 75;
    this.ctx.shadowBlur = 0;
    for (let i = 0; i < computedStars.length; i++) {
      for (let j = i + 1; j < computedStars.length; j++) {
        const dx = computedStars[i].x - computedStars[j].x;
        const dy = computedStars[i].y - computedStars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxLineDist) {
          const lineAlpha = (1 - dist / maxLineDist) * 0.12;
          this.ctx.beginPath();
          this.ctx.moveTo(computedStars[i].x, computedStars[i].y);
          this.ctx.lineTo(computedStars[j].x, computedStars[j].y);
          this.ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
          this.ctx.lineWidth = 0.6;
          this.ctx.stroke();
        }
      }

      // Constellation link to mouse cursor if within range
      if (this.mouse.realX > 0 && this.mouse.realY > 0) {
        const mdx = computedStars[i].x - this.mouse.realX;
        const mdy = computedStars[i].y - this.mouse.realY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120) {
          const mAlpha = (1 - mDist / 120) * 0.22;
          this.ctx.beginPath();
          this.ctx.moveTo(computedStars[i].x, computedStars[i].y);
          this.ctx.lineTo(this.mouse.realX, this.mouse.realY);
          this.ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    // Shooting stars with glowing plasma trails
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const s = this.shootingStars[i];
      s.x += s.dx;
      s.y += s.dy;
      s.life++;

      const progress = s.life / s.maxLife;
      const trailAlpha = 1 - progress;

      const tailX = s.x - (s.dx / s.speed) * s.length;
      const tailY = s.y - (s.dy / s.speed) * s.length;

      const grad = this.ctx.createLinearGradient(s.x, s.y, tailX, tailY);
      grad.addColorStop(0, 'rgba(255, 255, 255, ' + trailAlpha + ')');
      grad.addColorStop(0.3, 'rgba(56, 189, 248, ' + (trailAlpha * 0.8) + ')');
      grad.addColorStop(1, 'rgba(99, 102, 241, 0)');

      this.ctx.beginPath();
      this.ctx.moveTo(s.x, s.y);
      this.ctx.lineTo(tailX, tailY);
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 2.4;
      this.ctx.stroke();

      if (s.life >= s.maxLife) {
        this.shootingStars.splice(i, 1);
      }
    }

    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;

    requestAnimationFrame(() => this.animate());
  }
}

// ==========================================
// 3. SCI-FI WEB AUDIO API SYNTHESIZER
// ==========================================
class CosmicAudioSynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.gainNode = null;
    this.isMuted = true;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.ensureContext();
    if (!this.ctx) return false;

    if (this.isMuted) {
      this.startAmbient();
      this.isMuted = false;
      this.playBlip(520, 0.15, 'sine');
    } else {
      this.stopAmbient();
      this.isMuted = true;
    }
    return !this.isMuted;
  }

  startAmbient() {
    if (!this.ctx) return;
    try {
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.045, this.ctx.currentTime + 3);

      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'sine';
      this.droneOsc1.frequency.setValueAtTime(55, this.ctx.currentTime);

      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = 'triangle';
      this.droneOsc2.frequency.setValueAtTime(110.5, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(240, this.ctx.currentTime);

      this.droneOsc1.connect(filter);
      this.droneOsc2.connect(filter);
      filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.droneOsc1.start();
      this.droneOsc2.start();
      this.isPlaying = true;
    } catch (err) {
      console.warn("Audio initialization prevented by browser policy", err);
    }
  }

  stopAmbient() {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      setTimeout(() => {
        if (this.droneOsc1) { this.droneOsc1.stop(); this.droneOsc1.disconnect(); }
        if (this.droneOsc2) { this.droneOsc2.stop(); this.droneOsc2.disconnect(); }
        this.isPlaying = false;
      }, 800);
    }
  }

  playBlip(freq = 660, duration = 0.08, type = 'sine') {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playTransmissionBeacon() {
    this.ensureContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const chords = [440, 554.37, 659.25, 880];
    
    chords.forEach((note, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note, now + index * 0.12);

      gain.gain.setValueAtTime(0.001, now + index * 0.12);
      gain.gain.linearRampToValueAtTime(0.06, now + index * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.12 + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + index * 0.12);
      osc.stop(now + index * 0.12 + 1.3);
    });
  }
}

// ==========================================
// 4. TYPEWRITER EFFECT
// ==========================================
class Typewriter {
  constructor(elementId, roles, speed, delSpeed, pause) {
    this.element = document.getElementById(elementId);
    this.roles = roles;
    this.speed = speed;
    this.delSpeed = delSpeed;
    this.pause = pause;
    this.roleIdx = 0;
    this.charIdx = 0;
    this.isDeleting = false;

    if (this.element) {
      this.tick();
    }
  }

  tick() {
    const currentRole = this.roles[this.roleIdx];

    if (!this.isDeleting) {
      this.charIdx++;
      this.element.textContent = currentRole.substring(0, this.charIdx);

      if (this.charIdx === currentRole.length) {
        this.isDeleting = true;
        setTimeout(() => this.tick(), this.pause);
        return;
      }
      setTimeout(() => this.tick(), this.speed);
    } else {
      this.charIdx--;
      this.element.textContent = currentRole.substring(0, this.charIdx);

      if (this.charIdx === 0) {
        this.isDeleting = false;
        this.roleIdx = (this.roleIdx + 1) % this.roles.length;
        setTimeout(() => this.tick(), 350);
        return;
      }
      setTimeout(() => this.tick(), this.delSpeed);
    }
  }
}

// ==========================================
// 5. APPLICATION INITIALIZATION & DOM EVENTS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Starfield Canvas
  const starfield = new StarfieldEngine('space-canvas');

  // 2. Inisialisasi Audio Synthesizer
  const cosmicAudio = new CosmicAudioSynth();
  const audioToggleBtn = document.getElementById('audio-toggle');
  const iconOff = document.querySelector('.audio-icon-off');
  const audioBars = document.getElementById('audio-bars');

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      const isSoundActive = cosmicAudio.toggle();
      if (isSoundActive) {
        if (iconOff) iconOff.classList.add('hidden');
        if (audioBars) audioBars.classList.remove('hidden');
        audioToggleBtn.classList.add('active');
        audioToggleBtn.title = "Matikan Suara Kosmik";
      } else {
        if (iconOff) iconOff.classList.remove('hidden');
        if (audioBars) audioBars.classList.add('hidden');
        audioToggleBtn.classList.remove('active');
        audioToggleBtn.title = "Aktifkan Suara Kosmik";
      }
    });
  }

  // Efek Suara Blip untuk elemen tombol & link interaktif
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cosmicAudio.playBlip(780, 0.04, 'sine');
    });
  });

  // 3. Inisialisasi Typewriter di Hero Section
  new Typewriter(
    'typewriter',
    COSMIC_CONFIG.roles,
    COSMIC_CONFIG.typingSpeed,
    COSMIC_CONFIG.deletingSpeed,
    COSMIC_CONFIG.pauseBetweenRoles
  );

  // 4. Update Tahun Copyright Otomatis
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 5. Navbar Sticky & Active Link Tracking on Scroll
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 6. Mobile Hamburger Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('open');
      cosmicAudio.playBlip(620, 0.08);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('open');
      });
    });
  }

  // 7. Project Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cosmicAudio.playBlip(880, 0.06);

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 8. Contact Form Submission Simulation
  const form = document.getElementById('transmission-form');
  const submitBtn = document.getElementById('btn-transmit');
  const alertBox = document.getElementById('transmission-alert');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      cosmicAudio.playTransmissionBeacon();

      const originalText = submitBtn.querySelector('.btn-text').textContent;
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = "MEMANCARKAN SINYAL...";
      submitBtn.style.opacity = "0.7";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = originalText;
        submitBtn.style.opacity = "1";

        if (alertBox) {
          alertBox.classList.remove('hidden');
          setTimeout(() => {
            alertBox.classList.add('hidden');
          }, 6000);
        }

        form.reset();
      }, 1600);
    });
  }

  // 9. Modal Close Events
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
      }
    });
  }

  // 10. Top Galactic Scroll Progress Line
  const scrollProgressBar = document.getElementById('cosmic-scroll-progress');
  window.addEventListener('scroll', () => {
    if (scrollProgressBar) {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      scrollProgressBar.style.width = `${progress}%`;
    }
  }, { passive: true });

  // 11. Live Telemetry Clock & Stardate Updater
  const telemetryClock = document.getElementById('live-telemetry-clock');
  function updateTelemetryClock() {
    if (telemetryClock) {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, '0');
      const m = String(now.getUTCMinutes()).padStart(2, '0');
      const s = String(now.getUTCSeconds()).padStart(2, '0');
      telemetryClock.textContent = `UTC ${h}:${m}:${s}`;
    }
  }
  setInterval(updateTelemetryClock, 1000);
  updateTelemetryClock();

  // 12. Hero 3D Hologram Parallax Tilt
  const heroVisualArea = document.getElementById('hero-visual-area');
  const hologramStage = document.getElementById('hologram-stage');

  if (heroVisualArea && hologramStage) {
    let curX = 0, curY = 0;
    let tgtX = 0, tgtY = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = heroVisualArea.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      tgtX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)));
      tgtY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight / 2)));
    });

    window.addEventListener('mouseleave', () => {
      tgtX = 0;
      tgtY = 0;
    });

    function renderHologramTilt() {
      curX += (tgtX - curX) * 0.08;
      curY += (tgtY - curY) * 0.08;
      const rx = -curY * 18;
      const ry = curX * 22;
      hologramStage.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      requestAnimationFrame(renderHologramTilt);
    }
    renderHologramTilt();
  }

  // 13. Interactive Card Starlight Cursor Spotlight
  const cosmicCards = document.querySelectorAll('.cosmic-card');
  cosmicCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 14. Smooth Scroll-Triggered Reveal Animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 15. Animated Skill Progress Bars Loading
  const skillsSection = document.getElementById('skills');
  const progressFills = document.querySelectorAll('.progress-fill');
  if (skillsSection && progressFills.length > 0) {
    // Record original target percentage and reset to 0% initially
    progressFills.forEach(fill => {
      const originalWidth = fill.style.width || '100%';
      fill.setAttribute('data-target-width', originalWidth);
      fill.style.width = '0%';
    });

    if ('IntersectionObserver' in window) {
      const skillObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            progressFills.forEach((fill, index) => {
              setTimeout(() => {
                const target = fill.getAttribute('data-target-width');
                if (target) fill.style.width = target;
              }, 120 + index * 90);
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      skillObserver.observe(skillsSection);
    } else {
      progressFills.forEach(fill => {
        const target = fill.getAttribute('data-target-width');
        if (target) fill.style.width = target;
      });
    }
  }
});

// ==========================================
// 6. GLOBAL FUNCTION: OPEN PROJECT MODAL
// ==========================================
window.openProjectModal = function(projectId) {
  const project = COSMIC_CONFIG.projects[projectId];
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  const specsHtml = project.specs.map(spec => `
    <div class="modal-spec-item">
      <span class="modal-spec-label">${spec.label}</span>
      <span class="modal-spec-value">${spec.value}</span>
    </div>
  `).join('');

  let extraCtaHtml = '';
  if (projectId === 'fls2n_film') {
    extraCtaHtml = `
      <div style="width: 100%; border-top: 1px dashed rgba(251, 191, 36, 0.3); padding-top: 1rem; margin-top: 1rem;">
        <span style="font-family: var(--font-tech); font-size: 0.85rem; color: var(--cosmic-amber); font-weight: 700; display: block; margin-bottom: 0.6rem;">
          📜 BUKTI PIAGAM PENGHARGAAN JUARA 1:
        </span>
        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
          <button class="btn btn-primary-cosmic btn-sm" onclick="document.getElementById('project-modal').classList.add('hidden'); openFls2nCertModal('provinsi');">
            🏆 Buka Sertifikat Provinsi (Timika)
          </button>
          <button class="btn btn-outline-glow btn-sm" onclick="document.getElementById('project-modal').classList.add('hidden'); openFls2nCertModal('kabupaten');">
            🥇 Buka Sertifikat Kabupaten (Nabire)
          </button>
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="modal-header-meta">
      <span class="mission-status-chip">${project.status}</span>
      <span style="font-family: var(--font-tech); font-size: 0.8rem; color: var(--cosmic-amber);">STARDATE: ${project.stardate}</span>
    </div>
    
    <h3 class="modal-title">${project.title}</h3>
    
    <p class="modal-desc">${project.description}</p>
    
    <div class="modal-spec-grid">
      ${specsHtml}
    </div>

    ${extraCtaHtml}
    
    <div class="modal-footer-cta" style="margin-top: 1.25rem;">
      <a href="mailto:rizalsyarif1502@gmail.com?subject=Tanya%20Proyek%20${encodeURIComponent(project.title)}" class="btn btn-primary-cosmic btn-sm">
        <span>Hubungi Terkait Proyek Ini</span>
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </a>
      <button class="btn btn-glass btn-sm" onclick="document.getElementById('project-modal').classList.add('hidden')">
        <span>Tutup Jendela</span>
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
};

// ==========================================
// 7. GLOBAL FUNCTIONS: MATLAB CERTIFICATES VIEWER
// ==========================================
let currentActiveCertKey = 'matlab';

window.openMatlabCertModal = function(event, defaultCertKey = 'matlab') {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const modal = document.getElementById('matlab-cert-modal');
  if (!modal) return;

  currentActiveCertKey = defaultCertKey;
  renderActiveCertificate(currentActiveCertKey);

  modal.classList.remove('hidden');
};

function renderActiveCertificate(certKey) {
  const cert = COSMIC_CONFIG.certificates[certKey];
  if (!cert) return;

  // Update tabs active state
  const tabButtons = document.querySelectorAll('.cert-tab-btn');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-cert') === certKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const displayArea = document.getElementById('cert-display-area');
  if (!displayArea) return;

  const skillsPills = cert.skills.map(s => `<span class="tag" style="background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.35); padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.75rem; color: var(--cosmic-cyan);">${s}</span>`).join(' ');

  displayArea.innerHTML = `
    <!-- PDF Frame Display -->
    <div class="cert-frame-wrapper">
      <iframe src="${cert.pdfUrl}#toolbar=1&navpanes=0" class="cert-iframe" title="${cert.title} Certificate">
        <p style="padding: 2rem; color: #fff;">Browser Anda tidak mendukung preview PDF langsung. <a href="${cert.pdfUrl}" target="_blank" style="color: var(--cosmic-cyan);">Klik di sini untuk membuka PDF</a>.</p>
      </iframe>
    </div>

    <!-- Details & Action Buttons -->
    <div class="cert-actions-bar">
      <div class="cert-meta-info">
        <h4 class="cert-meta-title">${cert.title}</h4>
        <span class="cert-meta-date">📅 Tanggal Kelulusan: ${cert.issuedDate} • Status: ${cert.status}</span>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.35rem; max-width: 650px; line-height: 1.55;">
          ${cert.description}
        </p>
        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.6rem;">
          ${skillsPills}
        </div>
      </div>

      <div class="cert-buttons-group">
        <a href="${cert.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-cosmic btn-sm">
          <span>Buka / Unduh File PDF</span>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <button class="btn btn-glass btn-sm" onclick="document.getElementById('matlab-cert-modal').classList.add('hidden')">
          <span>Tutup</span>
        </button>
      </div>
    </div>
  `;
}

// Inisialisasi event listener tab dan modal penutup
document.addEventListener('DOMContentLoaded', () => {
  const certModal = document.getElementById('matlab-cert-modal');
  const certModalClose = document.getElementById('cert-modal-close');
  const certTabs = document.getElementById('cert-tabs');

  if (certTabs) {
    certTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.cert-tab-btn');
      if (!btn) return;
      const certKey = btn.getAttribute('data-cert');
      if (certKey) {
        currentActiveCertKey = certKey;
        renderActiveCertificate(certKey);
      }
    });
  }

  if (certModalClose && certModal) {
    certModalClose.addEventListener('click', () => {
      certModal.classList.add('hidden');
    });

    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        certModal.classList.add('hidden');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !certModal.classList.contains('hidden')) {
        certModal.classList.add('hidden');
      }
    });
  }

  // Event listener FLS2N Modal
  const fls2nModal = document.getElementById('fls2n-cert-modal');
  const fls2nModalClose = document.getElementById('fls2n-modal-close');
  const fls2nTabs = document.getElementById('fls2n-tabs');

  if (fls2nTabs) {
    fls2nTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.cert-tab-btn');
      if (!btn) return;
      const certKey = btn.getAttribute('data-cert');
      if (certKey) {
        currentActiveFls2nKey = certKey;
        renderActiveFls2nCertificate(certKey);
      }
    });
  }

  if (fls2nModalClose && fls2nModal) {
    fls2nModalClose.addEventListener('click', () => {
      fls2nModal.classList.add('hidden');
    });

    fls2nModal.addEventListener('click', (e) => {
      if (e.target === fls2nModal) {
        fls2nModal.classList.add('hidden');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !fls2nModal.classList.contains('hidden')) {
        fls2nModal.classList.add('hidden');
      }
    });
  }

  // Event listener PKL Modal
  const pklModal = document.getElementById('pkl-cert-modal');
  const pklModalClose = document.getElementById('pkl-modal-close');

  if (pklModalClose && pklModal) {
    pklModalClose.addEventListener('click', () => {
      pklModal.classList.add('hidden');
    });

    pklModal.addEventListener('click', (e) => {
      if (e.target === pklModal) {
        pklModal.classList.add('hidden');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !pklModal.classList.contains('hidden')) {
        pklModal.classList.add('hidden');
      }
    });
  }

  // Event listener CV / Resume Modal
  const cvModal = document.getElementById('cv-modal');
  const cvModalClose = document.getElementById('cv-modal-close');

  if (cvModalClose && cvModal) {
    cvModalClose.addEventListener('click', () => {
      cvModal.classList.add('hidden');
    });

    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        cvModal.classList.add('hidden');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !cvModal.classList.contains('hidden')) {
        cvModal.classList.add('hidden');
      }
    });
  }
});

// ==========================================
// GLOBAL FUNCTION: OPEN CV / RESUME MODAL
// ==========================================
window.openCvModal = function(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const modal = document.getElementById('cv-modal');
  if (modal) modal.classList.remove('hidden');
};

// ==========================================
// 8. GLOBAL FUNCTIONS: FLS2N CERTIFICATES VIEWER
// ==========================================
let currentActiveFls2nKey = 'provinsi';

window.openFls2nCertModal = function(certKey = 'provinsi', event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const modal = document.getElementById('fls2n-cert-modal');
  if (!modal) return;

  currentActiveFls2nKey = certKey;
  renderActiveFls2nCertificate(currentActiveFls2nKey);

  modal.classList.remove('hidden');
};

function renderActiveFls2nCertificate(certKey) {
  const cert = COSMIC_CONFIG.fls2nCertificates[certKey];
  if (!cert) return;

  // Update tabs active state
  const tabButtons = document.querySelectorAll('#fls2n-tabs .cert-tab-btn');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-cert') === certKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const displayArea = document.getElementById('fls2n-display-area');
  if (!displayArea) return;

  displayArea.innerHTML = `
    <!-- Certificate Image Preview -->
    <div class="cert-image-wrapper">
      <a href="${cert.imgUrl}" target="_blank" title="Klik untuk membuka ukuran penuh di tab baru">
        <img src="${cert.imgUrl}" alt="${cert.title}" class="fls2n-img-full" onerror="this.onerror=null; this.src='assets/certificates/fls2n/fls2n-provinsi.jpg';">
      </a>
    </div>

    <!-- Details & Action Buttons -->
    <div class="cert-actions-bar">
      <div class="cert-meta-info">
        <h4 class="cert-meta-title">${cert.title}</h4>
        <span class="cert-meta-date" style="color: var(--cosmic-amber); font-weight: 700;">🏆 ${cert.badge}</span>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.35rem; max-width: 650px; line-height: 1.55;">
          ${cert.description}
        </p>
        <div style="font-family: var(--font-tech); font-size: 0.82rem; color: #fff; margin-top: 0.4rem;">
          <div>📍 ${cert.dateLocation}</div>
          <div style="color: var(--cosmic-cyan); margin-top: 3px;">✍️ Disahkan: ${cert.officialSigner}</div>
        </div>
      </div>

      <div class="cert-buttons-group">
        <a href="${cert.imgUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-cosmic btn-sm">
          <span>Lihat Gambar Penuh</span>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="${cert.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-sm">
          <span>Buka PDF Asli</span>
        </a>
        <button class="btn btn-glass btn-sm" onclick="document.getElementById('fls2n-cert-modal').classList.add('hidden')">
          <span>Tutup</span>
        </button>
      </div>
    </div>
  `;
}

// ==========================================
// 9. GLOBAL FUNCTIONS: PKL CERTIFICATE VIEWER
// ==========================================
let isPklLandscape = true;

window.openPklCertModal = function(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const modal = document.getElementById('pkl-cert-modal');
  if (!modal) return;

  modal.classList.remove('hidden');
};

window.togglePklRotation = function() {
  const pklImg = document.getElementById('pkl-cert-img');
  const pklLink = document.getElementById('pkl-full-link');
  const rotateLabel = document.getElementById('pkl-rotate-label');
  if (!pklImg) return;

  isPklLandscape = !isPklLandscape;

  if (isPklLandscape) {
    pklImg.src = 'assets/certificates/sertifikat-pkl.jpg';
    if (pklLink) pklLink.href = 'assets/certificates/sertifikat-pkl.jpg';
    if (rotateLabel) rotateLabel.textContent = 'Putar ke Tegak (Portrait)';
  } else {
    pklImg.src = 'assets/certificates/sertifikat-pkl-original.jpg';
    if (pklLink) pklLink.href = 'assets/certificates/sertifikat-pkl-original.jpg';
    if (rotateLabel) rotateLabel.textContent = 'Putar ke Miring (Landscape)';
  }
};
