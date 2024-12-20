const button = document.getElementById("projectBtn");

// Όταν το ποντίκι περνά πάνω από το κουμπί
button.addEventListener("mouseover", function() {
    button.classList.add("btn-success");
    button.classList.remove("btn-outline-dark");
    button.style.color = "white";  // Τα γράμματα παραμένουν λευκά
});

// Όταν το ποντίκι φεύγει από το κουμπί
button.addEventListener("mouseout", function() {
    button.classList.remove("btn-success");
    button.classList.add("btn-outline-dark");
    button.style.color = "black";  // Τα γράμματα επιστρέφουν στο κανονικό τους χρώμα
});

// Παίρνουμε το κουμπί με το id "myBtn"
mybutton = document.getElementById("myBtn");

// Όταν ο χρήστης κάνει scroll στην σελίδα, καλείται η συνάρτηση scrollFunction()
window.onscroll = function() {scrollFunction()};

// Συνάρτηση που ελέγχει την κατάσταση του scroll και δείχνει το κουμπί
function scrollFunction() {
    // Αν η σελίδα έχει μετακινηθεί περισσότερο από 20px από την κορυφή, εμφανίζουμε το κουμπί
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Όταν ο χρήστης πατήσει το κουμπί, το scroll πηγαίνει στην κορυφή της σελίδας
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// JavaScript to synchronize the modals and carousel
const cardCarousel = document.querySelector('#carouselExample .carousel-inner');
const modalCarousel = document.querySelector('#enlargedCarousel .carousel-inner');
cardCarousel.querySelectorAll('img').forEach((img, index) => {
  img.addEventListener('click', () => {
// Activate the corresponding slide in the modal carousel
const activeItem = modalCarousel.querySelector('.active');
if (activeItem) activeItem.classList.remove('active');
modalCarousel.children[index].classList.add('active');
});
});