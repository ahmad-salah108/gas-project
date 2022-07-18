$(document).ready(function () {
  $(".table-striped").DataTable();
});

window.onload = function () {
  // create the btn-add
  let btn = document.createElement("button");
  btn.textContent = "+ إضافة صف جديد";
  btn.setAttribute("type", "button");
  btn.classList.add("btn", "btn-add");
  setTimeout(() => {
    // add class to search btn
    document
      .querySelector("#DataTables_Table_0_filter label input")
      .classList.add("form-control");
    // add the btn-add
    document
      .querySelector("#DataTables_Table_0_wrapper")
      .insertBefore(btn, document.querySelector("#DataTables_Table_0_filter"));
    // convert to form
    document.querySelector(".btn-add").addEventListener("click", () => {
      location.href = "tubes-form.html";
    });
  }, 100);
};

function editBtns(){
  location.href = 'tubes-edit.html';
}

function deleteBtns() {
  Swal.fire({
    title: "هل تريد حذف الصف؟",
    confirmButtonText: "نعم",
    cancelButtonText: "لا",
    showCancelButton: true,
    showCloseButton: true,
  });
}