const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

document
  .getElementById("registerCustomer")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);
