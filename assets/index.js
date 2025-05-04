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
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleBtn");
    const stepsContent = document.getElementById("stepsContent");
    const arrowIcon = document.getElementById("arrowIcon");
    const spanText = toggleBtn.querySelector("span");
    const topPlaceholder = document.getElementById("buttonPlaceholderTop");
    const bottomPlaceholder = document.getElementById("buttonPlaceholderBottom");
  
    let expanded = false;
  
    // Move button to top at start
    topPlaceholder.appendChild(toggleBtn);
  
    toggleBtn.addEventListener("click", () => {
      expanded = !expanded;
  
      // Toggle hidden class
      stepsContent.classList.toggle("hidden", !expanded);
  
      // Arrow rotation
      arrowIcon.classList.toggle("rotate-180", expanded);
  
      // Text update
      spanText.textContent = expanded ? "Show Less" : "Read More";
  
      // Move button position
      if (expanded) {
        bottomPlaceholder.appendChild(toggleBtn);
      } else {
        topPlaceholder.appendChild(toggleBtn);
      }
    });
  });