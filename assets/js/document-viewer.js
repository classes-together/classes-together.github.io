document.querySelectorAll(".document-group").forEach((group) => {
  const preview = group.querySelector(".document-preview");
  const tabs = group.querySelectorAll(".document-tab");

  tabs.forEach((button) => {
    button.addEventListener("click", () => {
      preview.src = button.dataset.file;

      tabs.forEach((tab) => {
        tab.setAttribute("aria-pressed", "false");
      });

      button.setAttribute("aria-pressed", "true");
    });
  });
});
