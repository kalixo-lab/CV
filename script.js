const API_URL = "https://kalixo.pythonanywhere.com";

function scrollToApps(){
  document.getElementById("apps").scrollIntoView();
}

function sendMessage(){

  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  if(input.value.trim() === "") return;

  const div = document.createElement("div");

  div.className = "message";

  div.innerText = input.value;

  chatBox.appendChild(div);

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;

}

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try{

    const response = await fetch(`${API_URL}/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,
        password
      })
    });

    const result = await response.json();

    alert(result.message);

  }catch(error){

    alert("Server Error");

  }

});
