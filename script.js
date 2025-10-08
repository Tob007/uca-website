document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const buttons = document.querySelectorAll("section button");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // If not the last section, scroll to the next one
      if (index + 1 < sections.length) {
        sections[index + 1].scrollIntoView({
          behavior: "smooth",
        });
      } else {
        // If last button, go back to the first section
        sections[0].scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
