const refs = {
    openModalBtn: document.querySelector("[data-readr-more-modal-open]"),
    closeModalBtn: document.querySelector("[data-readr-more-modal-close]"),
    modal: document.querySelector("[data-readr-more-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal2);
refs.closeModalBtn.addEventListener("click", toggleModal2);

function toggleModal2() {
    // document.body.classList.toggle("readr-more-modal-open")
    refs.modal.classList.toggle("is-hidden");
}