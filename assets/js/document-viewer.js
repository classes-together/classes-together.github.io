const preview = document.querySelector(".document-preview");

document.querySelectorAll(".document-tab").forEach((button) => {
  button.addEventListener("click", () => {
    preview.src = button.dataset.file;
  });
});
