// Purpose: To handle form submission and file upload
    function toggleResumeUpload() {
      var role = document.getElementById("autoSizingSelect").value;
      var resumeField = document.getElementById("resumeUpload");
      
      if (role === "intern" || role === "associate" || role === "trainee") {
        resumeField.style.display = "block";
      } else {
        resumeField.style.display = "none";
      }
    }
// Handling form submission
    document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Collect all form data including file

    try {
        const response = await fetch("https://c47-lawkase.onrender.com/joinus", { 
            method: "POST",
            body: formData // Send form data with file
        });

        const result = await response.json();
        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset(); // Reset form after submission
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        alert("Something went wrong. Please try again later.");
    }
});