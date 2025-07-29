// === Import ===
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

import Chart from 'chart.js/auto';
window.Chart = Chart;

import TomSelect from 'tom-select';
window.TomSelect = TomSelect;

import { TempusDominus } from '@eonasdan/tempus-dominus';
window.TempusDominus = TempusDominus;
import * as luxon from 'luxon';
window.luxon = luxon;

import barba from '@barba/core';
import gsap from 'gsap';
import { createIcons, icons } from 'lucide';
window.barba = barba;
// === Inisialisasi ikon di awal ===
createIcons({ icons });

// === Inisialisasi UI Interaktif ===
function initUI() {

  const toggleBtn = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');
  const closeSidebar = document.getElementById('close-sidebar');

  // ⚠️ Cek kalau elemen ada dulu
  if (toggleBtn && sidebar && mainContent) {
    // Buang semua event listener lama (agar tidak ganda)
    toggleBtn.replaceWith(toggleBtn.cloneNode(true));
    const freshToggle = document.getElementById('toggleSidebar');

    freshToggle.addEventListener('click', function () {
      // console.log('clicked');

      if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        mainContent.classList.add('full');
      } else {
        sidebar.classList.add('show');
        mainContent.classList.remove('full');
      }
    });
  }

  if (closeSidebar && sidebar && mainContent) {
    closeSidebar.replaceWith(closeSidebar.cloneNode(true));
    const freshClose = document.getElementById('close-sidebar');

    freshClose.addEventListener('click', function () {
      if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        mainContent.classList.add('full');
      } else {
        sidebar.classList.add('show');
        mainContent.classList.remove('full');
      }
    });
  }

  // Tombol Loading
  document.querySelectorAll('.btn-loading').forEach(button => {
    button.addEventListener('click', function () {
      const label = button.getAttribute('data-label') || 'Loading...';

      if (button.type === 'submit') {
        requestAnimationFrame(() => {
          button.innerHTML = `<i data-lucide="loader" class="lucide-sm me-1 spin"></i> Loading...`;
          button.disabled = true;
          createIcons({ icons });
        });
      } else {
        button.innerHTML = `<i data-lucide="loader" class="lucide-sm me-1 spin"></i> Loading...`;
        button.disabled = true;
        createIcons({ icons });

        setTimeout(() => {
          button.innerHTML = `<i data-lucide="send" class="lucide-sm me-1"></i> ${label}`;
          button.disabled = false;
          createIcons({ icons });
        }, 2000);
      }
    });
  });

  // Hapus semua .active di nav-link sidebar
  document.querySelectorAll('#sidebar .nav-link.active').forEach(link => {
    link.classList.remove('active');
  });

  // Dapatkan URL saat ini (tanpa host)
  const currentPath = window.location.pathname;

  // Tutup semua collapse dulu
  document.querySelectorAll('#sidebar .collapse').forEach(collapse => {
    collapse.classList.remove('show');
  });

  // Hapus semua 'active' dari toggle link collapse
  document.querySelectorAll('#sidebar .nav-link.active').forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains('collapsed')) {
      link.classList.add('collapsed'); // pastikan toggle tetap collapsed
    }
  });

  // Loop semua link dalam sidebar
  document.querySelectorAll('#sidebar .nav-link[href]').forEach(link => {
    const href = link.getAttribute('href');

    // Lewati anchor (#...) atau javascript:void(0)
    if (!href || href.startsWith('#') || href.startsWith('javascript')) return;

    // Ambil path dari href
    const linkPath = new URL(href, window.location.origin).pathname;

    // Cek cocok exact atau parent
    if (currentPath === linkPath || currentPath.startsWith(linkPath + '/')) {
      link.classList.add('active');

      // Buka collapse jika bagian dari submenu
      const collapse = link.closest('.collapse');
      if (collapse) {
        collapse.classList.add('show');

        const toggleLink = document.querySelector(`[href="#${collapse.id}"]`);
        if (toggleLink) {
          toggleLink.classList.remove('collapsed');
          toggleLink.classList.add('active');
        }
      }
    }
  });

  // Load Tom Select
  document.querySelectorAll('.tom-select-ajax').forEach(function (el) {
    const select = new TomSelect(el, {
      valueField: 'id',
      labelField: 'text',
      searchField: 'text',
      loadThrottle: 300,
      load: function (query, callback) {
        const origin = window.location.origin;
        const url = el.dataset.url;
        fetch(`${origin}/${url}?q=${encodeURIComponent(query)}`)
          .then(response => response.json())
          .then(json => callback(json.items))
          .catch(() => callback());
      },
      render: {
        no_results: function (data, escape) {
          return `<div class="no-results text-muted">Hasil tidak ditemukan</div>`;
        }
      }
    });

    select.load('');
    // ⛳ Trigger load saat dropdown dibuka
    select.on('dropdown_open', function () {
      if (this.options.length === 0) {
        this.load('');
      }
    });
  });
  document.querySelectorAll('.tom-select').forEach(function (el) {
    const select = new TomSelect(el, {
      valueField: 'id',
      labelField: 'text',
      searchField: 'text',
    });
  });
  // Load datepicker
  document.querySelectorAll('.datepicker').forEach(el => {
    new TempusDominus(el, {
      display: {
        icons: {
          time: 'bi bi-clock',
          date: 'bi bi-calendar',
          up: 'bi bi-chevron-up',
          down: 'bi bi-chevron-down',
          previous: 'bi bi-chevron-left',
          next: 'bi bi-chevron-right',
          today: 'bi bi-calendar-check',
          clear: 'bi bi-trash',
          close: 'bi bi-x-lg',
        },
        buttons: {
          today: true,
          clear: true,
          close: true
        },
        components: {
          calendar: true,
          date: true,
          month: true,
          year: true,
          decades: true,
          clock: false,
          hours: false,
          minutes: false,
          seconds: false,
        }
      },
      localization: {
        locale: 'id',
        startOfTheWeek: 1,
        format: 'dd/MM/yyyy',
        today: 'Hari ini',
        clear: 'Bersihkan',
        close: 'Tutup',
        selectDate: 'Pilih tanggal',
        selectMonth: 'Pilih bulan',
        selectYear: 'Pilih tahun',
        nextMonth: 'Bulan berikutnya',
        previousMonth: 'Bulan sebelumnya',
      }
    });
  });
  // createIcons({ icons });
}

