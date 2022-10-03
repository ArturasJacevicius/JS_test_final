/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const output = document.querySelector("#output");

const getCarsList = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    data.sort((a, b) => (a.brand > b.brand ? 1 : -1));

    for (let i = 0; i < data.length; i++) {
      const carBrand = document.createElement("h2");
      carBrand.textContent = `${data[i].brand} models:`;
      const card = document.createElement("div");

      card.append(carBrand);

      output.append(card);
      for (let j = 0; j < data[i].models.length; j++) {
        const carModel = document.createElement("h6");
        carModel.textContent = data[i].models[j];
        carModel.style.border = "1px solid black";
        carBrand.append(carModel);
      }
    }
    output.style.display = "flex";
    output.style.flexWrap = "wrap";
    output.style.justifyContent = "space-evenly";
    output.style.gap = "2rem";
    output.style.alignContent = "strech";
  } catch (error) {
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector("h1").innerText = "ERROR: " + error;
    document.querySelector("h1").style.fontSize = "8rem";
  }
};
getCarsList();
