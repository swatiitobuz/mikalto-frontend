const navbarLink = document.getElementsByClassName("nav-link");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const listItems = document.querySelector("ul");
const checkInDate = document.querySelector("#start");
const checkOutDate = document.querySelector("#end");
const adultCount = document.querySelector("#select-adult");
const childCount = document.querySelector("#select-child");
let urlApi = "";
const wellness = document.querySelectorAll(".experience-name");
const heading = document.querySelectorAll(".experience-heading");
const textValue = document.querySelectorAll(".textValue");
const experienceImage = document.querySelectorAll(".experience-image");
const room = document.querySelectorAll(".room");
const price = document.querySelectorAll(".price");
const capasity = document.querySelectorAll(".capasity");
const roomSize = document.querySelectorAll(".room-size");
const view = document.querySelectorAll(".view");
const roomText = document.querySelectorAll(".room-text");
const bed = document.querySelectorAll(".bed");
const roomTypeImage = document.querySelectorAll(".room-type-image");

//header menu

menuIcon.addEventListener("click", function () {
  for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].classList.remove("header-items");
  }
  closeIcon.classList.remove("header-items");
  menuIcon.classList.add("header-items");
});
closeIcon.addEventListener("click", () => {
  for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].classList.add("header-items");
  }
  menuIcon.classList.remove("header-items");
  closeIcon.classList.add("header-items");
});

//swiper slider

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//card data

async function fetchCardData() {
  const response = await fetch(urlApi);
  return response.json();
}

let getCardData = () => {
  urlApi = "http://127.0.0.1:3000/card";

  let res = fetchCardData()
    .then((response) => {
      console.log(response);

      for (let i = 0; i < experienceImage.length; i++) {
        console.log(response.cardData[i].image);
        experienceImage[i].src = response.cardData[i].image;
      }

      for (let i = 0; i < wellness.length; i++) {
        wellness[i].innerHTML = response.cardData[i].text;
      }

      for (let i = 0; i < heading.length; i++) {
        heading[i].innerHTML = response.cardData[i].header;
      }

      for (let i = 0; i < textValue.length; i++) {
        textValue[i].innerHTML = response.cardData[i].paragraph;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

getCardData();

//room type data

async function fetchRoomData() {
  const response = await fetch(urlApi);
  return await response.json();
}
let getRoomData = () => {
  urlApi = "http://localhost:3001";

  let res = fetchRoomData()
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.roomData.length; i++) {
        room[i].innerHTML = response.roomData[i].name;
        console.log(response.roomData[i].type.price);
        price[i].innerHTML = response.roomData[i].type.price;
        capasity[i].innerHTML = response.roomData[i].type.capasity;
        bed[i].innerHTML = response.roomData[i].type.bed;
        console.log(response.roomData[i].type.bed_size);
        roomSize[i].innerHTML = response.roomData[i].type.room_size;
        roomTypeImage[i].src = response.roomData[i].imgUrl;
        view[i].innerHTML = response.roomData[i].type.view;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

getRoomData();

function formSubmit(event) {
  event.preventDefault();
  alert("working");
  fetch("http://localhost:5000", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: `{
      id:${Date.now()},
      checkInDate:${checkInDate.value},
      checkOutDate:${checkOutDate.value},
      noOfAdults:${adultCount.value},
      noOfChildren:${childCount.value}}`,
  }).catch((error) => {
    console.log(error);
  });
}
