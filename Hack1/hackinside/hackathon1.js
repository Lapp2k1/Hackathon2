let skillData = JSON.parse(localStorage.getItem("skillData")) || [];
let projectData = JSON.parse(localStorage.getItem("projectData")) || [];

render()
function render() {
  document.getElementById("skill-range").innerHTML = "";
  for (const key of skillData) {
    document.getElementById(
      "skill-range"
    ).innerHTML += `   <div class="learn_items">
              <div class="laern_img" style="background-image: url(${key.skillImg})"></div>
              <div class="learn_content">
                <p class="learn_head">${key.skillName}</p>
                <p class="learn_desc">${key.skillExp} Year Experience</p>
              </div>`;
  }
  document.getElementById("project-range").innerHTML = "";
    for (const key of projectData) {
      for (const key of projectData) {
       
      }
    document.getElementById("project-range").innerHTML += ` <div>
            <a href="${key.projectLink}" class="container_inner">
              <div class="container_group">
                <div class="container_top">
                  <div class="container_images" style="background-image: url(${key.projectImg})"></div>
                  <div class="container_lists">
                    <p class="container_desc-head">${key.projectName}</p>
                    <p class="container_desc-link">${key.projectLink}</p>
                  </div>
                </div>
                <div class="container_bottom">       
                  <div class="container_bt-item">${key.projectTech}</div>
                </div>
              </div>
            </a>
          </div>`;
  }
}
console.log(document.getElementById("project-range").innerHTML);
