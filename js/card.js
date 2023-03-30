let urlApi = "";
const wellness = document.querySelectorAll(".experience-name");
const heading = document.querySelectorAll(".experience-heading");
const textValue = document.querySelectorAll(".textValue");
const experienceImage = document.querySelectorAll(".experience-image")

async function fetchData() {
  const response = await fetch(urlApi);
  return await response.json();
}
getData = () => {
  urlApi = "http://localhost:3000/";

  let res = fetchData()
    .then((response) => {
      for (let i = 0; i < wellness.length; i++) {
        wellness[i].innerHTML = response.cardData[i].text;
      }

      for (let j = 0; j < heading.length; i++) {
        heading[i].innerHTML = response.cardData[i].header;
      }

      for (let k = 0; k < text.length; k++) {
        text[i].innerHTML = response[i].paragraph;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
