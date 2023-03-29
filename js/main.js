const navbarLink = document.getElementsByClassName("nav-link");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const listItems = document.querySelector("ul");

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


