export default function headerButtonModule() {
    document.addEventListener("DOMContentLoaded", function () {
        const projectBtn = document.getElementById("projectBtn");
    
        if (projectBtn) {
        // Όταν ο χρήστης περνάει το ποντίκι πάνω από το κουμπί
        projectBtn.addEventListener("mouseenter", function () {
            projectBtn.classList.remove("btn-outline-dark");
            projectBtn.classList.add("btn-success");
        });
    
        // Όταν ο χρήστης βγάζει το ποντίκι από το κουμπί
        projectBtn.addEventListener("mouseleave", function () {
            projectBtn.classList.remove("btn-success");
            projectBtn.classList.add("btn-outline-dark");
        });
        }
    });
}  
