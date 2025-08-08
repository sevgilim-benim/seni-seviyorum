function checkPassword() {
    const passwordInput = document.getElementById('password-input').value;
    const correctPassword = "senin-sifren"; // Kendi şifrenizi buraya yazın
    const errorMessage = document.getElementById('error-message');

    if (passwordInput === correctPassword) {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('content-container').classList.remove('hidden');
    } else {
        errorMessage.textContent = "Hatalı şifre. Lütfen tekrar dene.";
    }
}
