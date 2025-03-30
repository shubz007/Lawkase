const formElem = document.getElementById("contactForm");
const alertElem = document.querySelector(".alert");
const buttonElem = document.querySelector(".submitBtn");

formElem.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(formElem);
  const data = Object.fromEntries(formData.entries());

  const url = "https://c47-lawkase.onrender.com/send-email";
  try {
    buttonElem.textContent = "Submitting...";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    alertElem.textContent = "Message sent successfully! 🎊";
    alertElem.style.opacity = 100;
    setTimeout(() => {
      alertElem.style.opacity = 0;
      buttonElem.textContent = "Submit";
      formElem.reset();
    }, 2000);
  } catch (err) {
    alertElem.classList.remove("alert-success");
    alertElem.classList.add("alert-danger");
    alertElem.textContent = "Something went wrong";
  }
});
