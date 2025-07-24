import { createIcons, icons } from 'lucide';

createIcons({ icons }); // render awal

export function init() {
  const toggleBtn = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('password_confirm');

  if (!toggleBtn || !passwordInput) return;
  if (!toggleBtn || !passwordConfirmInput) return;

  toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    passwordConfirmInput.type = isPassword ? 'text' : 'password';

    const icon = toggleBtn.querySelector('.lucide-toggle');

    if (icon && icon.tagName === 'svg') {
      // Hapus SVG lama
      const newIcon = document.createElement('i');
      newIcon.setAttribute('data-lucide', isPassword ? 'eye' : 'eye-off');
      newIcon.className = 'lucide-sm lucide-toggle';

      icon.replaceWith(newIcon);
      createIcons({ icons });
    }

    const label = toggleBtn.querySelector('span');
    if (label && label.lastChild?.nodeType === Node.TEXT_NODE) {
      label.lastChild.textContent = isPassword
        ? ' Sembunyikan Kata Sandi'
        : ' Tampilkan Kata Sandi';
    }
  });

}

export const __keep = init;
