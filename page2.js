// Get service selected from Page-1
const service = localStorage.getItem("service");

// Display the selected service
document.getElementById("selectedService").textContent = service;

// Confirm Button
document.getElementById("confirmBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("date").value;
  const phone = document.getElementById("phone").value.trim();

  if (name === "" || date === "" || phone === "") {
    alert("Please fill all fields");
    return;
  }

  // Save appointment details in localStorage
  localStorage.setItem("appointment", JSON.stringify({
    service,
    name,
    date,
    phone
  }));

  // Redirect to Success Page
  window.location.href = "success.html";
});

// Back Button
document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});
