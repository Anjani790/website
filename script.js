document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Acountax Solution!");

    
    const aboutSection = document.getElementById("about-us");
    const seeAllLink = document.querySelector('a[href*="about-us"]'); 

    if (aboutSection && seeAllLink) {
        seeAllLink.addEventListener("click", function (event) {
            event.preventDefault();
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500, 
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
        }
    });

    
    const toggleBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".navbar");

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});
function showMap() {
    document.querySelector('.map-container').style.display = 'none';
    document.getElementById('mapFrame').style.display = 'block';
}

  var swiper = new Swiper(".services-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 },
    },
  });

  function toggleReviewForm() {
    const form = document.getElementById("review-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
  }

  async function submitReview() {
    console.log("Submit button clicked!");  
    
    const feedback = document.getElementById("user-feedback").value;
    const name = document.getElementById("user-name").value;
  
    if (!feedback || !name || name.toLowerCase() === "your name") {
      alert("Please provide both name and feedback.");
      return;
    }
  
    const response = await fetch("http://localhost:5000/submit-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, feedback }),
    });
  
    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      document.getElementById("user-feedback").value = "";
      document.getElementById("user-name").value = "";
      document.getElementById("review-form").style.display = "none";
    } else {
      alert(result.message);
    }
  }
  

  fetch("http://localhost:5000/")
    .then(response => response.text())
    .then(data => {
      document.getElementById("output").innerText = data;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("output").innerText = "Error fetching data from server.";
    });
  

  
 




