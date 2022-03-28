// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();


// document.querySelector("form").addEventListener("submit", event => {
//     event.preventDefault();

//     const inputList = event.target.elements;
//     console.log("Input Element List", inputList);

//     const requestData = {
//       emailAddy: inputList.emailAddy.value,
//       name: inputList.name.value,
//       message: inputList.message.value
//     };
//     console.log("request Body", requestData);

//     axios
//       .post(`${process.env.EMAIL_API}`, requestData)
//       .catch(error => {
//         console.log("It puked", error);
//       });
//   });



function updateList() {
  const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
    return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);

  });

  document.querySelectorAll(".selected-circle").forEach( c => c.classList.remove("selected-circle"));

  document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");

}

updateList();

window.addEventListener('scroll', () => {
  updateList();
})


//smooth scroll snap not working
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


//hamburger
