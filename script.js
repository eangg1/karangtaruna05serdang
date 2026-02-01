function toggleMode() {
  document.body.classList.toggle("dark");
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

  const images = [
    "https://drive.google.com/thumbnail?id=1Je2oMENdToDuwavZaxkTOaZio-vEMhYV&sz=w2000",
    "https://drive.google.com/thumbnail?id=10kvgir5mJBvsLlR0__HWoUXzMqsZ6YIx&sz=w2000",
    "https://drive.google.com/thumbnail?id=1Ac-ljp0fSuNv9TK8qJBBYTsS6Y3jL9Be&sz=w2000",
    "https://drive.google.com/thumbnail?id=1jawVTlxv3bMU7fkkTieWaaToFIhT-_Ug&sz=w2000",
    "https://drive.google.com/thumbnail?id=1_nJwEjTVdPXh_kfymdNfszrFCZ3IscR8&sz=w2000",
    "https://drive.google.com/thumbnail?id=1J1iH4OuUfkTNY5r07evf_3knU3buHaKe&sz=w2000",
    "https://drive.google.com/thumbnail?id=1vHBlp1heKEE5xdkt1W_mPEbgyKp9fz-6&sz=w2000",
    "https://drive.google.com/thumbnail?id=1h87C7qOAj2s6beqCAQc_a63-j1AnSCyF&sz=w2000",
    "https://drive.google.com/thumbnail?id=1G4BZw_V1VPExtGcmaMVaAG_YmU_lWZkE&sz=w2000"
  ];

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "flex";
  }

  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }

  function changeImage(step) {
    currentIndex += step;

    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    document.getElementById("lightbox-img").src = images[currentIndex];
  }

  // tutup pakai ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
  });

  // klik area gelap untuk tutup
  document.getElementById("lightbox").addEventListener("click", function(e) {
    if (e.target === this) closeLightbox();
  });

