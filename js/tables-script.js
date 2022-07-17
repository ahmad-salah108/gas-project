$(document).ready(function () {
  $(".table-striped").DataTable();
});
window.onload = function(){
  document.querySelector('#DataTables_Table_0_filter label input').classList.add('form-control');
}

document.querySelector('.add-btn').addEventListener('click', ()=>{
  location.href = 'tubes-form.html';
});