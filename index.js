const modal = document.getElementById("Modal");
const btnModal = document.getElementById("btnModal");
const closeBtn = document.getElementById("closebtn");


function  openModal() {
    modal.style.display = "block";
};

btnModal.addEventListener("click", openModal);

function closeModal() {
    modal.style.display = "none";
};

closeBtn.addEventListener("click", closeModal);

function outSideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

window.addEventListener("click", outSideClick);

