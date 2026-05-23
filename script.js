const API_URL = "https://kalixo.pythonanywhere.com";

// Test backend connection
fetch(`${API_URL}/api/message`)
  .then(response => response.json())
  .then(data => {

    console.log(data.message);

    const msg = document.createElement("h2");
    msg.innerText = data.message;

    msg.style.color = "#d4af37";
    msg.style.textAlign = "center";
    msg.style.marginTop = "20px";

    document.body.appendChild(msg);

  })
  .catch(error => {
    console.log("Backend connection failed");
  });

// Contact form
const form = document.getElementById("contactForm");

if(form){

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    try{

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      alert(result.message);

      form.reset();

    }catch(error){

      alert("Failed to send message");

    }

  });

}
