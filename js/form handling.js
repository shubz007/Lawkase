document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

   
       

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://c47-lawkase.onrender.com/send-email", {  // <-- Replace with your Render backend URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset(); // Reset form after submission
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        alert("Response Submited Thank you");
    }
    document.getElementById("successMessage").style.display = "block"; // Show success message
    this.reset(); // Reset the form fields
});