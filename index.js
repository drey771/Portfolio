alert(`Welcome to Drey Portfolio `);

let header = document.querySelector("#header");
let profile = document.querySelector("displayMain");

const showMain = () => {
  header.style.display = "flex";
};

setTimeout(showMain, 3000);
