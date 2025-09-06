const destinasiCards = document.querySelectorAll(".destinasi-card");

destinasiCards.forEach(card => {
  card.addEventListener("click", () => {
    // ambil data dari card
    const val = card.getAttribute("data-value");
    const harga = card.getAttribute("data-harga");
    const desc = card.getAttribute("data-deskripsi");
    const img = card.getAttribute("data-img");
    const nama = card.querySelector("b").innerText;

    // update ringkasan
    namaPaket.textContent = "Paket Wisata " + nama;
    deskripsi.textContent = desc;
    imgPaket.src = img;
    hargaEl.textContent = "Rp " + parseInt(harga).toLocaleString("id-ID");

    // update dropdown form kanan
    destinasi.value = val;

    // hitung ulang total
    updateRingkasan();
  });
});
