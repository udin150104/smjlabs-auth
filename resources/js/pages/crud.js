import { createIcons, icons } from 'lucide';
createIcons({ icons }); // render awal

export function init() {
  document.getElementById('crud-delete-filter')?.addEventListener('click', function (e) {
    e.preventDefault();

    const form = document.querySelector('form#crud-filter-form');
    if (!form) return;

    // Reset semua input bertipe filter
    const inputs = form.querySelectorAll('.filter');

    inputs.forEach(input => {
      if (input.type === 'checkbox' || input.type === 'radio') {
        input.checked = false;
      } else {
        input.value = '';
      }

      if (input.tagName === 'SELECT') {
        input.selectedIndex = 0;
      }
    });

    // Buat ulang URL tanpa query
    const actionUrl = form.getAttribute('action')?.split('?')[0] || window.location.pathname;

    // Bangun URL kosong (GET) dari hidden inputs saja
    const formData = new FormData(form);
    const params = new URLSearchParams();

    // Tambahkan hanya input tersembunyi (hidden) seperti perpage, sort, dsb.
    ['perpage', 'page', 'sort', 'orderby'].forEach(name => {
      const val = form.querySelector(`[name="${name}"]`)?.value;
      if (val) params.append(name, val);
    });

    const finalUrl = params.toString() ? `${actionUrl}?${params.toString()}` : actionUrl;

    // Navigasi dengan Barba.js
    window.barba.go(finalUrl);
  });


  document.getElementById('crud-per-page').addEventListener('change', function () {
    const selectedValue = this.value;

    // Ambil URL sekarang
    const url = new URL(window.location.href);

    // Set atau ubah query parameter 'perpage'
    url.searchParams.set('perpage', selectedValue);

    // Redirect ke URL baru (reload)
    // window.location.href = url.toString();
    window.barba.go(url.toString());
  });

  let currentDeleteForm = null;
  document.querySelectorAll(".crud-btn-delete").forEach(btn => {
    btn.addEventListener("click", function (e) {
      // console.log('click');
      e.preventDefault();

      currentDeleteForm = btn.closest("form");

      // console.log(window.bootstrap);
      const modalElement = document.getElementById('modal-all');
      const modal = new bootstrap.Modal(modalElement);
      modalElement.querySelector(".modal-header").classList.add("text-white", "bg-danger", "border-bottom-0");
      modalElement.querySelector(".modal-title").innerHTML = "Hapus Data";
      modalElement.querySelector(".modal-body").classList.add("text-white", "bg-danger");
      modalElement.querySelector(".modal-body").innerHTML = "Anda yakin ingin menghapus data ini?";
      modalElement.querySelector(".modal-footer").classList.add("text-white", "bg-danger", "border-top-0");

      modalElement.querySelector(".btn-close-modal").classList.add("btn-danger","border-0");
      modalElement.querySelector(".btn-close-modal").innerHTML = "Batal";
      modalElement.querySelector(".btn-action-modal").classList.add("btn-light");
      modalElement.querySelector(".btn-action-modal").innerHTML = "Ya, Yakin";
      modal.show();
    });
  });
  document.querySelector(".btn-action-modal").addEventListener("click", function (e) {
    // e.preventDefault(); // cegah aksi default (kalau tombol dalam form lain)
    if (currentDeleteForm) {
      currentDeleteForm.submit(); // lanjutkan submit dari form yang disimpan
    }
  });

}

export const __keep = init;
