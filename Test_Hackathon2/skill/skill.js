let skillData = JSON.parse(localStorage.getItem("skillData")) || [];

if (!localStorage.getItem("skillData")) {
  localStorage.setItem("skillData", JSON.stringify(skillData));
}
let addSkill = document.getElementById("updateDataForm");
let overlay = document.getElementById("overlay");
document.querySelector(".add-skill").addEventListener("click", function () {
  console.log(overlay);
  if (addSkill.style.display === "none") {
    addSkill.style.display = "flex";
  } else {
    addSkill.style.display === "none";
  }
  if (overlay.style.display === "none") {
    overlay.style.display = "block";
  } else {
    overlay.style.display === "none";
  }
});
document.getElementById("cancelUpdate").addEventListener("click", function () {
  addSkill.style.display = "none";
  overlay.style.display = "none";
});
document.getElementById("close-button").addEventListener("click", function () {
  addSkill.style.display = "none";
  overlay.style.display = "none";
});
function render() {
  skillData = JSON.parse(localStorage.getItem("skillData")) || [];
  skillData.forEach((object, index) => {
    object.id = index + 1;
  });
  document.getElementById("table-change").innerHTML = "";
  for (const key of skillData) {
    document.getElementById("table-change").innerHTML += ` <tr>
                <td class="table-th" width="10%">${key.id}</td>
                <td class="table-th">${key.skillName}</td>
                <td class="table-th"><img src="${key.skillImg}" alt=""></td>
                <td class="table-th">${key.skillExp}</td>
                <td class="table-th">${key.dateAdd}</td>
                <td class="table-th"><button type="button" id="deleteBtn" onclick="Delete(${key.id})" >Xóa</button></td>
              </tr>`;
  }
}
render();
document.getElementById("submitUpdate").addEventListener("click", function () {
  skillData = JSON.parse(localStorage.getItem("skillData")) || [];
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  let skill = {
    id: `${skillData.length + 1}`,
    skillName: `${document.getElementById("Dataname").value}`,
    skillExp: `${document.getElementById("expNum").value}`,
    skillImg: `${document.getElementById("imagelink").value}`,
    dateAdd: formattedToday,
  };
  let skillName = document.getElementById("Dataname").value;
  let skillExp = document.getElementById("expNum").value;
  let skillImg = document.getElementById("imagelink").value;
  if (skillName === "") {
    alert("Tên kỹ năng không được để trống");
  }
  if (skillExp === "") {
    alert("Năm kinh nghiệm không được để trống");
  }
  if (skillImg === "") {
    alert("Hình ảnh của kỹ năng không được để trống");
  }

  const profileIndex = skillData.findIndex(
    (item) => item.skillName === document.getElementById("Dataname").value
  );
  if (profileIndex == -1 && skillName && skillImg && skillExp) {
    skillData.push(skill);
    localStorage.setItem("skillData", JSON.stringify(skillData));
  } else if (profileIndex !== -1) {
    alert("Trùng kỹ năng");
  }
  render();
  addSkill.style.display = "none";
  overlay.style.display = "none";
});

function Delete(id) {
  skillData = JSON.parse(localStorage.getItem("skillData")) || [];
  let confirmDelete = confirm("Bạn chắc chắn muốn xóa chứ?");
  if (confirmDelete) {
    skillData.splice(id - 1, 1);
  }
  localStorage.setItem("skillData", JSON.stringify(skillData));
  render();
}
