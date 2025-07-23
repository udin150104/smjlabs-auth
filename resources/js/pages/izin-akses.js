import { createIcons, icons } from 'lucide';

createIcons({ icons }); // render awal

export function init() {
  document.getElementById('role').addEventListener('change', function () {
    const selectedValue = this.value;

    // Ambil URL sekarang
    const url = new URL(window.location.href);

    // Set atau ubah query parameter 'perpage'
    url.searchParams.set('role', selectedValue);

    // Redirect ke URL baru (reload)
    // window.location.href = url.toString();
    window.barba.go(url.toString());
  });
}

export const __keep = init;
