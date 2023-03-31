const navbarLink = document.getElementsByClassName("nav-link");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const listItems = document.querySelector("ul");
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

function dropDown() {
  listItems.classList.toggle("dropdown-toggle");
}

let items = document.querySelectorAll("#list li");
for (let i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    document.getElementById("language").value = this.innerHTML;
    console.log(this.innerHTML);
    dropDown();
  };
}
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

async function fetchCardData() {
  const response = await fetch(urlApi);
  return response.json();
}
let getCardData = () => {
  urlApi = "http://127.0.0.1:3000/";

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

async function fetchRoomData() {
  const response = await fetch(urlApi);
  return await response.json();
}
let getRoomData = () => {
  urlApi = "http://localhost:3001/";

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
