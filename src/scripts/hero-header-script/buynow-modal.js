const refs = {
    openModalBtnBuynow: document.querySelector("[data-buy-now-modal-open]"),
    closeModalBtnBuynow: document.querySelector("[data-buy-now-modal-close]"),
    modal: document.querySelector("[data-buy-now-modal]"),
};

refs.openModalBtnBuynow.addEventListener("click", toggleModalBuynow);
refs.closeModalBtnBuynow.addEventListener("click", toggleModalBuynow);

function toggleModalBuynow() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
}