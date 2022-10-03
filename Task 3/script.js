/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", (e) => {
  e.preventDefault();
  button.style.display = "none";
  document.getElementById("message").style.display = "none";
  getUsers();
});

const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const card = document.createElement("div");
      const loginValue = document.createElement("h3");
      loginValue.textContent = `USER: ${data[i].login}`;
      const avatar = document.createElement("img");
      avatar.setAttribute("src", data[i].avatar_url);
      avatar.setAttribute("width", "200px");
      avatar.setAttribute("height", "200px");
      card.append(loginValue, avatar);
      card.style.border = "5px solid black";
      output.append(card);
    }
    output.style.display = "flex";
    output.style.flexWrap = "wrap";
    output.style.justifyContent = "center";
    output.style.gap = "2rem";
    output.style.alignContent = "space-around";
  } catch (error) {
    alert(error);
  }
};
