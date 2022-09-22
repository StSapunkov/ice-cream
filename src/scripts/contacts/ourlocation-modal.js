const refs = {
    openModalBtnContacts: document.querySelector("[data-contacts-modal-open]"),
    closeModalBtnContacts: document.querySelector("[data-contacts-modal-close]"),
    modal: document.querySelector("[data-contacts-modal]"),
};

refs.openModalBtnContacts.addEventListener("click", toggleModalcontacts);
refs.closeModalBtnContacts.addEventListener("click", toggleModalcontacts);

function toggleModalcontacts() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
}