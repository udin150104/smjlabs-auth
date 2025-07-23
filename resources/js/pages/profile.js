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

  const btnEdit = document.getElementById('btn-edit');
  const form = document.getElementById('form');
  let isEditing = false;

  let errorForm = btnEdit.dataset.error; 
  if(errorForm == 'error'){
    setTimeout(() => {
      btnEdit.click();
    }, 100);
  }

  btnEdit.addEventListener('click', function () {
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
      if (input.type === 'hidden') return;
      if (input.hasAttribute('readonly')) {
        input.readOnly = isEditing;
      }
      if (input.type !== 'hidden') {
        if (isEditing) {
          document.querySelectorAll('.error-help').forEach(div => {
            div.remove();
          });
          input.classList.add('form-control-plaintext');
          document.getElementById('at-sign').classList.add('p-0','border-0');
          document.getElementById('hidden-form').classList.add('d-none');
        } else {
          document.getElementById('at-sign').classList.remove('p-0','border-0');
          input.classList.remove('form-control-plaintext');
          document.getElementById('hidden-form').classList.remove('d-none');
        }
      }
    });

    // Toggle status dan teks tombol
    isEditing = !isEditing;
    btnEdit.innerHTML = isEditing
      ? '<i data-lucide="x" class="lucide-sm"></i> Batal'
      : '<i data-lucide="pencil-line" class="lucide-sm"></i> Edit';

    // Optional: update ikon lucide
    createIcons({ icons });
  });
}

export const __keep = init;