// === Modular import halaman berdasarkan <body data-js="..."> ===
function loadPageModule(jsName) {
  // console.log(jsName)
  if (!jsName) return;

  const modules = import.meta.glob('./pages/*.js');
  const modulePath = `./pages/${jsName}.js`;

  if (modules[modulePath]) {
    modules[modulePath]().then((mod) => {
      if (typeof mod.init === 'function') {
        mod.init();
      }
    }).catch(err => {
      console.error(`Gagal memuat modul: ${modulePath}`, err);
    });
  } else {
    console.warn(`Module "${modulePath}" tidak ditemukan`);
  }
}

// === Barba.js Setup ===
barba.init({
  prevent: ({ el }) => el.hasAttribute('data-barba-prevent') || el.classList.contains('no-barba'),
  transitions: [{
    name: 'loading-transition',
    async leave(data) {
      // Tampilkan loader
      document.getElementById('barba-loader').classList.remove('d-none');
      document.getElementById('barba-loader').classList.add('d-flex');

      // Tunggu sedikit supaya loader muncul (opsional)
      await new Promise(resolve => setTimeout(resolve, 200));
    },

    async enter(data) {
      // Sembunyikan loader
      document.getElementById('barba-loader').classList.remove('d-flex');
      document.getElementById('barba-loader').classList.add('d-none');

      // const jsName = nextContainer.dataset.js;
      // console.log(jsName)

      // initUI();
      // initBarbaFormSubmit();
      // loadPageModule(jsName);
      // createIcons({ icons });
    },

    async once(data) {
      document.getElementById('barba-loader').classList.add('d-none');
    }
  }]
});


function initBarbaFormSubmit(selector = 'form[data-barba-submit]') {
  const forms = document.querySelectorAll(selector);

  forms.forEach(form => {
    // Hindari duplikat binding event
    if (form.dataset.barbaBound === 'true') return;
    form.dataset.barbaBound = 'true';

    form.addEventListener('submit', function (e) {
      // console.log('foo')
      const method = form.getAttribute('method')?.toUpperCase() || 'GET';

      // Hanya tangani metode GET
      if (method !== 'GET') return;

      e.preventDefault(); // Cegah reload bawaan

      const formData = new FormData(form);
      const params = new URLSearchParams(formData).toString();

      let action = form.getAttribute('action') || window.location.href;
      // Buang query lama jika ada
      action = action.split('?')[0];

      const url = `${action}?${params}`;
      barba.go(url);
    });
  });
}

// === Cegah reload jika klik ulang link yang sama, atau anchor # ===
document.addEventListener('click', function (e) {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');

  // Abaikan jika:
  // - Tidak ada href
  // - External link
  // - Target _blank atau lainnya
  // - data-barba-prevent
  // - href kosong atau javascript:void
  if (
    !href ||
    link.hasAttribute('target') ||
    link.hasAttribute('data-barba-prevent') ||
    href.startsWith('javascript') ||
    href === '#'
  ) {
    return;
  }

  // Tangani anchor #section
  if (href.startsWith('#')) {
    // Cek apakah elemen dengan id itu ada
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault(); // Cegah reload
      // Opsional: scroll halus
      target.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  // Buat URL tujuan
  const linkUrl = new URL(link.href, window.location.origin);
  const currentUrl = window.location.pathname + window.location.search;
  const targetUrl = linkUrl.pathname + linkUrl.search;

  // Jika link mengarah ke halaman yang sama → cegah reload
  if (currentUrl === targetUrl) {
    e.preventDefault();
    // Opsional: barba.go(targetUrl); // jika ingin tetap reload via Barba
  }
});

// === Hook: dijalankan setelah setiap navigasi selesai ===
barba.hooks.after((data) => {
  const nextContainer = data.next.container;
  // console.log(nextContainer)
  if (!nextContainer) return;

  const jsName = nextContainer.dataset.js;

  initUI();
  initBarbaFormSubmit();
  loadPageModule(jsName);
  createIcons({ icons });
});
// Barba harus sudah diinisialisasi sebelumnya
document.getElementById('refresh-page')?.addEventListener('click', function (e) {
  // Muat ulang seluruh halaman dari server, tidak gunakan cache
  window.location.reload(true);
});

// Inisialisasi saat pertama kali load (belum lewat Barba)
initUI();
initBarbaFormSubmit();
loadPageModule(document.getElementById("content").dataset.js);
createIcons({ icons });