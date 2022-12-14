{
   welcome = () => {
      console.log("Cześć miło mi że to widzisz! ;) ");
   }
   
   const onChangeClick = (button, section) => {
      button.addEventListener("click", () => {
         section.classList.toggle("section--hidden");
         button.classList.toggle("section__button--active");
         button.innerText = section.classList.contains("section--hidden")
            ? "Pokaż" : "Ukryj";
      });

   }

   init = () => {
      let aboutMeButton = document.querySelector(".js-aboutMeButton")
      let aboutMe = document.querySelector(".js-aboutMe")
      let climbButton = document.querySelector(".js-climbButton");
      let climb = document.querySelector(".js-climb");
      let travelButton = document.querySelector(".js-travelButton");
      let travel = document.querySelector(".js-travel");
      let jobButton = document.querySelector(".js-jobButton");
      let job = document.querySelector(".js-job");

      onChangeClick(aboutMeButton, aboutMe);
      onChangeClick(climbButton, climb);
      onChangeClick(travelButton, travel);
      onChangeClick(jobButton, job);

      welcome();
   }
   
   init();
}
