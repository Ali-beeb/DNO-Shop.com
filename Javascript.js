const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfTzjYE8pa4OdDcb67IqLK9MTOmm8Fxd9qdTbS8vc_OOc63Jg/viewform?usp=header";

function signup(event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("new-password").value;
  
    // Send data to Google Form (via POST request)
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfTzjYE8pa4OdDcb67IqLK9MTOmm8Fxd9qdTbS8vc_OOc63Jg/viewform?usp=header";
    
    const formData = new FormData();
    formData.append("entry.1234567890", firstName);  // Replace with actual entry ID for First Name
    formData.append("entry.0987654321", lastName);   // Replace with actual entry ID for Last Name
    formData.append("entry.5678901234", email);      // Replace with actual entry ID for Email
    formData.append("entry.4321098765", password);   // Replace with actual entry ID for Password
    
    fetch(formUrl, {
      method: "POST",
      body: formData,
    }).then(() => {
      alert("Signup successful!");
      toggleSignupForm();
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("signup-btn").style.display = "none";
      const navLinks = document.getElementById("nav-links");
      const accountItem = document.createElement("li");
      accountItem.innerHTML = `<a href="#">Account (${firstName} ${lastName})</a>`;
      navLinks.appendChild(accountItem);
    }).catch((error) => {
      console.error("Error submitting form: ", error);
    });
  }
  