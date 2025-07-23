import { createIcons, icons } from 'lucide';

createIcons({ icons }); // render awal

export function init() {


  function generatePassword(length = 12, options = {}) {
    const {
      lowercase = true,
      uppercase = true,
      numbers = true,
      symbols = true,
    } = options;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    const selectedCharSets = [];
    let allChars = '';

    if (lowercase) {
      selectedCharSets.push(lowercaseChars);
      allChars += lowercaseChars;
    }
    if (uppercase) {
      selectedCharSets.push(uppercaseChars);
      allChars += uppercaseChars;
    }
    if (numbers) {
      selectedCharSets.push(numberChars);
      allChars += numberChars;
    }
    if (symbols) {
      selectedCharSets.push(symbolChars);
      allChars += symbolChars;
    }

    if (selectedCharSets.length === 0) {
      throw new Error('Harus pilih setidaknya satu jenis karakter!');
    }

    // Pastikan setidaknya 1 dari setiap jenis karakter yang dipilih
    let passwordArray = selectedCharSets.map(set => {
      const randomChar = set[Math.floor(Math.random() * set.length)];
      return randomChar;
    });

    // Tambahkan karakter random dari semua jenis untuk memenuhi panjang
    while (passwordArray.length < length) {
      const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
      passwordArray.push(randomChar);
    }

    // Acak posisi karakter (Fisher–Yates shuffle)
    for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }

    return passwordArray.join('');
  }


  if (document.getElementById('generate-password')) {
    document.getElementById('generate-password').addEventListener("click", function () {
      let password = generatePassword();
      document.getElementById("password").value = password;
    });
  }
  if (document.getElementById('toggle-password')) {

  }
  const toggleBtn = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');

  if (!toggleBtn || !passwordInput) return;

  toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

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