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
      const aboutMeButton = document.querySelector(".js-aboutMeButton")
      const aboutMe = document.querySelector(".js-aboutMe")
      const climbButton = document.querySelector(".js-climbButton");
      const climb = document.querySelector(".js-climb");
      const travelButton = document.querySelector(".js-travelButton");
      const travel = document.querySelector(".js-travel");
      const jobButton = document.querySelector(".js-jobButton");
      const job = document.querySelector(".js-job");

      onChangeClick(aboutMeButton, aboutMe);
      onChangeClick(climbButton, climb);
      onChangeClick(travelButton, travel);
      onChangeClick(jobButton, job);

      welcome();
   }
   
   init();
}
