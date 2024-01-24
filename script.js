function generateCaptcha() {
    const captchaElement = document.getElementById('captcha');
    const captchaValue = Math.floor(10000 + Math.random() * 90000);
    captchaElement.textContent = captchaValue;
}

function validateForm(event) {
    event.preventDefault();
    const captchaInput = document.getElementById('captchaInput');
    const captcha = document.getElementById('captcha');
    const captchaValue = captcha.textContent;

    if (captchaInput.value === captchaValue)
    {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
        generateCaptcha();
    }
    else
    {
        alert('Captcha verification failed. Please try again.');
        captchaInput.value = '';
        generateCaptcha();
    }
}

generateCaptcha();