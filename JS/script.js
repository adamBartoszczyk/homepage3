console.log("Cześć miło mi że to widzisz! ;) ");
let aboutMeButton = document.querySelector(".js-aboutMeButton")
let aboutMe = document.querySelector(".js-aboutMe")
let climbButton = document.querySelector(".js-climbButton");
let climb = document.querySelector(".js-climb");
let travelButton = document.querySelector(".js-travelButton");
let travel = document.querySelector(".js-travel");
let jobButton = document.querySelector(".js-jobButton");
let job = document.querySelector(".js-job");


aboutMeButton.addEventListener("click", () => {
   aboutMe.classList.toggle("section--hidden");
   aboutMeButton.classList.toggle("section__button--active")
   if (aboutMe.classList.contains("section--hidden")) {
      aboutMeButton.innerText = "Pokaż";
   }
   else {
      aboutMeButton.innerText = "Ukryj"
   }
});

climbButton.addEventListener("click", () => {
   climb.classList.toggle("section--hidden");
   climbButton.classList.toggle("section__button--active");
   climbButton.innerText = climb.classList.contains("section--hidden")
      ? "Pokaż" : "Ukryj";
});

travelButton.addEventListener("click", () => {
   travel.classList.toggle("section--hidden");
   travelButton.classList.toggle("section__button--active")
   travelButton.innerText = travel.classList.contains("section--hidden")
      ? "Pokaż" : "Ukryj";
});

jobButton.addEventListener("click", () => {
   job.classList.toggle("section--hidden");
   jobButton.classList.toggle("section__button--active")
   if (job.classList.contains("section--hidden")) {
      jobButton.innerText = "Pokaż";
   }
   else {
      jobButton.innerText = "Ukryj";
   }
});

