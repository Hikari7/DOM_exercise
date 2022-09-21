const inputNote = document.getElementById("add-input");
const addBtn = document.getElementById("add-btn");
const ul = document.getElementById("list");

function addLists() {
  const li = document.createElement("li");
  li.innerHTML = `<p>${inputNote.value}</p>
    <p>
        <i class="fa fa-pencil-square-o"></i>
        <i class="fa fa-times"></i>
    </p>
    <input type="text" class="edit-note">`;

  ul.appendChild(li);
  inputNote.value = "";
}

//once clicking it, addList() will be invoked
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addLists();
});
