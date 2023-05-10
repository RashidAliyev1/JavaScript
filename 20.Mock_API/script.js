const addBtn = document.querySelector("#addbtn");
const cards = document.querySelector(".cards");

addBtn.addEventListener("click", function () {
  window.location = "addUser.html";
});

async function getAllData() {
  let respons = await fetch("http://localhost:8080/users");
  let data = await respons.json();
  cards.innerHTML = "";
  data.forEach((elem) => {
    let card = document.createElement("div");
    card.innerHTML = `
        <div>
            <h5>${elem.username}</h5>
            <h6>${elem.email}</h6>
        </div>
      <div class="icons d-flex gap-3">
        <i class="fa-solid fa-pen text-success edit style="pointer-events:auto;"  onclick=editUser(${elem.id})></i>
        <i class="fa-solid fa-trash-can text-danger delete "  onclick=delUser(${elem.id})></i>
      </div>
      `;
      
    card.classList.add(
      "col-5",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "bg-secondary",
      "p-3"
    );
    cards.append(card);
  });
}
getAllData();

async function delUser(id) {
  await fetch(`http://localhost:8080/users/${id}`, {
    method: "DELETE",
  });
  getAllData();
}

 function editUser(id) { 
  localStorage.setItem("UserId",id);
  window.location = "editUser.html";
}