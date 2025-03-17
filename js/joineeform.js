function toggleResumeUpload() {
    var role = document.getElementById("autoSizingSelect").value;
    var resumeField = document.getElementById("resumeUpload");
    var resumeInput = document.getElementById("resume");

    if (role === "intern" || role === "associate" || role === "trainee") {
        resumeField.style.display = "block";
    } else {
        resumeField.style.display = "none";
        resumeInput.value = ""; // Clear file input when hidden
    }
}

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const successAlert = document.getElementById("successAlert");

    try {
        const response = await fetch("https://c47-lawkase.onrender.com/joinus", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        
        if (response.ok) {
            successAlert.innerText = result.message || "Your response has been noted!";
            successAlert.style.backgroundColor = "#4CAF50"; 
            successAlert.style.display = "block";
            this.reset();

            setTimeout(() => {
                successAlert.style.display = "none";
            }, 3000);
        } else {
            throw new Error(result.error || "Submission failed");
        }
    } catch (error) {
        successAlert.innerText = error.message;
        successAlert.style.backgroundColor = "#f44336";
        successAlert.style.display = "block";

        setTimeout(() => {
            successAlert.style.display = "none";
        }, 5000);
    }
});
