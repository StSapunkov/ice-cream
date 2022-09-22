 (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-products-modal-open]"),
      openModalBtn2: document.querySelector("[data-products-modal-open2]"),
      openModalBtn3: document.querySelector("[data-products-modal-open3]"),
      closeModalBtn: document.querySelector("[data-products-modal-close]"),
      modal: document.querySelector("[data-products-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
    refs.openModalBtn3.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();