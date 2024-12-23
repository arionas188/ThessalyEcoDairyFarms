export default function myButtonModule() {
  document.addEventListener("DOMContentLoaded", function () {
    const mybutton = document.getElementById("myBtn");

    if (mybutton) {
      // Όταν ο χρήστης κάνει scroll στη σελίδα
      window.onscroll = function () {
        scrollFunction(mybutton);
      };

      // Όταν ο χρήστης πατήσει το κουμπί
      mybutton.addEventListener("click", topFunction);

      // Όταν ο χρήστης περνάει το ποντίκι πάνω από το κουμπί
      mybutton.addEventListener("mouseenter", function () {
        mybutton.classList.add("btn-success");
      });

      // Όταν ο χρήστης βγάζει το ποντίκι από το κουμπί
      mybutton.addEventListener("mouseleave", function () {
        mybutton.classList.remove("btn-success");
      });
    }

    // Συνάρτηση που ελέγχει την κατάσταση του scroll
    function scrollFunction(button) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    }

    // Συνάρτηση που πηγαίνει στην κορυφή της σελίδας
    function topFunction() {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, and Opera
    }
  });
}