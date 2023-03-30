let urlApi = "";
const room = document.querySelector(".room");
const price = document.querySelector(".price");
const capasity = document.querySelector(".capasity");
const roomSize = document.querySelector(".room-size");
const view = document.querySelector(".view");
const roomText = document.querySelector(".room-text");
const roomTypeImage = document.querySelectorAll(".room-type-image");

async function fetchRoomData() {
  const response = await fetch(urlApi);
  return await response.json();
}
let getRoomData = () => {
  urlApi = "http://localhost:3001/";

  let res = fetchRoomData()
    .then((response) => {
        for(let i = 0;i < response.roomData.length;i++){
          console.log(roomTypeImage[i].alt);
          if(response.roomData[i].alt === roomTypeImage[i].alt){
            room.innerHTML = response.roomData[i].name;
            roomText.innerHTML = response.roomData[i].text;
            price.innerHTML = response.roomData[i].type.price;
            capasity.innerHTML = response.roomData[i].type.capasity;
            roomSize.innerHTML = response.roomData[i].type.room_size;
            view.innerHTML = response.roomData[i].type.view;
          }
        }
    })
    .catch((err) => {
      console.log(err);
    });
};
getRoomData();
