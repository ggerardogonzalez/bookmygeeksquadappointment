const serviceButtons = document.querySelectorAll(".service-btn");
const nextBtn = document.getElementById("nextBtn");

let selectedService = "";

serviceButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove selection from all buttons
    serviceButtons.forEach(btn => btn.classList.remove("selected"));

    // Select clicked button
    button.classList.add("selected");
    selectedService = button.textContent;

    // Enable Next button
    nextBtn.disabled = false;
  });
});

nextBtn.addEventListener("click", () => {
  // Save selected service in localStorage
  localStorage.setItem("service", selectedService);

  // Go to Page-2
  window.location.href = "page2.html";
});
