document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://c47-lawkase.onrender.com/send-email", {  
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        
        if (response.ok) {
            document.getElementById("successMessage").style.display = "block"; // Show success message
            document.getElementById("successMessage").innerText = result.message; // Show server response message
            this.reset(); // Reset form after successful submission
        } else {
            alert("Error: " + result.message); // Show backend error message
        }
    } catch (error) {
        alert("An unexpected error occurred. Please try again!"); 
    }
});
