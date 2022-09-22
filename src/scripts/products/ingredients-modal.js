 (() => {
    const refs = {
      openModalBtn1: document.querySelector("[data-products-modal-open1]"),
      openModalBtn2: document.querySelector("[data-products-modal-open2]"),
      openModalBtn3: document.querySelector("[data-products-modal-open3]"),
      closeModalBtn: document.querySelector("[data-products-modal-close]"),
      modal: document.querySelector("[data-products-modal]"),
    };
  
    refs.openModalBtn1.addEventListener("click", toggleModal2);
    refs.openModalBtn2.addEventListener("click", toggleModal2);
    refs.openModalBtn3.addEventListener("click", toggleModal2);
    refs.closeModalBtn.addEventListener("click", toggleModal2);
  
    function toggleModal2() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();