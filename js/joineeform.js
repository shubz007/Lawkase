function toggleResumeUpload() {
    var role = document.getElementById("autoSizingSelect").value;
    var resumeField = document.getElementById("resumeUpload");
    var resumeInput = document.getElementById("resume");
    var resumeLabel = document.querySelector(".custom-file-label");

    if (role === "intern" || role === "associate" || role === "trainee") {
        resumeField.style.display = "block";
    } else {
        resumeField.style.display = "none";
        resumeInput.value = ""; // Clear file input when hidden
        resumeLabel.innerText = "Choose file"; // Reset file label
    }
}

const buttonElem = document.querySelector(".submitBtn");

// Updates the file input label when a file is selected
function updateFileName() {
    var resumeInput = document.getElementById("resume");
    var resumeLabel = document.querySelector(".custom-file-label");

    if (resumeInput.files.length > 0) {
        resumeLabel.innerText = resumeInput.files[0].name;
    } else {
        resumeLabel.innerText = "Choose file";
    }
}

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const successAlert = document.getElementById("successAlert");

    try {
        buttonElem.textContent = "Sending Message...";
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

            // Reset file label after form submission
            document.querySelector(".custom-file-label").innerText = "Choose file";

            setTimeout(() => {
                successAlert.style.display = "none";
                buttonElem.textContent = "Send Mesaage";
                formElem.reset();
            }, 2000);
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
