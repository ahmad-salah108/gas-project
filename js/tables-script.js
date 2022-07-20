// load datatable
$(document).ready(function () {
  $(".table-striped").DataTable();
});

// load add button onload
$(document).ready(loadBtn);

// add button load function
function loadBtn() {
  let btn = [];
  $(".table-container").each(function (i, e) {
    // create the btn-add
    btn[i] = document.createElement("button");
    btn[i].textContent = "+ إضافة صف جديد";
    btn[i].setAttribute("type", "button");
    btn[i].classList.add("btn", "btn-add");

    setTimeout(() => {
      // add class to search btn
      $(`#DataTables_Table_${i}_filter label input`).addClass("form-control");
      // add form-select class
      $('.dataTables_length select').addClass('form-select');
      // add the btn-add
      $(`#DataTables_Table_${i}_filter`).before(btn[i]);
    }, 100);
  });
}

function editBtns() {
  location.href = "tubes-edit.html";
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
