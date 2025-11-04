console.log("✅ file script.js berhasil terhubung");

const inputNama = document.querySelector("#nama");
const inputWA = document.querySelector("#whatsapp");
const inputJumlah = document.querySelector("#jumlah");
const inputPedas = document.querySelector("#spice-level");
const inputMinum = document.querySelector("#drink-choice");
const inputNasi = document.querySelector("#extra-rice");
const inputSambal = document.querySelector("#extra-sauce");
const inputNotes = document.querySelector("#notes");
const tombolMenu = document.querySelectorAll(".ambil-menu");

const previewNama = document.querySelector("#preview-nama");
const previewWA = document.querySelector("#preview-wa");
const previewMenu = document.querySelector("#preview-menu");
const previewJumlah = document.querySelector("#preview-jumlah");
const previewPedas = document.querySelector("#preview-pedas");
const previewMinum = document.querySelector("#preview-minum");
const previewNasi = document.querySelector("#preview-nasi");
const previewSambal = document.querySelector("#preview-sambal");
const previewNotes = document.querySelector("#preview-notes");

function updatePreview() {
  if (inputNama.value.trim() === "") {
    previewNama.textContent = "-";
  } else {
    previewNama.textContent = inputNama.value.trim();
  }

  if (inputWA.value.trim() === "") {
    previewWA.textContent = "-";
  } else {
    previewWA.textContent = inputWA.value.trim();
  }

  previewJumlah.textContent = inputJumlah.value || "1";
  previewPedas.textContent = inputPedas.value || "-";
  previewMinum.textContent = inputMinum.value || "-";
  previewNasi.textContent = inputNasi.value || "0";
  previewSambal.textContent = inputSambal.value || "-";

  if (inputNotes.value.trim() === "") {
    previewNotes.textContent = "-";
  } else {
    previewNotes.textContent = inputNotes.value.trim();
  }

  // Menu
  if (!previewMenu.textContent || previewMenu.textContent.trim() === "") {
    previewMenu.textContent = "-";
  }
}
[
  inputNama,
  inputWA,
  inputJumlah,
  inputPedas,
  inputMinum,
  inputNasi,
  inputSambal,
  inputNotes,
].forEach((el) => {
  el.addEventListener("input", () => {
    console.log(`📝 Input "${el.name}" berubah: ${el.value}`);
    updatePreview();
  });
});

tombolMenu.forEach((btn) => {
  btn.addEventListener("click", () => {
    const menuDipilih = btn.dataset.menu;
    previewMenu.textContent = menuDipilih;
    console.log(`🛒 Menu dipilih: ${menuDipilih}`);
    updatePreview();
  });
});

updatePreview();
