let projectData = JSON.parse(localStorage.getItem("projectData")) || [];
let currentProjectData =
  JSON.parse(localStorage.getItem("currentProjectData")) || [];

render();
document.getElementById("submitUpdate").addEventListener("click", function () {
  projectData = JSON.parse(localStorage.getItem("projectData")) || [];
  let project = {
    id: `${projectData.length + 1}`,
    projectName: `${document.getElementById("Dataname").value}`,
    projectImg: `${document.getElementById("imagelink").value}`,
    projectTech: `${document.getElementById("tech-used").value}`,
    projectLink: `${document.getElementById("gitlink").value}`,
  };
  let projectName = document.getElementById("Dataname").value;
  let projectImg = document.getElementById("imagelink").value;
  let projectTech = document.getElementById("tech-used").value;
  let projectLink = document.getElementById("gitlink").value;
  if (projectName === "") {
    alert("Tên dự án không được để trống");
  }
  if (projectImg === "") {
    alert("Hình ảnh dự án không được để trống");
  }
  if (projectTech === "") {
    alert("Công nghệ của dự án không được để trống");
  }
  if (projectLink === "") {
    alert("Link dự án không được để trống");
  }
  const profileIndex = projectData.findIndex(
    (item) => item.projectName === document.getElementById("Dataname").value
  );
  if (
    profileIndex == -1 &&
    projectName &&
    projectImg &&
    projectTech &&
    projectLink
  ) {
    projectData.push(project);
    localStorage.setItem("projectData", JSON.stringify(projectData));
  } else if (profileIndex !== -1) {
    alert("Trùng dự án");
  }
  render();
  addproject.style.display = "none";
  overlay.style.display = "none";
});
console.log();
function render() {
  projectData = JSON.parse(localStorage.getItem("projectData")) || [];
  projectData.forEach((object, index) => {
    object.id = index + 1;
  });
  document.getElementById("table-change").innerHTML = "";
  for (const key of projectData) {
    document.getElementById("table-change").innerHTML += `<tr>
                <td class="table-th" width="10%">${key.id}</td>
                <td class="table-th">${key.projectName}</td>
                <td class="table-th"><img src="${key.projectImg}" alt="" /></td>
                <td class="table-th">${key.projectTech}</td>
                <td class="table-th">
                  <button type="button" class="updateBtn" onclick="Update(${key.id})">Sửa</button
                  ><button type="button" class="deleteBtn" onclick="Delete(${key.id})">Xóa</button>
                </td>
              </tr>`;
  }
}
let addproject2 = document.getElementById("updateDataForm2");
function Update(id) {
  if (addproject2.style.display === "none") {
    addproject2.style.display = "flex";
  } else {
    addproject2.style.display === "none";
  }
  if (overlay.style.display === "none") {
    overlay.style.display = "block";
  } else {
    overlay.style.display === "none";
  }
  currentProjectData =
    JSON.parse(localStorage.getItem("currentProjectData")) || [];
  let project = {
    changeid: id,
  };
  currentProjectData.push(project);
  localStorage.setItem(
    "currentProjectData",
    JSON.stringify(currentProjectData)
  );
}
function Delete(id) {
  projectData = JSON.parse(localStorage.getItem("projectData")) || [];
  let confirmDelete = confirm("Bạn chắc chắn muốn xóa chứ?");
  if (confirmDelete) {
    projectData.splice(id - 1, 1);
  }
  localStorage.setItem("projectData", JSON.stringify(projectData));
  render();
}
console.log(projectData);
document.getElementById("submitUpdate2").addEventListener("click", function () {
  currentProjectData =
    JSON.parse(localStorage.getItem("currentProjectData")) || [];

  const profileIndex = projectData.findIndex(
    (item) => item.projectName === document.getElementById("Dataname2").value
  );
  let projectName = document.getElementById("Dataname2").value;
  let projectImg = document.getElementById("imagelink2").value;
  let projectTech = document.getElementById("tech-used2").value;
  let projectLink = document.getElementById("gitlink2").value;
  if (projectName === "") {
    alert("Tên dự án không được để trống");
  }
  if (projectImg === "") {
    alert("Hình ảnh dự án không được để trống");
  }
  if (projectTech === "") {
    alert("Công nghệ của dự án không được để trống");
  }
  if (projectLink === "") {
    alert("Link dự án không được để trống");
  }
  if (
    (profileIndex === -1 &&
      projectName &&
      projectImg &&
      projectTech &&
      projectLink) ||
    (projectName ===
      projectData[currentProjectData[0].changeid - 1].projectName &&
      projectName &&
      projectImg &&
      projectTech &&
      projectLink)
  ) {
    projectData[currentProjectData[0].changeid - 1].projectName =
      document.getElementById("Dataname2").value;
    projectData[currentProjectData[0].changeid - 1].projectImg =
      document.getElementById("imagelink2").value;
    projectData[currentProjectData[0].changeid - 1].projectTech =
      document.getElementById("tech-used2").value;
    projectData[currentProjectData[0].changeid - 1].projectLink =
      document.getElementById("gitlink2").value;
    console.log(projectData);
  } else if (profileIndex !== -1) {
    alert("Trùng tên dự án khác");
  }
  localStorage.setItem("projectData", JSON.stringify(projectData));
  localStorage.removeItem("currentProjectData");
  render();
  addproject2.style.display = "none";
  overlay.style.display = "none";
});
let addproject = document.getElementById("updateDataForm");
let overlay = document.getElementById("overlay");
document.querySelector(".add-project").addEventListener("click", function () {
  console.log(overlay);
  if (addproject.style.display === "none") {
    addproject.style.display = "flex";
  } else {
    addproject.style.display === "none";
  }
  if (overlay.style.display === "none") {
    overlay.style.display = "block";
  } else {
    overlay.style.display === "none";
  }
});

document.getElementById("cancelUpdate").addEventListener("click", function () {
  addproject.style.display = "none";
  overlay.style.display = "none";
});
document.getElementById("cancelUpdate2").addEventListener("click", function () {
  addproject2.style.display = "none";
  overlay.style.display = "none";
  localStorage.removeItem("currentProjectData");
});
document.getElementById("close-button").addEventListener("click", function () {
  addproject.style.display = "none";
  overlay.style.display = "none";
});
document.getElementById("close-button2").addEventListener("click", function () {
  addproject2.style.display = "none";
  overlay.style.display = "none";
  localStorage.removeItem("currentProjectData");
});
