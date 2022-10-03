/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInputValue = document.getElementById("search").value;
  const weightInPounds = Number((userInputValue * 2.2046).toFixed(2));
  const weightInGrams = userInputValue / 0.001;
  const weightInOz = Number((userInputValue * 35.274).toFixed(2));

  const weightInPoundsOutput = document.createElement("h1");
  weightInPoundsOutput.innerText = `Your weight in pounds is ${weightInPounds}`;
  weightInPoundsOutput.classList.add("headline"); // vietoj to, kad rašyčiau naujai visą elemento stilių tai aš tiesiog pasiskolinau 'headline' klasės stilių. Tikiuosi galima taip :)
  weightInPoundsOutput.style.paddingTop = "50px"; // čia tik parodau, kad moku ir taip keisti stilių. Suprantu, kad overridinu tą patį property antrą kartą.
  output.append(weightInPoundsOutput);

  const weightInGramsOutput = document.createElement("h1");
  weightInGramsOutput.innerText = `Your weight in grams is ${weightInGrams}`;
  weightInGramsOutput.classList.add("headline");
  weightInGramsOutput.style.paddingTop = "50px";
  output.append(weightInGramsOutput);

  const weightInOzOutput = document.createElement("h1");
  weightInOzOutput.innerText = `Your weight in oz is ${weightInOz}`;
  weightInOzOutput.classList.add("headline");
  weightInOzOutput.style.paddingTop = "50px";
  output.append(weightInOzOutput);
});
