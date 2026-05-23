const API_URL = "https://kalixo.pythonanywhere.com";

document.getElementById("apiBtn").addEventListener("click", async () => {

  try{

    const response = await fetch(`${API_URL}/api/message`);
    const data = await response.json();

    document.getElementById("apiMessage").innerText = data.message;

  }catch(error){

    document.getElementById("apiMessage").innerText =
    "Backend connection failed";

  }

});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try{

    const response = await fetch(`${API_URL}/api/contact`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });

    const result = await response.json();

    alert(result.message);

    form.reset();

  }catch(error){

    alert("Failed to send message");

  }

});
