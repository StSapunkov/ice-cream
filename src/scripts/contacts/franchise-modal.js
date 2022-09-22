const refs = {
    openModalBtnFranchise: document.querySelector("[data-franchise-modal-open]"),
    closeModalBtnFranchise: document.querySelector("[data-franchise-modal-close]"),
    modal: document.querySelector("[data-franchise-modal]"),
};

refs.openModalBtnFranchise.addEventListener("click", toggleModalFranchise);
refs.closeModalBtnFranchise.addEventListener("click", toggleModalFranchise);

function toggleModalFranchise() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
}