let qr;

function generateQR() {
    const text = document.getElementById("qrText").value;
    const qrContainer = document.getElementById("qrCode");
    const downloadBtn = document.getElementById("downloadBtn");

    qrContainer.innerHTML = "";
    downloadBtn.style.display = "none";

    if (text.trim() === "") {
        alert("Please enter some text or a link");
        return;
    }

    qr = new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
    });

    setTimeout(() => {
        const img = qrContainer.querySelector("img");
        downloadBtn.href = img.src;
        downloadBtn.style.display = "block";
    }, 300);

    document.getElementById("qrText").value = "";
}

function toggleTheme() {
    document.documentElement.classList.toggle("dark-mode");

    const btn = document.getElementById("themeToggle");
    if (document.documentElement.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
}
