document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
  
        // Hide all content
        contents.forEach((c) => c.classList.add("hidden"));
  
        // Show selected content
        const targetId = btn.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.remove("hidden");
        }
      });
    });
  });
  
