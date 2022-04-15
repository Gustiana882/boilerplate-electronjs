// File ini diperlukan oleh file index.html dan akan
// dieksekusi dalam proses renderer untuk jendela itu.
// Tidak ada API Node.js yang tersedia dalam proses ini karena
// `Integrasi simpul` dimatikan. Gunakan `preload.js` untuk
// secara selektif mengaktifkan fitur yang diperlukan dalam rendering
// proses.

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})